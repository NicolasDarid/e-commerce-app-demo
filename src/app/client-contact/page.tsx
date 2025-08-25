"use client";

import { useProductStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, Send } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRateLimit } from "@/lib/useRateLimit";

// Schéma de validation Zod
const contactSchema = z.object({
  nom: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom ne peut contenir que des lettres"),
  prenom: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le prénom ne peut contenir que des lettres"),
  adresse: z
    .string()
    .min(10, "L'adresse doit être complète (au moins 10 caractères)")
    .max(200, "L'adresse ne peut pas dépasser 200 caractères"),
  telephone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Format de téléphone invalide (ex: 06 12 34 56 78)"
    ),
  commentaire: z
    .string()
    .max(500, "Le commentaire ne peut pas dépasser 500 caractères")
    .optional(),
  recaptcha: z.string().min(1, "Veuillez valider le reCAPTCHA"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ClientContactPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useProductStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Rate limiting: 3 tentatives max par 15 minutes, 5 minutes de cooldown
  const rateLimit = useRateLimit({
    maxAttempts: 3,
    windowMs: 15 * 60 * 1000, // 15 minutes
    cooldownMs: 5 * 60 * 1000, // 5 minutes
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      adresse: "",
      telephone: "",
      commentaire: "",
      recaptcha: "",
    },
  });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setValue("recaptcha", token || "");
  };

  const onSubmit = async (data: ContactFormData) => {
    // Vérifier le rate limiting côté client
    if (!rateLimit.attempt()) {
      if (rateLimit.isBlocked) {
        const minutes = Math.floor(rateLimit.timeUntilReset / 60);
        const seconds = rateLimit.timeUntilReset % 60;
        toast.error(
          `Trop de tentatives. Réessayez dans ${minutes}m ${seconds}s.`
        );
      } else {
        toast.error(
          `Tentative ${rateLimit.attempts + 1}/${
            rateLimit.attempts + rateLimit.remainingAttempts
          }. Réessayez plus tard.`
        );
      }
      return;
    }

    setIsSubmitting(true);
    try {
      // Préparer les données pour l'API
      const requestData = {
        formData: data,
        cart: cart.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          category: item.category,
          quantity: item.quantity,
          price: item.selectedFormat?.price ?? item.price ?? 0,
          poids: item.selectedFormat?.poids ?? item.poids,
          selectedFormat: item.selectedFormat,
        })),
        total: getCartTotal(),
        recaptchaToken: recaptchaToken,
      };

      // Envoyer à l'API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      toast.success("Votre demande a été envoyée avec succès !");
      reset(); // Réinitialise le formulaire
      setRecaptchaToken(null); // Réinitialise le reCAPTCHA
      rateLimit.reset(); // Réinitialise le rate limiter après succès
      clearCart(); // Vider le panier après succès
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Votre panier est vide
            </h1>
            <p className="text-gray-600 mb-8">
              Ajoutez des produits à votre panier avant de passer votre
              commande.
            </p>
            <Button asChild>
              <Link href="/">Retourner aux produits</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-full mx-auto">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📋 Finaliser votre commande
            </h1>
            <p className="text-xl text-gray-600">
              Vérifiez votre panier et renseignez vos informations de contact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Récapitulatif du panier */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    🛒 Récapitulatif du panier ({cart.length} articles)
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                  >
                    <Trash2 className="h-4 w-4" />
                    Vider
                  </button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {cart.map((item) => {
                    const price = item.selectedFormat?.price ?? item.price ?? 0;
                    const poids =
                      item.selectedFormat?.poids ?? item.poids ?? "";

                    return (
                      <div
                        key={`${item.id}-${poids ?? "default"}`}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="w-16 h-16 object-cover object-left rounded-md"
                        />

                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>
                          {poids && (
                            <p className="text-sm text-gray-600">
                              Format: {poids}
                            </p>
                          )}
                          <p className="text-lg font-bold text-gray-900">
                            €{price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.cartKey, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>

                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.cartKey, item.quantity + 1)
                            }
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="flex flex-col items-end space-y-2">
                          <p className="font-bold text-gray-900">
                            €{(price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.cartKey)}
                            className="text-red-600 hover:text-red-700 p-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      €{getCartTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  📝 Vos informations
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nom *
                      </label>
                      <Input
                        id="nom"
                        {...register("nom")}
                        placeholder="Votre nom"
                        className={`w-full ${
                          errors.nom
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }`}
                      />
                      {errors.nom && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.nom.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Prénom *
                      </label>
                      <Input
                        id="prenom"
                        {...register("prenom")}
                        placeholder="Votre prénom"
                        className={`w-full ${
                          errors.prenom
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }`}
                      />
                      {errors.prenom && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.prenom.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="adresse"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Adresse complète *
                    </label>
                    <Textarea
                      id="adresse"
                      {...register("adresse")}
                      placeholder="Votre adresse complète"
                      rows={3}
                      className={`w-full ${
                        errors.adresse
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    />
                    {errors.adresse && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.adresse.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Numéro de téléphone *
                    </label>
                    <Input
                      id="telephone"
                      {...register("telephone")}
                      placeholder="06 12 34 56 78"
                      className={`w-full ${
                        errors.telephone
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    />
                    {errors.telephone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.telephone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="commentaire"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Commentaire (optionnel)
                    </label>
                    <Textarea
                      id="commentaire"
                      {...register("commentaire")}
                      placeholder="Ajoutez un commentaire ou une demande spéciale..."
                      rows={4}
                      className={`w-full ${
                        errors.commentaire
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    />
                    {errors.commentaire && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.commentaire.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vérification de sécurité *
                    </label>
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        sitekey={
                          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                          "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        }
                        onChange={handleRecaptchaChange}
                        theme="light"
                        size="normal"
                      />
                    </div>
                    {errors.recaptcha && (
                      <p className="text-red-500 text-sm mt-1 text-center">
                        {errors.recaptcha.message}
                      </p>
                    )}
                  </div>

                  {/* Indicateur de rate limiting */}
                  {rateLimit.attempts > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-700">
                          Tentatives restantes : {rateLimit.remainingAttempts}
                        </span>
                        {rateLimit.timeUntilReset > 0 && (
                          <span className="text-blue-600">
                            Réinitialisation dans{" "}
                            {Math.floor(rateLimit.timeUntilReset / 60)}m{" "}
                            {rateLimit.timeUntilReset % 60}s
                          </span>
                        )}
                      </div>
                      <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${
                              (rateLimit.attempts /
                                (rateLimit.attempts +
                                  rateLimit.remainingAttempts)) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={
                      isSubmitting || !recaptchaToken || rateLimit.isBlocked
                    }
                    className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Envoyer ma commande
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
