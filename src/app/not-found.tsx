import { Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-10 max-w-md text-center">
        {/* Icône */}
        <div className="flex items-center justify-center mb-6">
          <Search className="h-16 w-16 text-gray-400" />
        </div>

        {/* Titre */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Oups, page introuvable !
        </h1>

        {/* Texte */}
        <p className="text-gray-600 mb-6">
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>

        {/* Bouton */}
        <Link href="/" passHref>
          <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Home className="h-5 w-5" />
            Retour à l’accueil
          </button>
        </Link>
      </div>
    </div>
  );
}
