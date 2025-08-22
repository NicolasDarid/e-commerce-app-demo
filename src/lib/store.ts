import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  image: string;
  href: string;
  category: string;
  description?: string;
  analyse?: { key: string; value: string }[];
  composition?: string;
  poids?: string;
  isNew?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

interface ProductStore {
  // État d'hydratation
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;

  // Favoris
  favorites: number[];
  addToFavorites: (productId: number) => void;
  removeFromFavorites: (productId: number) => void;
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;

  // Panier
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;

  // Historique des vues
  recentlyViewed: number[]; // juste les IDs
  addToRecentlyViewed: (productId: number) => void;
  clearRecentlyViewed: () => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      // État d'hydratation
      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },

      // Favoris
      favorites: [],
      addToFavorites: (productId) =>
        set((state) => ({
          favorites: [...new Set([...state.favorites, productId])],
        })),
      removeFromFavorites: (productId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== productId),
        })),
      toggleFavorite: (productId) => {
        const { favorites, addToFavorites, removeFromFavorites } = get();
        if (favorites.includes(productId)) {
          removeFromFavorites(productId);
        } else {
          addToFavorites(productId);
        }
      },
      isFavorite: (productId) => get().favorites.includes(productId),

      // Panier
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ),
        })),
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        const { cart } = get();
        return cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      getCartItemCount: () => {
        const { cart } = get();
        return cart.reduce((count, item) => count + item.quantity, 0);
      },

      // Historique des vues
      recentlyViewed: [],
      addToRecentlyViewed: (productId) =>
        set((state) => {
          const filtered = state.recentlyViewed.filter(
            (id) => id !== productId
          );
          return {
            recentlyViewed: [productId, ...filtered].slice(0, 3), // garde les 3 derniers
          };
        }),
      clearRecentlyViewed: () => set({ recentlyViewed: [] }),
    }),
    {
      name: "product-store",
      partialize: (state) => ({
        favorites: state.favorites,
        cart: state.cart,
        recentlyViewed: state.recentlyViewed,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
