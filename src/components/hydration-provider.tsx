"use client";

import { useEffect, useState } from "react";
import { useProductStore } from "@/lib/store";

interface HydrationProviderProps {
  children: React.ReactNode;
}

export default function HydrationProvider({
  children,
}: HydrationProviderProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const { _hasHydrated } = useProductStore();

  useEffect(() => {
    if (_hasHydrated) {
      setIsHydrated(true);
    }
  }, [_hasHydrated]);

  // Afficher un skeleton ou rien pendant l'hydratation
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            {/* Skeleton pour le header */}
            <div className="h-16 bg-gray-200 rounded mb-8"></div>

            {/* Skeleton pour le hero */}
            <div className="text-center mb-12">
              <div className="h-12 bg-gray-200 rounded mb-4 max-w-2xl mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded max-w-xl mx-auto"></div>
            </div>

            {/* Skeleton pour les catégories */}
            <div className="mb-12">
              <div className="h-8 bg-gray-200 rounded mb-6 w-48"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-200 rounded-xl p-6 h-32"
                  ></div>
                ))}
              </div>
            </div>

            {/* Skeleton pour les produits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-4">
                  <div className="h-48 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
