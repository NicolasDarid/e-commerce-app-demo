"use client";

import ProductCard from "@/components/productCard";
import { products } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function ProduitsChats() {
  const [activeFilter, setActiveFilter] = useState("tous");

  // Filtrer les produits selon la catégorie
  const getFilteredProducts = (filter: string) => {
    let result: Product[] = [];

    switch (filter) {
      case "chat":
        result = products.filter(
          (produit) =>
            produit.category.toLowerCase().includes("chat") &&
            !produit.category.toLowerCase().includes("chaton")
        );
        break;

      case "chatons":
        result = products.filter((produit) =>
          produit.category.toLowerCase().includes("chaton")
        );
        break;

      default:
        result = products.filter(
          (produit) =>
            produit.category.toLowerCase().includes("chat") ||
            produit.category.toLowerCase().includes("chaton")
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
            🐈😺 Nos produits pour chats 🐈😺
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Toujours les meilleurs produits au meilleur prix pour vos chats ! 😻
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
                <TabsTrigger value="chats" className="flex items-center gap-2">
                  <span>Chats adultes</span>
                  <Badge variant="secondary" className="text-xs">
                    {getFilteredProducts("chats").length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="chatons"
                  className="flex items-center gap-2"
                >
                  <span>Chatons</span>
                  <Badge variant="secondary" className="text-xs">
                    {getFilteredProducts("chatons").length}
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tous" className="mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🐈 Tous nos produits pour chats
                </h3>
                <p className="text-sm text-gray-500">
                  {filteredProducts.length} produits disponibles
                </p>
              </div>
            </TabsContent>

            <TabsContent value="chats" className="mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🐈 Produits pour chats adultes
                </h3>
                <p className="text-sm text-gray-500">
                  {filteredProducts.length} produits disponibles
                </p>
              </div>
            </TabsContent>

            <TabsContent value="chatons" className="mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  🐈 Produits pour chatons
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
