import ProductCard from "@/components/productCard";
import { products, categories } from "@/lib/data";
import RecentlyViewedSection from "@/components/recentlyViewedSection";
import FavoritesSection from "@/components/favoriteSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto min-lg:px-4 min-lg:py-8">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🐈🐱 Bienvenue chez PetStore Demo 🐶🐕
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout pour le bonheur de vos compagnons à 4 pattes. PetStore Demo est
            là pour vous depuis 2025.
          </p>
        </div>

        {/* Catégories */}
        <CategoriesSection />

        {/* Section des favoris */}
        <FavoritesSection />

        {/* Section historique des vues */}
        <RecentlyViewedSection />

        {/* Tous les produits */}
        <AllProductsSection />
      </div>
    </div>
  );
}

// Composant pour afficher les catégories
function CategoriesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        🔖 Catégories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={`/produits/${category.href}`}>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-medium text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {products.filter((p) => p.category === category.name).length}{" "}
                produits
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Composant pour afficher tous les produits
function AllProductsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        🛍️ Tous nos Produits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
