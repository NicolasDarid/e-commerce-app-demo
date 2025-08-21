import { PawPrint } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <PawPrint className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold">Run Kroket</h3>
                <p className="text-gray-400">Boutique en ligne</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre boutique de confiance pour tous les besoins de vos
              compagnons à 4 pattes. Qualité, service et amour des animaux
              depuis 2014.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-400">📧 runkroket@runkroket.re</span>
              <span className="text-gray-400">📞 06 92 33 42 43</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🏠 Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/chiens"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🐕 Produits Chiens
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/chats"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🐱 Produits Chats
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/promotions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🎉 Promotions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📞 Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ❓ FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📦 Livraison
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🔄 Retours
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  🛡️ Garantie
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  📋 CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 RunKroket. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Mentions légales
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
