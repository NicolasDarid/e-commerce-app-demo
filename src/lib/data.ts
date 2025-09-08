import { Product } from "./store";

// Données d'exemple pour produits chiens et chats - Portfolio Demo
export const products: Product[] = [
  // PRODUITS CHIENS - NUTRITION
  {
    id: 1,
    name: "Croquettes Premium - Poulet & Riz Complet",
    image: "/product-dog-1.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "15 Kg", price: 65.0 },
      { poids: "5 Kg", price: 25.0 },
    ],
    description:
      "Croquettes premium pour chiens adultes de toutes tailles, formulées avec du poulet frais et du riz complet. Riche en protéines de qualité et en fibres naturelles pour une digestion optimale. Idéal pour maintenir la santé et l'énergie de votre compagnon.",
    analyse: [
      { key: "Protéines brutes", value: "28,00%" },
      { key: "Matières grasses brutes", value: "15,00%" },
      { key: "Fibres brutes", value: "3,50%" },
      { key: "Cendres brutes", value: "7,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Poulet frais (30%), Riz complet (25%), Pois, Graisse de poulet, Carottes, Pommes, Vitamines et minéraux, Huile de saumon, Probiotiques naturels",
  },
  {
    id: 2,
    name: "Croquettes Sport - Agneau & Patate Douce",
    image: "/product-dog-2.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 72.0 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Formule spécialement conçue pour les chiens actifs et sportifs. Riche en agneau de qualité et en patate douce pour une énergie durable. Contient des glucosamine et chondroïtine pour soutenir les articulations.",
    analyse: [
      { key: "Protéines brutes", value: "32,00%" },
      { key: "Matières grasses brutes", value: "18,00%" },
      { key: "Fibres brutes", value: "2,50%" },
      { key: "Cendres brutes", value: "6,50%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Agneau frais (35%), Patate douce (20%), Pois, Graisse d'agneau, Carottes, Myrtilles, Glucosamine, Chondroïtine, Vitamines et minéraux",
  },
  {
    id: 3,
    name: "Croquettes Sensibles - Saumon & Quinoa",
    image: "/product-dog-3.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "10 Kg", price: 68.0 },
      { poids: "2 Kg", price: 18.0 },
    ],
    description:
      "Formule hypoallergénique pour chiens aux estomacs sensibles. À base de saumon sauvage et de quinoa, sans céréales. Riche en oméga-3 pour une peau et un pelage sains.",
    analyse: [
      { key: "Protéines brutes", value: "26,00%" },
      { key: "Matières grasses brutes", value: "14,00%" },
      { key: "Fibres brutes", value: "4,00%" },
      { key: "Cendres brutes", value: "6,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Saumon sauvage (28%), Quinoa (20%), Patate douce, Graisse de saumon, Carottes, Épinards, Huile de lin, Probiotiques, Vitamines et minéraux",
  },
  {
    id: 4,
    name: "Croquettes Chiots - Dinde & Légumes",
    image: "/product-dog-4.jpg",
    category: "Nutrition Chiots",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "8 Kg", price: 58.0 },
      { poids: "2 Kg", price: 18.0 },
    ],
    description:
      "Alimentation spécialement formulée pour les chiots en pleine croissance. Riche en dinde de qualité et en légumes frais. Contient du DHA pour le développement cérébral et des vitamines essentielles.",
    analyse: [
      { key: "Protéines brutes", value: "30,00%" },
      { key: "Matières grasses brutes", value: "16,00%" },
      { key: "Fibres brutes", value: "3,00%" },
      { key: "Cendres brutes", value: "7,50%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Dinde fraîche (32%), Riz complet (18%), Carottes, Pois, Graisse de dinde, Pommes, Myrtilles, DHA, Calcium, Phosphore, Vitamines et minéraux",
  },
  {
    id: 5,
    name: "Croquettes Senior - Canard & Riz Brun",
    image: "/product-dog-5.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "10 Kg", price: 62.0 },
      { poids: "3 Kg", price: 20.0 },
    ],
    description:
      "Formule adaptée aux besoins des chiens seniors. À base de canard et de riz brun pour une digestion facile. Enrichie en glucosamine et antioxydants pour soutenir la mobilité et la vitalité.",
    analyse: [
      { key: "Protéines brutes", value: "24,00%" },
      { key: "Matières grasses brutes", value: "12,00%" },
      { key: "Fibres brutes", value: "4,50%" },
      { key: "Cendres brutes", value: "6,50%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Canard frais (25%), Riz brun (20%), Patate douce, Carottes, Pois, Graisse de canard, Glucosamine, Chondroïtine, Antioxydants, Vitamines et minéraux",
  },
  // PRODUITS CHATS - NUTRITION
  {
    id: 6,
    name: "Croquettes Chat - Thon & Riz",
    image: "/product-cat-1.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    formats: [
      { poids: "5 Kg", price: 45.0 },
      { poids: "1 Kg", price: 12.0 },
    ],
    description:
      "Croquettes premium pour chats adultes, formulées avec du thon frais et du riz complet. Riche en protéines et en taurine pour la santé cardiaque et oculaire. Formule équilibrée pour maintenir un poids optimal.",
    analyse: [
      { key: "Protéines brutes", value: "32,00%" },
      { key: "Matières grasses brutes", value: "14,00%" },
      { key: "Fibres brutes", value: "3,00%" },
      { key: "Cendres brutes", value: "7,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Thon frais (30%), Riz complet (20%), Pois, Graisse de poulet, Carottes, Vitamines et minéraux, Taurine, Huile de saumon",
  },
  {
    id: 7,
    name: "Croquettes Chat Stérilisé - Poulet & Fibres",
    image: "/product-cat-2.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    formats: [
      { poids: "4 Kg", price: 42.0 },
      { poids: "1 Kg", price: 12.0 },
    ],
    description:
      "Formule spécialement conçue pour les chats stérilisés. Riche en fibres pour contrôler le poids et en protéines de qualité. Contient des ingrédients naturels pour favoriser l'élimination des boules de poils.",
    analyse: [
      { key: "Protéines brutes", value: "28,00%" },
      { key: "Matières grasses brutes", value: "12,00%" },
      { key: "Fibres brutes", value: "5,00%" },
      { key: "Cendres brutes", value: "7,50%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Poulet frais (25%), Riz complet (18%), Fibres de pois (8%), Carottes, Graisse de poulet, Vitamines et minéraux, Taurine, Huile de lin",
  },
  {
    id: 8,
    name: "Croquettes Chaton - Saumon & Légumes",
    image: "/product-cat-3.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    formats: [
      { poids: "3 Kg", price: 38.0 },
      { poids: "1 Kg", price: 15.0 },
    ],
    description:
      "Alimentation spécialement formulée pour les chatons en pleine croissance. Riche en saumon et en légumes frais. Contient du DHA pour le développement cérébral et des vitamines essentielles.",
    analyse: [
      { key: "Protéines brutes", value: "35,00%" },
      { key: "Matières grasses brutes", value: "16,00%" },
      { key: "Fibres brutes", value: "2,50%" },
      { key: "Cendres brutes", value: "7,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Saumon frais (35%), Riz complet (15%), Carottes, Pois, Graisse de saumon, DHA, Calcium, Phosphore, Taurine, Vitamines et minéraux",
  },
  // PRODUITS HYGIÈNE CHIENS
  {
    id: 9,
    name: "Shampoing Doux - Aloe Vera",
    image: "/product-dog-5.jpg",
    category: "Hygiène Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "500ml", price: 18.0 },
      { poids: "250ml", price: 12.0 },
    ],
    description:
      "Shampoing doux et naturel à base d'aloe vera pour chiens. Formule hypoallergénique qui respecte la peau sensible de votre compagnon. Laisse un pelage doux et brillant.",
    analyse: [
      { key: "pH", value: "7.0" },
      { key: "Volume", value: "500ml" },
      { key: "Type", value: "Doux" },
    ],
    composition:
      "Eau purifiée, Aloe vera (15%), Huile de coco, Vitamine E, Extrait de camomille, Parfum naturel",
  },
  {
    id: 10,
    name: "Brosse de Toilettage - Poils Courts",
    image: "/product-dog-1.jpg",
    category: "Hygiène Chien",
    isNew: true,
    href: "chiens",
    formats: [{ poids: "1 unité", price: 15.0 }],
    description:
      "Brosse de toilettage spécialement conçue pour les chiens à poils courts. Poils souples qui massent la peau et éliminent les poils morts. Manche ergonomique pour un confort optimal.",
    analyse: [
      { key: "Type", value: "Brosse" },
      { key: "Matériau", value: "Bois et poils naturels" },
      { key: "Taille", value: "Moyenne" },
    ],
    composition:
      "Manche en bois de hêtre, Poils en soie naturelle, Rivets en acier inoxydable",
  },
  // PRODUITS HYGIÈNE CHATS
  {
    id: 11,
    name: "Shampoing Sec - Fleurs de Lavande",
    image: "/product-dog-3.jpg",
    category: "Hygiène Chat",
    isNew: true,
    href: "chats",
    formats: [
      { poids: "200ml", price: 16.0 },
      { poids: "100ml", price: 10.0 },
    ],
    description:
      "Shampoing sec parfumé aux fleurs de lavande pour chats. Idéal pour rafraîchir le pelage entre les bains. Formule douce qui ne nécessite pas de rinçage.",
    analyse: [
      { key: "pH", value: "6.5" },
      { key: "Volume", value: "200ml" },
      { key: "Type", value: "Sec" },
    ],
    composition:
      "Poudre d'argile blanche, Extrait de lavande, Huile essentielle de lavande, Vitamine E, Parfum naturel",
  },
  {
    id: 12,
    name: "Brosse Anti-Boules - Poils Longs",
    image: "/product-dog-4.jpg",
    category: "Hygiène Chat",
    isNew: true,
    href: "chats",
    formats: [{ poids: "1 unité", price: 18.0 }],
    description:
      "Brosse spécialement conçue pour éliminer les boules de poils chez les chats à poils longs. Poils métalliques fins qui démêlent sans tirer. Manche confortable pour un toilettage agréable.",
    analyse: [
      { key: "Type", value: "Brosse anti-boules" },
      { key: "Matériau", value: "Plastique et métal" },
      { key: "Taille", value: "Standard" },
    ],
    composition:
      "Manche en plastique ABS, Poils en acier inoxydable, Boutons de sécurité",
  },
  // PRODUITS COMPLÉMENTS
  {
    id: 13,
    name: "Complément Articulations - Glucosamine",
    image: "/product-complement-1.jpg",
    category: "Compléments",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "120 comprimés", price: 28.0 },
      { poids: "60 comprimés", price: 16.0 },
    ],
    description:
      "Complément alimentaire pour soutenir la santé articulaire des chiens. Riche en glucosamine et chondroïtine. Idéal pour les chiens actifs et seniors.",
    analyse: [
      { key: "Glucosamine", value: "500mg/comprimé" },
      { key: "Chondroïtine", value: "400mg/comprimé" },
      { key: "MSM", value: "200mg/comprimé" },
    ],
    composition:
      "Glucosamine sulfate, Chondroïtine sulfate, MSM, Vitamine C, Manganèse, Sélénium",
  },
  {
    id: 14,
    name: "Complément Pelage - Oméga 3 & 6",
    image: "/product-complement-2.jpg",
    category: "Compléments",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "100ml", price: 22.0 },
      { poids: "50ml", price: 14.0 },
    ],
    description:
      "Complément alimentaire pour un pelage sain et brillant. Riche en oméga 3 et 6. Favorise la santé de la peau et réduit les démangeaisons.",
    analyse: [
      { key: "Oméga 3", value: "1000mg/5ml" },
      { key: "Oméga 6", value: "800mg/5ml" },
      { key: "Vitamine E", value: "50mg/5ml" },
    ],
    composition: "Huile de saumon, Huile de lin, Vitamine E, Zinc, Biotine",
  },
  {
    id: 15,
    name: "Complément Digestion - Probiotiques",
    image: "/product-complement-3.jpg",
    category: "Compléments",
    isNew: true,
    href: "chats",
    formats: [
      { poids: "60 gélules", price: 24.0 },
      { poids: "30 gélules", price: 14.0 },
    ],
    description:
      "Complément alimentaire pour soutenir la digestion des chats. Riche en probiotiques et prébiotiques. Aide à maintenir une flore intestinale équilibrée.",
    analyse: [
      { key: "Probiotiques", value: "5 milliards UFC/gélule" },
      { key: "Prébiotiques", value: "200mg/gélule" },
      { key: "Fibres", value: "150mg/gélule" },
    ],
    composition:
      "Lactobacillus acidophilus, Bifidobacterium, Fructo-oligosaccharides, Inuline, Vitamines B",
  },
  // PRODUITS JOUETS
  {
    id: 16,
    name: "Jouet Interactif - Balle Puzzle",
    image: "/product-jouet-1.jpg",
    category: "Jouets",
    isNew: true,
    href: "chiens",
    formats: [{ poids: "1 unité", price: 12.0 }],
    description:
      "Jouet interactif pour stimuler l'intelligence de votre chien. Balle puzzle avec compartiments pour friandises. Encourage l'activité mentale et physique.",
    analyse: [
      { key: "Matériau", value: "Caoutchouc naturel" },
      { key: "Taille", value: "Moyenne" },
      { key: "Âge", value: "Tous âges" },
    ],
    composition: "Caoutchouc naturel, Colorants alimentaires, Sans BPA",
  },
  {
    id: 17,
    name: "Jouet Chat - Souris Électronique",
    image: "/product-jouet-2.jpg",
    category: "Jouets",
    isNew: true,
    href: "chats",
    formats: [{ poids: "1 unité", price: 18.0 }],
    description:
      "Souris électronique interactive pour chats. Mouvements aléatoires qui stimulent l'instinct de chasse. Batterie rechargeable incluse.",
    analyse: [
      { key: "Matériau", value: "Plastique et fourrure" },
      { key: "Batterie", value: "Rechargeable" },
      { key: "Taille", value: "Petite" },
    ],
    composition:
      "Plastique ABS, Fourrure synthétique, Moteur électrique, Batterie lithium-ion",
  },
  // PRODUITS ACCESSOIRES
  {
    id: 18,
    name: "Collier LED - Sécurité Nocturne",
    image: "/product-accessoire-1.jpg",
    category: "Accessoires",
    isNew: true,
    href: "chiens",
    formats: [{ poids: "1 unité", price: 25.0 }],
    description:
      "Collier LED pour la sécurité nocturne de votre chien. Éclairage LED puissant et visible. Batterie rechargeable et étanche.",
    analyse: [
      { key: "Matériau", value: "Nylon et LED" },
      { key: "Batterie", value: "Rechargeable" },
      { key: "Autonomie", value: "8 heures" },
    ],
    composition:
      "Nylon résistant, LED haute luminosité, Batterie lithium-ion, Boîtier étanche",
  },
  {
    id: 19,
    name: "Gamelle Anti-Glouton - Chien",
    image: "/product-accessoire-2.jpg",
    category: "Accessoires",
    isNew: true,
    href: "chiens",
    formats: [{ poids: "1 unité", price: 20.0 }],
    description:
      "Gamelle anti-glouton pour ralentir la prise alimentaire de votre chien. Design avec obstacles qui favorisent une mastication lente et une meilleure digestion.",
    analyse: [
      { key: "Matériau", value: "Acier inoxydable" },
      { key: "Capacité", value: "500ml" },
      { key: "Type", value: "Anti-glouton" },
    ],
    composition:
      "Acier inoxydable 304, Base antidérapante en silicone, Design ergonomique",
  },
  {
    id: 20,
    name: "Arbre à Chat - 3 Niveaux",
    image: "/product-accessoire-3.jpg",
    category: "Accessoires",
    isNew: true,
    href: "chats",
    formats: [{ poids: "1 unité", price: 89.0 }],
    description:
      "Arbre à chat moderne avec 3 niveaux et griffoir intégré. Design élégant qui s'intègre parfaitement dans votre intérieur. Matériaux durables et faciles à nettoyer.",
    analyse: [
      { key: "Matériau", value: "Bois et sisal" },
      { key: "Hauteur", value: "120cm" },
      { key: "Niveaux", value: "3" },
    ],
    composition:
      "Bois de pin massif, Sisal naturel, Tissu velours, Mousse haute densité, Vis et fixations métalliques",
  },
];

export const categories = [
  { name: "Nutrition Chien", icon: "🐶", href: "chiens" },
  { name: "Nutrition Chat", icon: "🐱", href: "chats" },
  { name: "Nutrition Chiots", icon: "🐕", href: "chiens" },
  { name: "Hygiène Chien", icon: "🛁", href: "chiens" },
  { name: "Hygiène Chat", icon: "🧽", href: "chats" },
  { name: "Compléments", icon: "💖", href: "chiens" },
  { name: "Jouets", icon: "🎾", href: "chiens" },
  { name: "Accessoires", icon: "🦮", href: "chiens" },
];

export const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Chiens", href: "/produits/chiens" },
  { name: "Chats", href: "/produits/chats" },
  { name: "Promotions", href: "/produits/promotions" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];
