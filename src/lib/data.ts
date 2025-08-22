import { Product } from "./store";

// Données d'exemple pour produits chiens et chats
export const products: Product[] = [
  {
    id: 1,
    name: "Croquettes - Dog&Dog Wild Regional Farm",
    price: 70.0,
    poids: "12 Kg",
    image: "/DD_wregionalfarm_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    description:
      "Croquettes riches en protéines animales pour Chiens adultes de toutes tailles, préférant les viandes blanches d’élevage libre. Aussi adapté pour les chiennes allaitantes ou gestantes. Préparé avec une grande variété de viandes provenant des fermes européennes, telles que le canard, poulet et lapin, complétés par des œufs, des légumes, des fruits et fleurs.",
    analyse: [
      { key: "Protéines brutes", value: "41,90%" },
      { key: "Matières grasses brutes", value: "19,50%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "7,00°%" },
    ],
    composition:
      "Poulet séché fraîchement préparé (25%), Pois, Cerdo ibérique désossé séché, Graisse animale, Châtaignes cassées, Canard cuit séché (6%), Protéines de poulet hydrolysées, Lapin désossé séché (4%), Oeufs, Fleurs d’hibiscus (0,192%), Fleurs de Rosa canina L. et Rosa pendulina L. 0,024%, Framboises (0,008%), Mûres (0,008%), Fraises (0,008%)",
  },
  {
    id: 2,
    name: "Jouet Squeaky Ball pour Chien",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.5,
    reviews: 892,
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=300&fit=crop",
    category: "Jouets Chien",
    href: "chiens",
  },
  {
    id: 3,
    name: "Litière Bio pour Chat",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.3,
    reviews: 567,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop",
    category: "Hygiène Chat",
    href: "chats",
  },
  {
    id: 4,
    name: "Harnais Comfort Plus Chien",
    price: 34.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 743,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&fit=crop",
    category: "Accessoires Chien",
    description: "Description",
    href: "chiens",
  },
  {
    id: 5,
    name: "Pâtée Gourmet Chat",
    price: 8.99,
    originalPrice: 11.99,
    rating: 4.6,
    reviews: 1023,
    image:
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=300&h=300&fit=crop",
    category: "Nutrition Chat",
    href: "chats",
  },
  {
    id: 6,
    name: "Arbre à Chat 3 Niveaux",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviews: 456,
    image:
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=300&h=300&fit=crop",
    category: "Accessoires Chat",
    href: "chats",
  },
  {
    id: 7,
    name: "Shampoing Doux Chien",
    price: 16.99,
    originalPrice: 19.99,
    rating: 4.2,
    reviews: 678,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&fit=crop",
    category: "Hygiène Chien",
    href: "chiens",
  },
  {
    id: 8,
    name: "Jouet Souris Interactive Chat",
    price: 9.99,
    rating: 4.7,
    reviews: 789,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop",
    category: "Jouets Chat",
    href: "chats",
  },
  {
    id: 9,
    name: "Brosse Anti-Nœuds Chien",
    price: 22.99,
    originalPrice: 27.99,
    rating: 4.5,
    reviews: 534,
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&fit=crop",
    category: "Soins Chien",
    href: "chiens",
  },
];

export const categories = [
  { name: "Nutrition Chien", icon: "🐶", href: "chiens" },
  { name: "Nutrition Chat", icon: "🐱", href: "chats" },
  { name: "Jouets Chien", icon: "🎾", href: "chiens" },
  { name: "Jouets Chat", icon: "🐭", href: "chats" },
  { name: "Accessoires Chien", icon: "🦮", href: "chiens" },
  { name: "Accessoires Chat", icon: "🐈", href: "chats" },
  { name: "Hygiène Chien", icon: "🛁", href: "chiens" },
  { name: "Hygiène Chat", icon: "🧽", href: "chats" },
  { name: "Soins Chien", icon: "🐩", href: "chiens" },
];

export const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Chiens", href: "/produits/chiens" },
  { name: "Chats", href: "/produits/chats" },
  { name: "Promotions", href: "/produits/promotions" },
  { name: "Contact", href: "/contact" },
];
