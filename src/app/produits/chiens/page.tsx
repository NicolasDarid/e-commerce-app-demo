import ProductCard from "@/components/productCard";
import { products } from "@/lib/data";

export default function ProduitsChiens() {
  const filteredProducts = products.filter((produit) =>
    produit.category.toLowerCase().includes("chien")
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🐶🐕 Nos produits pour chiens 🐶🐕
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ces produits ont été sélectionnés parmis des dizaines. Ne donnez que
            le meilleur à vos chiens.
          </p>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            🛍️ Tous nos Produits 🐕
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {filteredProducts.length} produits
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
