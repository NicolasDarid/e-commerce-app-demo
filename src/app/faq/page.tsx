"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ❓ Questions Fréquentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos produits et
            services.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Commandes */}
          <FAQSection
            title="🛒 Commandes et Livraison"
            icon="📦"
            faqs={[
              {
                question: "Comment passer une commande ?",
                answer:
                  "Vous pouvez passer commande directement sur notre site en sélectionnant vos produits, en ajoutant au panier et en suivant le processus de demande de livraison.",
              },
              {
                question: "Quels sont les délais de livraison ?",
                answer:
                  "Les délais de livraison varient selon votre localisation. En général, comptez 2-5 jours ouvrés.",
              },
              {
                question: "La livraison est-elle gratuite ?",
                answer:
                  "La livraison est gratuite pour toute commande sans frais supplémentaires.",
              },
              {
                question: "Puis-je modifier ou annuler ma commande ?",
                answer:
                  "Vous pouvez modifier ou annuler votre commande dans les 2 heures suivant sa validation. Contactez-nous rapidement par téléphone ou email.",
              },
            ]}
          />

          {/* Section Produits */}
          <FAQSection
            title="🐕🐱 Nos Produits"
            icon="🦴"
            faqs={[
              {
                question: "Vos produits sont-ils de qualité premium ?",
                answer:
                  "Oui, nous avons des produits de qualité premium pour vos compagnons reconnus pour leur excellence.",
              },
              {
                question:
                  "Comment choisir les bonnes croquettes pour mon animal ?",
                answer:
                  "Le choix dépend de l'âge, de la taille, de l'activité et des préférences de votre animal. N'hésitez pas à nous contacter pour un conseil personnalisé.",
              },
              {
                question: "Proposez-vous des produits sans céréales ?",
                answer:
                  "Oui, nous proposons une large gamme de produits sans céréales et avec des ingrédients frais.",
              },
              {
                question:
                  "Les produits sont-ils adaptés aux chiots et chatons ?",
                answer:
                  "Nous proposons des produits spécifiquement formulés pour les chiots et chatons, avec des apports nutritionnels adaptés à leur croissance.",
              },
            ]}
          />

          {/* Section Paiement */}
          <FAQSection
            title="💳 Paiement et Sécurité"
            icon="🔒"
            faqs={[
              {
                question: "Quels moyens de paiement acceptez-vous ?",
                answer:
                  "Nous accepterons bientôt les cartes bancaires (Visa, Mastercard).",
              },
              {
                question: "Proposez-vous le paiement en plusieurs fois ?",
                answer:
                  "Non, pour le moment nous ne proposons pas le paiement en plusieurs fois.",
              },
              {
                question: "Est ce que vous acceptez de faire crédit ?",
                answer: "Non, nous ne faisons pas crédit.",
              },
            ]}
          />

          {/* Section Service Client */}
          <FAQSection
            title="🎧 Service Client"
            icon="📞"
            faqs={[
              {
                question: "Comment vous contacter ?",
                answer:
                  "Vous pouvez nous contacter par téléphone au +33 6 12 34 56 78, par email à nicolasdarid@gmail.com, ou via notre page GitHub.",
              },
              {
                question: "Quels sont vos horaires d'ouverture ?",
                answer:
                  "Notre équipe est disponible du lundi au vendredi de 9h à 18h pour répondre à vos questions et traiter vos commandes.",
              },
              {
                question: "Proposez-vous des conseils personnalisés ?",
                answer:
                  "Oui, notre équipe est formée pour vous conseiller sur le choix des produits adaptés à votre animal. N'hésitez pas à nous appeler !",
              },
            ]}
          />

          {/* Section Retours */}
          <FAQSection
            title="↩️ Retours et Garanties"
            icon="✅"
            faqs={[
              {
                question: "Puis-je retourner un produit ?",
                answer:
                  "Oui, vous disposez de 14 jours pour retourner un produit non utilisé et dans son emballage d'origine. Vous pouvez nous contacter pour un retour du moment où le produit n'est pas encore ouvert.",
              },
              {
                question: "Que faire si mon animal n'aime pas les croquettes ?",
                answer:
                  "Si votre animal n'apprécie pas les croquettes, vous pouvez nous contacter et nous pourrons vous aider au cas par cas.",
              },
              {
                question: "Y a-t-il une garantie sur vos produits ?",
                answer:
                  "Tous nos produits bénéficient de la garantie légale de conformité. En cas de problème, contactez-nous immédiatement.",
              },
            ]}
          />
        </div>

        {/* Section Contact */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              💬 Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider. N&apos;hésitez pas à nous
              contacter !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33612345678"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                📞 Nous appeler
              </a>
              <a
                href="/contact"
                className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                📧 Nous écrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant FAQ Section
function FAQSection({
  title,
  icon,
  faqs,
}: {
  title: string;
  icon: string;
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

// Composant FAQ Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
