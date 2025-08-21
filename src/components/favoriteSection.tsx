"use client";
import { useProductStore } from "@/lib/store";
import ProductCard from "./productCard";
import { products } from "@/lib/data";

export default function FavoritesSection() {
  const { favorites } = useProductStore();
  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  if (favoriteProducts.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">❤️ Mes Favoris</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
