"use client";

import ProductCard from "@/components/productCard";
import { products } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Product } from "@/lib/store";

export default function ProduitsChiens() {
  const [activeFilter, setActiveFilter] = useState("tous");

  // Filtrer les produits selon la catégorie
  const getFilteredProducts = (filter: string) => {
    let result: Product[] = [];

    switch (filter) {
      case "chiens":
        result = products.filter(
          (produit) =>
            produit.category.toLowerCase().includes("chien") &&
            !produit.category.toLowerCase().includes("chiot")
        );
        break;

      case "chiots":
        result = products.filter((produit) =>
          produit.category.toLowerCase().includes("chiot")
        );
        break;

      default:
        result = products.filter(
          (produit) =>
            produit.category.toLowerCase().includes("chien") ||
            produit.category.toLowerCase().includes("chiot")
        );
        break;
    }

    // ✅ tri alphabétique par nom
    return result.sort((a, b) => a.name.localeCompare(b.name));
  };

  const filteredProducts = getFilteredProducts(activeFilter);

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

        {/* Filtres */}
        <div className="mb-8">
          <Tabs
            value={activeFilter}
            onValueChange={setActiveFilter}
            className="w-full"
          >
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🛍️ Filtrer par catégorie
              </h2>
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="tous" className="flex items-center gap-2">
                  <span>Tous</span>
                  <Badge variant="secondary" className="text-xs">
                    {getFilteredProducts("tous").length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="chiens" className="flex items-center gap-2">
                  <span>Chiens adultes</span>
                  <Badge variant="secondary" className="text-xs">
                    {getFilteredProducts("chiens").length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="chiots" className="flex items-center gap-2">
                  <span>Chiots</span>
                  <Badge variant="secondary" className="text-xs">
                    {getFilteredProducts("chiots").length}
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tous" className="mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🐕 Tous nos produits pour chiens
                </h3>
                <p className="text-sm text-gray-500">
                  {filteredProducts.length} produits disponibles
                </p>
              </div>
            </TabsContent>

            <TabsContent value="chiens" className="mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🐕 Produits pour chiens adultes
                </h3>
                <p className="text-sm text-gray-500">
                  {filteredProducts.length} produits disponibles
                </p>
              </div>
            </TabsContent>

            <TabsContent value="chiots" className="mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🐕 Produits pour chiots
                </h3>
                <p className="text-sm text-gray-500">
                  {filteredProducts.length} produits disponibles
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Grille des produits */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun produit trouvé pour cette catégorie.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
