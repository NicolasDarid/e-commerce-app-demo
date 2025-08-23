import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BaseProduct {
  id: number;
  name: string;
  rating?: number;
  reviews?: number;
  image: string;
  href: string;
  category: string;
  description?: string;
  analyse?: { key: string; value: string }[];
  composition?: string;
  isNew?: boolean;
}

// Produit simple
export interface SingleFormatProduct extends BaseProduct {
  price: number;
  originalPrice?: number;
  poids?: string;
}

// Produit multi-format
export interface MultiFormatProduct extends BaseProduct {
  formats: {
    poids: string;
    price: number;
    originalPrice?: number;
  }[];
}

// Union
export type Product = SingleFormatProduct | MultiFormatProduct;

// Item du panier
interface CartItem extends Product {
  quantity: number;
  cartKey: string; // id unique pour le panier = id + format
  // si produit multi-format
  selectedFormat?: {
    poids: string;
    price: number;
    originalPrice?: number;
  };
  // si produit single-format
  poids?: string;
  price?: number;
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
  addToCart: (
    product: Product,
    format?: { poids: string; price: number; originalPrice?: number }
  ) => void;
  removeFromCart: (cartKey: string) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
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
      addToCart: (
        product: Product,
        format?: { poids: string; price: number }
      ) =>
        set((state) => {
          const actualFormat = format ?? {
            poids: product.poids ?? "",
            price: product.price,
          };
          const cartKey = `${product.id}-${actualFormat.poids}`;

          const existingItem = state.cart.find(
            (item) => item.cartKey === cartKey
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.cartKey === cartKey
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: 1,
                selectedFormat: actualFormat,
                cartKey,
              },
            ],
          };
        }),

      removeFromCart: (cartKey: string) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.cartKey !== cartKey),
        })),

      updateQuantity: (cartKey: string, quantity: number) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartKey === cartKey
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ),
        })),

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        const { cart } = get();
        return cart.reduce((total, item) => {
          const price = item.selectedFormat
            ? item.selectedFormat.price
            : (item as SingleFormatProduct).price;
          return total + price * item.quantity;
        }, 0);
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
