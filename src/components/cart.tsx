"use client";

import { useProductStore } from "@/lib/store";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useProductStore();

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Votre panier est vide
        </h3>
        <p className="text-gray-500">
          Ajoutez des produits pour commencer vos achats
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Panier ({cart.length} articles)
        </h2>
        <button
          onClick={clearCart}
          className="text-sm text-red-600 hover:text-red-700 font-medium justify-items-center"
        >
          <Trash2 className="h-4 w-4" />
          Vider le panier
        </button>
      </div>

      <div className="space-y-4">
        {cart.map((item) => {
          const price = item.selectedFormat?.price ?? item.price ?? 0; // fallback pour éviter undefined

          const poids = item.selectedFormat?.poids ?? item.poids ?? "";

          return (
            <div
              key={`${item.id}-${poids ?? "default"}`}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="w-16 h-16 object-cover object-left rounded-md"
              />

              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                {poids && (
                  <p className="text-sm text-gray-600">Format: {poids}</p>
                )}
                <p className="text-lg font-bold text-gray-900">
                  €{price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center space-x-2 max-md:flex-col">
                <button
                  onClick={() =>
                    updateQuantity(item.cartKey, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                  className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-8 text-center font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(item.cartKey, item.quantity + 1)
                  }
                  className="p-1 rounded-full hover:bg-gray-200"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col items-end space-y-2">
                <p className="font-bold text-gray-900">
                  €{(price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.cartKey)}
                  className="text-red-600 hover:text-red-700 p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-gray-900">Total</span>
          <span className="text-2xl font-bold text-gray-900">
            €{getCartTotal().toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
