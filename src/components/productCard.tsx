"use client";

import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useProductStore, Product } from "@/lib/store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

export default function ProductCard({
  product,
  showAddToCart = true,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const router = useRouter();

  // Utilisation du store Zustand
  const { isFavorite, toggleFavorite, addToCart, addToRecentlyViewed } =
    useProductStore();

  const handleAddToCart = () => {
    if (!product) {
      toast.error("Produit introuvable");
      return;
    }
    if (product.formats) {
      addToCart(product, product.formats[0]);
    } else {
      addToCart(product);
    }
    addToRecentlyViewed(product.id);
    toast.success("Produit ajouté au panier");
  };

  const [clicked, setClicked] = useState(false);

  const handleFavoriteClick = () => {
    if (!product) {
      toast.error("Produit introuvable");
      return;
    }
    if (clicked) return; // ignore les clics pendant l'animation
    toggleFavorite(product.id);
    if (isFavorite(product.id)) {
      toast.success("Produit ajouté aux favoris");
      addToRecentlyViewed(product.id);
    } else {
      toast.success("Produit retiré des favoris");
    }
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // correspond à la durée de l'animation
  };

  const handleImageLoad = () => {
    if (!product) {
      return;
    }
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group cursor-pointer"
      role="article"
      aria-label={`Produit: ${product.name}`}
      onClick={() => router.push(`/produits/${product.href}/${product.id}`)}
    >
      <div className="relative">
        {imageLoading && (
          <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Chargement...</div>
          </div>
        )}

        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ${
              imageLoading ? "hidden" : "block"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            priority={true}
          />
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <div className="text-gray-400 text-sm">Image non disponible</div>
          </div>
        )}

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Nouveau
          </span>
        )}

        <button
          className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition-colors ${
            isFavorite(product.id)
              ? "bg-red-50 hover:bg-red-100"
              : "bg-white hover:bg-gray-50"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteClick();
          }}
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
            } ${clicked ? "scale-125 opacity-75" : "scale-100 opacity-100"}`}
          />
        </button>

        {product.rating !== undefined && product.reviews !== undefined && (
          <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full shadow-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <span className="text-xs font-medium">{product.rating}</span>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-blue-600 font-medium">
            {product.category}
          </span>
        </div>

        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {product.formats && product.formats.length > 0 ? (
              <>
                <span className="text-lg font-bold text-gray-900">
                  €{product.formats[0].price.toFixed(2)}
                </span>
                {product.formats[0].originalPrice !== undefined &&
                  product.formats[0].originalPrice >
                    product.formats[0].price && (
                    <span className="text-sm text-gray-500 line-through">
                      €{product.formats[0].originalPrice.toFixed(2)}
                    </span>
                  )}
                <span className="text-sm text-gray-600">
                  ({product.formats[0].poids})
                </span>
              </>
            ) : (
              <>
                <span className="text-lg font-bold text-gray-900">
                  €{product.price.toFixed(2)}
                </span>
                {product.originalPrice !== undefined &&
                  product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      €{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                {product.poids && (
                  <span className="text-sm text-gray-600">
                    ({product.poids})
                  </span>
                )}
              </>
            )}
          </div>

          {showAddToCart && (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              aria-label={`Ajouter ${product.name} au panier`}
            >
              Ajouter
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
