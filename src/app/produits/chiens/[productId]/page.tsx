"use client";

import { products } from "@/lib/data";
import { Product, SingleFormatProduct, useProductStore } from "@/lib/store";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import RecentlyViewedSection from "@/components/recentlyViewedSection";
import { notFound } from "next/navigation";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const resolvedParams = use(params); // Résout la promesse
  const { productId } = resolvedParams;

  const product = products.find((p) => p.id === Number(productId));
  if (!product) notFound();
  const { isFavorite, toggleFavorite, addToCart, addToRecentlyViewed } =
    useProductStore();

  const [clicked, setClicked] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(() => {
    if ("formats" in product && product.formats.length > 0) {
      // produit multi-format
      return product.formats[0];
    } else {
      // produit simple
      const single = product as SingleFormatProduct;
      return { poids: single.poids ?? "", price: single.price ?? 0 };
    }
  });

  const handleFavoriteClick = () => {
    if (clicked) return; // ignore les clics pendant l'animation
    if (!product) return;
    toggleFavorite(product.id);
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // correspond à la durée de l'animation
  };

  const handleShopClick = () => {
    if (!product) return;
    if ("formats" in product) {
      addToCart(product, selectedFormat);
    } else {
      addToCart(product);
    }
    toast.success("Article ajouté au panier");
  };

  // Ajouter le produit aux vues récentes
  useEffect(() => {
    if (product) addToRecentlyViewed(product.id);
  }, [addToRecentlyViewed, product, product?.id]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image et badges */}
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-contain rounded-xl shadow-md"
            />
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Nouveau
              </span>
            )}
            <button
              className="absolute top-3 right-3 p-2 rounded-full shadow-sm bg-white hover:bg-gray-50 transition-colors"
              onClick={handleFavoriteClick}
              aria-label={
                isFavorite(product.id)
                  ? "Retirer des favoris"
                  : "Ajouter aux favoris"
              }
            >
              <Heart
                className={`h-5 w-5 transition-transform duration-150 ${
                  isFavorite(product.id)
                    ? "text-red-500 fill-current"
                    : "text-gray-600"
                } ${
                  clicked ? "scale-125 opacity-75" : "scale-100 opacity-100"
                }`}
              />
            </button>
          </div>

          {/* Infos produit */}
          <div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <span className="text-sm text-blue-600 font-medium">
                {product.category}
              </span>
              {"formats" in product ? (
                <div className="mt-4 mb-6">
                  {product.formats.length > 1 ? (
                    <>
                      <Label className="block text-md font-medium text-gray-700 mb-2">
                        Format
                      </Label>
                      <Select
                        value={selectedFormat.poids}
                        onValueChange={(val) => {
                          const format = product.formats.find(
                            (f) => f.poids === val
                          );
                          setSelectedFormat(format ?? product.formats[0]);
                        }}
                      >
                        <SelectTrigger className="w-fit text-md border rounded-lg px-3 py-2 text-gray-900 border-gray-400/50">
                          <SelectValue placeholder="Sélectionner un format" />
                        </SelectTrigger>

                        <SelectContent className="bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                          {product.formats.map((f) => (
                            <SelectItem
                              key={f.poids}
                              value={f.poids}
                              className="hover:bg-blue-50 data-[highlighted]:bg-blue-100 rounded-md px-2 py-1 text-gray-900 text-md"
                            >
                              {f.poids} - €{f.price.toFixed(2)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </>
                  ) : (
                    <div className="text-lg font-bold text-gray-900">
                      {product.formats[0].poids} - €
                      {product.formats[0].price.toFixed(2)}
                    </div>
                  )}
                </div>
              ) : (
                ClassicDisplay(product)
              )}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex flex-row items-center gap-4"
                onClick={handleShopClick}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ajouter au panier
              </button>
              <button
                className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors shadow-sm border ${
                  isFavorite(product.id)
                    ? "bg-red-50 border-red-300 text-red-600 hover:bg-red-100"
                    : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
                onClick={handleFavoriteClick}
              >
                <motion.span
                  className="flex items-center"
                  animate={{ scale: clicked ? 1.15 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Heart
                    className={`h-5 w-5 mr-2 ${
                      isFavorite(product.id)
                        ? "text-red-500 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                  {isFavorite(product.id)
                    ? "Retirer des favoris"
                    : "Ajouter aux favoris"}
                </motion.span>
              </button>
            </div>

            {/* Description */}
            {product.description ? (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Description
                </h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ) : null}

            {/* Analyse du produit */}
            {product.analyse && product.analyse.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Analyse
                </h2>
                <table className="w-full text-left border border-gray-200 rounded-md overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border-b">Composant</th>
                      <th className="px-4 py-2 border-b">Valeur</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.analyse.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b">{item.key}</td>
                        <td className="px-4 py-2 border-b">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Section Composition */}
        {product.composition && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              📋 Composition
            </h2>
            <p className="text-gray-700">{product.composition}</p>
          </div>
        )}

        {/* Section produits favoris / récemment vus / même catégorie */}
        <div className="mt-16">
          <RecentlyViewedSection />
        </div>
      </div>
    </div>
  );
}

const ClassicDisplay = (product: Product) => {
  return (
    <div className="flex items-center mt-4 mb-6 space-x-4">
      <span className="text-2xl font-bold text-gray-900">
        €{getDefaultPrice(product).toFixed(2)}
      </span>
      {getDefaultOriginalPrice(product) !== undefined &&
        getDefaultOriginalPrice(product) > getDefaultPrice(product) && (
          <span className="text-sm text-gray-500 line-through">
            €{getDefaultOriginalPrice(product).toFixed(2)}
          </span>
        )}
      {getDefaultPoids(product) && (
        <span className="text-2xl font-bold text-gray-900 m-auto">
          {getDefaultPoids(product)}
        </span>
      )}
    </div>
  );
};

function getDefaultPrice(product: Product): number {
  if ("formats" in product && product.formats.length > 0) {
    return product.formats[0].price;
  }
  return (product as SingleFormatProduct).price;
}

function getDefaultPoids(product: Product): string {
  if ("formats" in product && product.formats.length > 0) {
    return product.formats[0].poids;
  }
  const single = product as SingleFormatProduct;
  return single.poids ?? ""; // <-- fallback vide si undefined
}

function getDefaultOriginalPrice(product: Product): number {
  if ("formats" in product && product.formats.length > 0) {
    return product.formats[0].originalPrice;
  }
  return (product as SingleFormatProduct).originalPrice;
}
