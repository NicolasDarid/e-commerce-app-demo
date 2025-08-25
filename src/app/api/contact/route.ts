import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { emailService } from "@/lib/email/emailService";
import { ContactRequest } from "@/lib/email/types";

// Schéma de validation côté serveur
const contactSchema = z.object({
  formData: z.object({
    nom: z.string().min(2).max(50),
    prenom: z.string().min(2).max(50),
    adresse: z.string().min(10).max(200),
    telephone: z
      .string()
      .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/),
    commentaire: z.string().max(500).optional(),
    recaptcha: z.string().min(1),
  }),
  cart: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      image: z.string(),
      category: z.string(),
      quantity: z.number().positive(),
      price: z.number().positive(),
      poids: z.string().optional(),
      selectedFormat: z
        .object({
          poids: z.string(),
          price: z.number(),
        })
        .optional(),
    })
  ),
  total: z.number().positive(),
  recaptchaToken: z.string().min(1),
});

// Rate limiting côté serveur (simple en mémoire - en production, utiliser Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxAttempts = 5; // Plus permissif côté serveur

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // Nouvelle fenêtre ou expirée
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return {
      allowed: true,
      remaining: maxAttempts - 1,
      resetTime: now + windowMs,
    };
  }

  if (record.count >= maxAttempts) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  // Incrémenter le compteur
  record.count++;
  rateLimitMap.set(ip, record);

  return {
    allowed: true,
    remaining: maxAttempts - record.count,
    resetTime: record.resetTime,
  };
}

// Nettoyer les anciens enregistrements toutes les 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 15 * 60 * 1000);

export async function POST(request: NextRequest) {
  try {
    // Récupérer l'IP pour le rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Vérifier le rate limiting
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      const resetTime = new Date(rateLimit.resetTime).toISOString();
      return NextResponse.json(
        {
          error: "Trop de tentatives. Réessayez plus tard.",
          resetTime,
        },
        { status: 429 }
      );
    }

    // Récupérer et valider les données
    const body = await request.json();

    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return NextResponse.json({ error: "Données invalides" }, { status: 400 });
    }

    const data: ContactRequest = validationResult.data;

    // Vérifier que le panier n'est pas vide
    if (data.cart.length === 0) {
      return NextResponse.json(
        { error: "Le panier ne peut pas être vide" },
        { status: 400 }
      );
    }

    // Vérifier la cohérence du total
    const calculatedTotal = data.cart.reduce((sum, item) => {
      const price = item.selectedFormat?.price ?? item.price;
      return sum + price * item.quantity;
    }, 0);

    if (Math.abs(calculatedTotal - data.total) > 0.01) {
      console.error("Total mismatch:", {
        calculated: calculatedTotal,
        received: data.total,
      });
      return NextResponse.json(
        { error: "Incohérence dans le calcul du total" },
        { status: 400 }
      );
    }

    // Envoyer l'email
    const emailResult = await emailService.sendContactEmail(data);

    if (!emailResult.success) {
      console.error("Email sending failed:", emailResult.error);
      return NextResponse.json(
        {
          error: "Erreur lors de l'envoi de l'email",
          details: emailResult.error,
        },
        { status: 500 }
      );
    }

    // Succès
    return NextResponse.json({
      success: true,
      message: "Votre demande a été envoyée avec succès",
      rateLimit: {
        remaining: rateLimit.remaining,
        resetTime: new Date(rateLimit.resetTime).toISOString(),
      },
    });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

// Route de test pour vérifier la configuration email
export async function GET() {
  try {
    const isConnected = await emailService.verifyConnection();
    const config = emailService.getConfig();

    return NextResponse.json({
      status: "ok",
      emailService: {
        connected: isConnected,
        service: config.service,
        fromEmail: config.fromEmail,
        toEmail: config.toEmail,
      },
    });
  } catch (error) {
    console.error("API contact GET error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la vérification de la configuration" },
      { status: 500 }
    );
  }
}
