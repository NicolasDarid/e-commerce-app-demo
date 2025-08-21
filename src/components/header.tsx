"use client";

import { useState } from "react";
import { useProductStore } from "@/lib/store";
import { ShoppingCart, Heart, Menu, X, PawPrint } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Cart from "./cart";
import { Button } from "./ui/button";
import Link from "next/link";
import SearchBar from "./searchBar";
import { navigation } from "@/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartItemCount, favorites } = useProductStore();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">RunKroket</h1>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Barre de recherche desktop */}
            <div className="hidden md:block">
              <SearchBar />
            </div>

            {/* Favoris (desktop seulement) */}
            <Button
              className={`hidden md:block relative p-2 text-gray-600 bg-transparent ${
                favorites.length < 1
                  ? "disabled bg-gray-400/50 hover:bg-gray-400/50"
                  : "cursor-pointer hover:text-red-500 hover:bg-accent"
              }`}
            >
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Button>

            {/* Panier */}
            <Button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-accent bg-transparent transition-colors cursor-pointer"
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Button>

            {/* Menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white shadow-lg md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Recherche mobile */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <SearchBar />
              </div>
              {/* Favoris mobile */}
              <button className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
                <Heart className="h-5 w-5" />
                <span>Favoris ({favorites.length})</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panier latéral */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="flex-1 bg-black/20"
              onClick={() => setIsCartOpen(false)}
            />
            {/* Sidebar panier */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="h-full w-80 max-w-full bg-white shadow-xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Mon Panier
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="h-full overflow-y-auto">
                <Cart />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
