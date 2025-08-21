"use client";

import { useProductStore } from "@/lib/store";
import ProductCard from "./productCard";

// Composant pour afficher l'historique des vues
export default function RecentlyViewedSection() {
  const { recentlyViewed } = useProductStore();

  if (recentlyViewed.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        👀 Récemment consultés
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentlyViewed.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
