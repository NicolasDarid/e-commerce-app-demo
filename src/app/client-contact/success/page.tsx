"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Home, Mail } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icône mail en haut */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          {/* Titre avec CheckCircle */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Demande envoyée avec succès !
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Votre demande de commande a été transmise à notre équipe avec
              succès.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">
                📞 Prochaines étapes
              </h2>
              <p className="text-blue-800 leading-relaxed">
                Notre équipe va analyser votre demande et vous contactera dans
                les plus brefs délais pour finaliser votre commande et organiser
                la livraison.
              </p>
            </div>
          </div>

          {/* Bouton de retour */}
          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Retourner à l&apos;accueil
              </Link>
            </Button>

            <p className="text-gray-500 text-sm">
              Merci de votre confiance en Runkroket ! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
