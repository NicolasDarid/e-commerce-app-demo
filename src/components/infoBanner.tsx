"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function StorageNotice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 bg-gray-900 text-white text-sm p-4 rounded-lg shadow-lg flex items-start gap-2 z-50">
      <span>ℹ️</span>
      <p className="flex-1">
        Ce site utilise le <strong>stockage local</strong> de votre navigateur
        pour conserver votre panier, vos favoris et vos produits consultés
        récemment. Aucune donnée n’est transmise à des tiers.{" "}
        <a href="/politique-confidentialite" className="underline">
          En savoir plus
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 text-gray-300 hover:text-white"
      >
        <X />
      </button>
    </div>
  );
}
