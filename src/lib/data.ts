import { Product } from "./store";

// Données d'exemple pour produits chiens et chats
export const products: Product[] = [
  {
    id: 1,
    name: "Croquettes - Dog&Dog Wild Regional Farm",
    image: "/DD_wregionalfarm_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 70.0 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Croquettes riches en protéines animales pour Chiens adultes de toutes tailles, préférant les viandes blanches d’élevage libre. Aussi adapté pour les chiennes allaitantes ou gestantes. Préparé avec une grande variété de viandes provenant des fermes européennes, telles que le canard, poulet et lapin, complétés par des œufs, des légumes, des fruits et fleurs.",
    analyse: [
      { key: "Protéines brutes", value: "41,90%" },
      { key: "Matières grasses brutes", value: "19,50%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "7,00°%" },
      { key: "Humidité", value: "10,00°%" },
    ],
    composition:
      "Poulet séché fraîchement préparé (25%), Pois, Cerdo ibérique désossé séché, Graisse animale, Châtaignes cassées, Canard cuit séché (6%), Protéines de poulet hydrolysées, Lapin désossé séché (4%), Oeufs, Fleurs d’hibiscus (0,192%), Fleurs de Rosa canina L. et Rosa pendulina L. 0,024%, Framboises (0,008%), Mûres (0,008%), Fraises (0,008%)",
  },
  {
    id: 2,
    name: "Croquettes - Dog&Dog Wild Regional Grassland",
    image: "/DD_wregionalgrassland_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 70.0 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Croquettes riches en protéines animales pour chiens adultes de toutes tailles, préférant les viandes rouges d’élevage libre. Aussi adapté pour chiennes allaitantes ou gestantes. Préparé avec une grande variété de viandes des prairies européennes, telles que le Cerdo ibérique, l’agneau et le buffle, complétées par des œufs, des légumes, des fruits et des fleurs. Idéal pour les chiens de toutes tailles préférant la viande rouge d’animaux élevés dans les pâturages ouverts.",
    analyse: [
      { key: "Protéines brutes", value: "40,80%" },
      { key: "Matières grasses brutes", value: "19,50%" },
      { key: "Fibres brutes", value: "2,10%" },
      { key: "Cendres brutes", value: "7,40°%" },
      { key: "Humidité", value: "10,00°%" },
    ],
    composition:
      "Cerdo ibérique désossé séché (30%), Pois, Graisse animale, Poulet séché, Marrons cassées, Agneau fermier séché (6%), Protéines animales hydrolysées, Buffle d'eau élevé en liberté séché (4%), Oeufs, Fleurs d’hibiscus (0,192%), Fleurs de Rosa canina L. et Rosa pendulina L. 0,024%, Framboises (0,008%), Mûres (0,008%), Fraises (0,008%)",
  },
  {
    id: 3,
    name: "Croquettes - Dog&Dog Wild Regional Forest",
    image: "/DD_wregionalforest_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 70.0 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Croquettes riches en protéines animales pour Chiens adultes de toutes tailles, préférant les viandes rouges sauvages. Aussi adapté pour chiennes allaitantes ou gestantes. Préparé avec une grande variété de viandes provenant des forêts européennes, telles que le Cerdo ibérique, le sanglier et le gibier, complétées par des œufs, des légumes, des fruits et des fleurs. Idéal pour les chiens de grande taille, préférant la viande rouge.",
    analyse: [
      { key: "Protéines brutes", value: "41,00%" },
      { key: "Matières grasses brutes", value: "19,50%" },
      { key: "Fibres brutes", value: "2,10%" },
      { key: "Cendres brutes", value: "7,00°%" },
      { key: "Humidité", value: "10,00°%" },
    ],
    composition:
      "Cerdo ibérique désossé séché (35%), Pois, Graisse animale, Châtaignes cassées, Sanglier séché (6%), Protéines animales hydrolysées, Poulet séché, Chevreuil sauvage séché (4%), Oeufs, Fleurs d’hibiscus (0,192%), Fleurs de Rosa canina L. et Rosa pendulina L. 0,024%, Framboises (0,008%), Mûres (0,008%), Fraises (0,008%)",
  },
  {
    id: 4,
    name: "Croquettes - Dog&Dog Wild Regional Ocean",
    image: "/DD_wregionalocean_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 70.0 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Croquettes riches en protéines animales pour chiens adultes de toutes tailles, préférant les poissons capturés en pleine mer. Aussi adapté pour chiennes allaitantes ou gestantes Préparé avec une large gamme de poissons sauvages, tels que le poisson bleu, le saumon et la morue, tous pêchés en haute mer, complétés par des œufs, des légumes, des fruits et des fleurs. Idéal pour les chiens préférant les poissons très riches en oméga 3, pour la santé du cœur et des articulations.",
    analyse: [
      { key: "Protéines brutes", value: "40,40%" },
      { key: "Matières grasses brutes", value: "18,50%" },
      { key: "Fibres brutes", value: "1,80%" },
      { key: "Cendres brutes", value: "8,60°%" },
      { key: "Humidité", value: "10,00°%" },
    ],
    composition:
      "Poisson bleu pêché en mer séché (28 %), Pois, Saumon séché en mer (17 %), Graisse animale, Châtaignes cassées, Morue séchée en mer (6 %), Protéines animales hydrolysées, Oeufs, Fleurs d’hibiscus (0,192%), Fleurs de Rosa canina L. et Rosa pendulina L. 0,024%, Framboises (0,008%), Mûres (0,008%), Fraises (0,008%)",
  },
  {
    id: 5,
    name: "Croquettes - Alpha Spirit Free Range Duck",
    image: "/ALPHA_DUCK_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 69.95 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "De la viande fraîche de Canard élevé en plein air en ingrédient principal, et 100% frais, pour des croquettes riches en protéines, et équilibrées pour votre chien. Cette recette est fabriquée sans céréales. Nous utilisons aussi de l'amidon hydrolisé, qui rend la digestion et l'assimilation meilleures pour votre animal. La nourriture a été soignée et choyée dans son processus de fabrication pour garantir la qualité finale du produit, car elle utilise une technologie de fabrication de pointe qui ne soumet pas le produit à des températures élevées ni n'utilise d'aides technologiques. Ce processus est similaire à la cuisson d'aliments produits à la maison, ce qui garantit que le produit a une valeur nutritionnelle élevée et est donc plus sain pour l'animal.",
    analyse: [
      { key: "Protéines brutes", value: "31,5 %" },
      { key: "Matières grasses brutes", value: "17,00%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "8,00°%" },
      { key: "Humidité", value: "16,00°%" },
      { key: "Calcium", value: "1,50%" },
      { key: "Phosphore", value: "1,20%" },
      { key: "Omega 3", value: "2000 mg/kg" },
      { key: "Glucosamine", value: "4400 mg/kg" },
      { key: "Fer", value: "70 mg/kg" },
      { key: "Taurine", value: "3000 mg/kg" },
    ],
    composition:
      "45% viande fraîche de canard, 20% viande fraîche de poulet, 20% poisson frais entier (sardinelle ronde, maquereau, chinchard, sardine), Amidon hydrolysé, Oeufs, Pulpe de betterave, Levure de bière, Poire, Ananas, Chicorée, Banane, Cumin, Origan, Anis, Curcuma, Fenouil",
  },
  {
    id: 6,
    name: "Croquettes - Alpha Spirit Wild Fish",
    image: "/ALPHA_WILDFISH_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 69.95 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Des poissons frais entiers et sauvages en premier ingrédient, pour des croquettes riches en protéines, et équilibrées pour votre chien. Cette recette est composée de sardinelle ronde, maquereau, chinchard et sardine. C'est 85% de poisson frais et entiers ! Pour obtenir une quantité exceptionnelle de protéines de poisson fraîches, nous utilisons notre propre méthode de fabrication qui consiste à cuire à basse température tous ces ingrédients puis de les presser à froid pour maximiser l'assimilation des nutriments. Sardinelle ronde, maquereau, chinchard, sardine : un assortiment de poissons entiers frais, riches en protéines et en bons gras. Cette recette est fabriquée sans céréales. Nous utilisons aussi de l'amidon hydrolisé, qui rend la digestion et l'assimilation meilleures pour votre animal.",
    analyse: [
      { key: "Protéines brutes", value: "30,5 %" },
      { key: "Matières grasses brutes", value: "15,50%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "8,00%" },
      { key: "Humidité", value: "16,00%" },
      { key: "Calcium", value: "1,50%" },
      { key: "Phosphore", value: "1,20%" },
      { key: "Omega 3", value: "2000 mg/kg" },
      { key: "Glucosamine", value: "4400 mg/kg" },
      { key: "Fer", value: "70 mg/kg" },
      { key: "Taurine", value: "3000 mg/kg" },
    ],
    composition:
      "85% poisson frais entier (sardinelle ronde, maquereau, chinchard, sardine), Amidon hydrolisé, Cartilage hydrolisé, Glycérine végétale (USP), Oeufs, Pulpe de betterave, Levure de bière, Citrouille, Poire, Ananas, Thym, Coriandre, Cumin, Curcuma",
  },
  {
    id: 7,
    name: "Croquettes - Alpha Spirit Multi Protein",
    image: "/ALPHA_MULTI_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 69.95 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Cette recette associe de la viande fraîche de poulet, des poissons frais entiers, de la viande fraîche de porc, de la viande fraîche de canard, et enfin du foie de porc, 100% frais, pour vous proposer des croquettes riches en protéines composées à 85% de viandes fraîches et de poissons frais. Parfait pour un repas complet et équilibré pour votre chien. Poulet, poissons entiers, porc, canard : un assortiment de viandes et de poissons frais, riches en protéines ! Cette recette est fabriquée sans céréales. Nous utilisons aussi de l'amidon hydrolisé, qui rend la digestion et l'assimilation meilleures pour votre animal.",
    analyse: [
      { key: "Protéines brutes", value: "30,5 %" },
      { key: "Matières grasses brutes", value: "16,00%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "8,00%" },
      { key: "Humidité", value: "16,00%" },
      { key: "Calcium", value: "1,50%" },
      { key: "Phosphore", value: "1,20%" },
      { key: "Omega 3", value: "2000 mg/kg" },
      { key: "Glucosamine", value: "4400 mg/kg" },
      { key: "Fer", value: "70 mg/kg" },
      { key: "Taurine", value: "3000 mg/kg" },
    ],
    composition:
      "35% viande fraîche de poulet, 20% poisson frais entier (sardinelle ronde, maquereau, chinchard, sardine), 15% viande fraîche de porc, 10% viande fraîche de canard, 5% foie de porc frais, Amidon hydrolysé, Oeufs, Pulpe de betterave, Levure de bière, Potiron, Banane, Ananas, Cumin, Sauge, Gingembre, Curcuma",
  },
  {
    id: 8,
    name: "Croquettes - Alpha Spirit Free Range Poultry",
    image: "/ALPHA_POULTRY_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 69.95 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Du poulet frais en ingrédient principal ainsi que de la viande de dinde et de canard, 100% frais pour une recette de volailles élevées en plein air, riche en protéines, et équilibrée pour votre chien. Poulet, dinde, canard : un assortiment de volailles fraîches élevées en plein, pour une recette riche en protéines! La technologie Tenderize est un processus de fabrication breveté dans lequel nous appliquons une technique de macération à froid, de pré-digestion et de déshydratation, obtenant des produits d'excellente palatabilité produits uniquement à partir de leurs propres jus. La nourriture a été soignée et choyée dans son processus de fabrication pour garantir la qualité finale du produit, car elle utilise une technologie de fabrication de pointe qui ne soumet pas le produit à des températures élevées ni n'utilise d'aides technologiques. Ce processus est similaire à la cuisson d'aliments produits à la maison, ce qui garantit que le produit a une valeur nutritionnelle élevée et est donc plus sain pour l'animal.",
    analyse: [
      { key: "Protéines brutes", value: "30,00 %" },
      { key: "Matières grasses brutes", value: "15,50%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "8,00%" },
      { key: "Humidité", value: "16,00%" },
      { key: "Calcium", value: "1,50%" },
      { key: "Phosphore", value: "1,20%" },
      { key: "Omega 3", value: "2000 mg/kg" },
      { key: "Glucosamine", value: "4400 mg/kg" },
      { key: "Fer", value: "70 mg/kg" },
      { key: "Taurine", value: "3000 mg/kg" },
    ],
    composition:
      "30% viande fraîche de poulet, 25% viande fraîche de dinde, 20% viande fraîche de canard, 10% poisson frais entier (sardinelle ronde, maquereau, chinchard, sardine), Amidon hydrolysé, Oeufs, Pulpe de betterave, Levure de bière, Carottes, Pommes, Romarin, Curcuma",
  },
  {
    id: 9,
    name: "Croquettes - Dog&Dog Wild Puppy",
    image: "/DD_wpuppy_B.jpg",
    category: "Nutrition Chiots",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 70.0 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Croquettes riches en protéines animales pour chiots de toutes tailles ou pour chiennes allaitantes ou gestantes Avec une grande variété de viande, comme le canard et le saumon, complétée par des œufs, des légumes, des fruits et des fleurs. Ingrédients riches en oméga 3 (EPA et DHA), essentiels au bon développement neurologique des chiots.",
    analyse: [
      { key: "Protéines brutes", value: "44,60 %" },
      { key: "Matières grasses brutes", value: "16,00%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "7,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Cerdo ibérique désossé séché (35%), Pois, Graisse animale, Châtaignes cassées, Sanglier séché (6%), Protéines animales hydrolysées, Poulet séché, Chevreuil sauvage séché (4%), Oeufs, Fleurs d’hibiscus (0,192%), Fleurs de Rosa canina L. et Rosa pendulina L. 0,024%, Framboises (0,008%), Mûres (0,008%), Fraises (0,008%)",
  },
  {
    id: 10,
    name: "Croquettes - Alpha Spirit Puppies",
    image: "/ALPHA_PUPPIES_B.jpg",
    category: "Nutrition Chiots",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "12 Kg", price: 69.95 },
      { poids: "3 Kg", price: 22.0 },
    ],
    description:
      "Les croquettes Alpha Spirit The Only One Puppies constituent un aliment savoureux qui se base sur l'alimentation naturelle du chiot et répond parfaitement à ses besoins nutritionnels. Elles ne contiennent que des ingrédients naturels et possèdent une teneur élevée en viande et en poisson frais. Garanties sans céréales, elles sont donc très digestes et présentent une haute appétence. La recette est formulée exclusivement à base de viande ou de poisson frais non extrudés et travaillés selon la nouvelle technologie Tenderize brevetée. Sardinelle ronde, maquereau, chinchard, sardine : un assortiment de poissons entiers frais et de dinde, riches en protéines, riches en bons gras. Cette recette est fabriquée sans céréales. Nous utilisons aussi de l'amidon hydrolisé, qui rend la digestion et l'assimilation meilleures pour votre animal.",
    analyse: [
      { key: "Protéines brutes", value: "31,00 %" },
      { key: "Matières grasses brutes", value: "16,00%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "8,00%" },
      { key: "Humidité", value: "16,00%" },
      { key: "Calcium", value: "1,30%" },
      { key: "Phosphore", value: "1,20%" },
      { key: "Omega 3", value: "2000 mg/kg" },
      { key: "Glucosamine", value: "4400 mg/kg" },
      { key: "Fer", value: "70 mg/kg" },
      { key: "Taurine", value: "3000 mg/kg" },
    ],
    composition:
      "Viandes fraîches et poissons frais partiellement hydrolysés dont 35% viande fraîche de dinde, 20% poisson frais entier dont sardinelle ronde, maquereau, chinchard et sardine, 15% viande fraîche de porc, 10% viande fraîche de canard, 5% foie de poulet frais, Amidon hydrolysé, Oeufs, Pulpe de betterave, Levure de bière, Patate douce, Carotte, Pomme, Cumin, Thym, Curcuma",
  },
  {
    id: 11,
    name: "Croquettes - Dog&Dog Puppy",
    image: "/DD_puppy_B.jpg",
    category: "Nutrition Chiots",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "20 Kg", price: 59.0 },
      { poids: "3 Kg", price: 19.0 },
    ],
    description:
      "Pour chiots de toutes tailles (2 - 12/14/18 mois) et chiennes allaitantes. Nourriture complète et équilibrée pour chiots de toutes races et tailles, convenablement formulée pour le développement du chiot après la phase de sevrage. Les dimensions des croquettes sont réduites pour faciliter la préhension et la mastication, idéale pour la phase de transition vers une alimentation solide. Dans la recette sont utilisées des matières premières hautement digestibles et le L’apport nutritionnel répond également aux exigences de la lactation chiennes.",
    analyse: [
      { key: "Protéines brutes", value: "26,85 %" },
      { key: "Matières grasses brutes", value: "16,00%" },
      { key: "Fibres brutes", value: "3,00%" },
      { key: "Cendres brutes", value: "9,30%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Protéines animales séchées (volaille 14%), Maïs, Grains de blé, Graisse de poulet, Maïs moyen, Riz, Graines oléagineuses grillées et extraites, Poisson séché, Pulpe de betterave séchée, Levure de bière, Protéines animales hydrolysées, Fructo-oligosaccharides",
  },
  {
    id: 12,
    name: "Croquettes - Dog&Dog Superpower",
    image: "/DD_superpower_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    formats: [
      { poids: "20 Kg", price: 59.0 },
      { poids: "3 Kg", price: 19.0 },
    ],
    description:
      "Croquettes riches en poulet pour chiens adultes de toutes tailles (12/18 mois - 7 ans) avec un niveau d’activité très élevé ou pour chiennes en gestation. L’apport ultra-renforcé en protéines et graisses uniquement d’origine animale pour promouvoir l’endurance typique du métabolisme canin. L’apport nutritionnel répond aux besoins liés à la plupart des activités physique intenses. La densité calorique maximale du produit soutient le chien pendant les phases de très forte dépense énergétique.",
    analyse: [
      { key: "Protéines brutes", value: "32,00 %" },
      { key: "Matières grasses brutes", value: "22,00%" },
      { key: "Fibres brutes", value: "2,25%" },
      { key: "Cendres brutes", value: "7,80%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Protéines animales séchées (14%), Graisse de poulet, Grains de blé, Riz (14%), Maïs, Protéines animales, Farine de caroube, Levure de bière",
  },
  {
    id: 13,
    name: "Croquettes - Alpha Spirit Iberian Porc",
    image: "/AS_IB_PORK_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    price: 55,
    poids: "12 Kg",
    description:
      "ALIMENT COMPLET POUR CHIENS ADULTES. Nourriture adaptée aux chiens de toutes races. Une méthode de fabrication unique : une quantité exceptionnelle de protéines animales fraîches, une cuisson basse température pour conserver tous les bienfaits des ingrédients et un pressage à froid pour une bonne assimilation des nutriments.",
    analyse: [
      { key: "Protéines brutes", value: "28,50 %" },
      { key: "Matières grasses brutes", value: "16,50%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "8,00%" },
      { key: "Humidité", value: "18,00%" },
    ],
    composition:
      "70% porc frais, Riz, Pulpe de betterave, Levure de bière, Curcuma",
  },
  {
    id: 14,
    name: "Croquettes - Alpha Spirit Iberian Sardine",
    image: "/AS_IB_SARDINE_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    price: 55,
    poids: "12 Kg",
    description:
      "ALIMENT COMPLET POUR CHIENS ADULTES. Nourriture adaptée aux chiens de toutes races. Une méthode de fabrication unique : une quantité exceptionnelle de protéines animales fraîches, une cuisson basse température pour conserver tous les bienfaits des ingrédients et un pressage à froid pour une bonne assimilation des nutriments.",
    analyse: [
      { key: "Protéines brutes", value: "28,40 %" },
      { key: "Matières grasses brutes", value: "16,80%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "8,10%" },
      { key: "Humidité", value: "18,00%" },
    ],
    composition:
      "40% porc frais, 30% Sardine fraiche, Riz, Pulpe de betterave, Levure de bière, Curcuma",
  },
  {
    id: 15,
    name: "Croquettes - Alpha Spirit Iberian Saumon",
    image: "/AS_IB_SAUMON_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    price: 55,
    poids: "12 Kg",
    description:
      "ALIMENT COMPLET POUR CHIENS ADULTES. Nourriture adaptée aux chiens de toutes races. Une méthode de fabrication unique : une quantité exceptionnelle de protéines animales fraîches, une cuisson basse température pour conserver tous les bienfaits des ingrédients et un pressage à froid pour une bonne assimilation des nutriments.",
    analyse: [
      { key: "Protéines brutes", value: "28,20 %" },
      { key: "Matières grasses brutes", value: "16,80%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "8,20%" },
      { key: "Humidité", value: "18,00%" },
    ],
    composition:
      "40% porc frais, 30% Saumon frais, Riz, Pulpe de betterave, Levure de bière, Curcuma",
  },
  {
    id: 16,
    name: "Croquettes - FiDog Petty",
    image: "/FI_PETTY_B.jpg",
    category: "Nutrition Chiots",
    isNew: true,
    href: "chiens",
    price: 59,
    poids: "20 Kg",
    description:
      "Fidog Petty est un aliment complet et équilibré pour les chiots de toutes races. Cet aliment a été spécialement conçu pour répondre aux besoins nutritionnels des chiots de toutes tailles pendant leur période de croissance. La parfaite transformation des amidons et l'équilibre des fibres garantissent la digestion, l'absorption des nutriments et la santé intestinale. La teneur élevée en protéines (27 %) permet un développement approprié et équilibré de la masse musculaire. De plus, la présence de calcium et de phosphore et l'ajout de vitamine D3 garantissent des dents et des os solides.",
    analyse: [
      { key: "Protéines brutes", value: "27,00 %" },
      { key: "Matières grasses brutes", value: "16,00%" },
      { key: "Fibres brutes", value: "3,00%" },
      { key: "Cendres brutes", value: "9,00%" },
      { key: "Humidité", value: "10,00%" },
      { key: "Calcium", value: "1,50%" },
      { key: "Phosphore", value: "1,00%" },
    ],
    composition:
      "Viande déshydratée (poulet 18%), Maïs, Dérivés d'origine végétale (pulpe de betterave séchée 1%), Graisse animales, Minéraux",
  },
  {
    id: 17,
    name: "Croquettes - FiDog Vitality Chicken",
    image: "/FI_VITALITY_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    price: 55,
    poids: "20 Kg",
    description:
      "Fidog Vitality est un aliment complet et équilibré pour les chiens actifs de toutes races. La teneur en énergie de cet aliment est plus élevée que celle d'un aliment d'entretien, grâce à une teneur plus élevée en matières grasses et en protéines. La parfaite transformation des amidons et la teneur équilibrée en fibres garantissent la digestion, l'absorption des nutriments et la santé intestinale.",
    analyse: [
      { key: "Protéines brutes", value: "25,00 %" },
      { key: "Matières grasses brutes", value: "16,00%" },
      { key: "Fibres brutes", value: "3,00%" },
      { key: "Cendres brutes", value: "9,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Viande déshydratée (poulet 18%, boeuf), Maïs, Dérivés d'origine végétale (pulpe de betterave séchée 1%), Graisse animales, Minéraux",
  },
  {
    id: 18,
    name: "Croquettes - FiDog Vital Power",
    image: "/FI_VITALPOWER_B.jpg",
    category: "Nutrition Chien",
    isNew: true,
    href: "chiens",
    price: 59,
    poids: "20 Kg",
    description:
      "Fidog Vital power est un aliment complet et équilibré pour les chiens de sport et de chasse de toutes races. Cet aliment constitue une alimentation complète et équilibrée pour les chiens physiquement actifs (chiens de chasse, etc.). Il est riche en protéines et en calories pour satisfaire les besoins énergétiques. De plus, grâce à sa teneur élevée en poulet et à l'ajout de caroube, il assure une digestion et une absorption des nutriments parfaites",
    analyse: [
      { key: "Protéines brutes", value: "30,00 %" },
      { key: "Matières grasses brutes", value: "20,00%" },
      { key: "Fibres brutes", value: "3,00%" },
      { key: "Cendres brutes", value: "7,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Viande déshydratée (poulet 35%), Maïs, Blé dur complet, Graisse animales, Farine de gousses de caroube micronisée (2%), Minéraux, Vitamines",
  },
  {
    id: 19,
    name: "Croquettes - MyCat Fish",
    image: "/VMYCAT_AFISH_B.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    formats: [
      { poids: "4 Kg", price: 18.0 },
      { poids: "20 Kg", price: 65.0 },
    ],
    description:
      "Mycat Fish est un aliment complet et équilibré pour les chats adultes de toutes races. Nous avons développé cet aliment spécifiquement pour satisfaire les besoins nutritionnels des chats adultes (plus d'un an) qui pratiquent une activité physique régulière. La teneur optimale en protéines de poisson permet le maintien d'un poids corporel idéal et favorise la santé de la peau et du pelage.",
    analyse: [
      { key: "Protéines brutes", value: "32,00 %" },
      { key: "Matières grasses brutes", value: "11,00%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "7,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Viande déshydratée (poulet 30%), Céréales, Dérivés d'origine végétale, Poisson déshydraté (4%), Huile de poisson (3%), Minéraux",
  },
  {
    id: 20,
    name: "Croquettes - MyCat Adult Chicken",
    image: "/VMYCAT_ACHICKEN_B.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    formats: [
      { poids: "4 Kg", price: 18.0 },
      { poids: "20 Kg", price: 65.0 },
    ],
    description:
      "Mycat Adult est un aliment complet et équilibré pour les chats adultes de toutes races. Nous avons développé cet aliment spécifiquement pour satisfaire les besoins nutritionnels des chats adultes (plus de 1 an) qui pratiquent une activité physique régulière. La teneur optimale en protéines et en matières grasses permet de maintenir un poids corporel idéal, d'éviter les augmentations indésirables et de conserver le tonus musculaire.",
    analyse: [
      { key: "Protéines brutes", value: "32,00 %" },
      { key: "Matières grasses brutes", value: "11,00%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "7,00%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Viande déshydratée (poulet 30%), Céréales, Dérivés d'origine végétale, Graisse de poulet, Poisson déshydraté, Minéraux",
  },
  {
    id: 21,
    name: "Croquettes - Unica Classe Adult Chicken",
    image: "/UC_ADULT_B.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    price: 55,
    poids: "10 Kg",
    description:
      "Pour chats de grandes tailes entre 1 et 12 ans qui passent beaucoup de temps à se toiletter. Ajout d'Omega 3 et de Glucosamine pour les articulations. Et enrichi en fibre de pois pour aider à l'expulsion des boules de poils et en Taurine pour le coeur.",
    analyse: [
      { key: "Protéines brutes", value: "31,00 %" },
      { key: "Matières grasses brutes", value: "20,00%" },
      { key: "Fibres brutes", value: "3,00%" },
      { key: "Cendres brutes", value: "7,40%" },
      { key: "Humidité", value: "10,00%" },
      { key: "Omega 3", value: "0,20%" },
      { key: "Magnésium", value: "0,08%" },
    ],
    composition:
      "Protéines animales déshydratées (poulet 21%), Graisse de poulet, Maïs, Gluten de maïs, Riz complet (10%), Farine de maïs Fioretto, Farine de blé, Protéines animales hydrolyées, Levures, Fibres de pois (2,5%), Algues séchées (Schizochytrium sp.), Glucosamine (0,03%), Yucca schidigera",
  },
  {
    id: 22,
    name: "Croquettes - Unica Classe Adult Sterilized",
    image: "/UC_ADULTSTERILIZED_B.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    price: 55,
    poids: "10 Kg",
    description:
      "Pour chats entre 1 et 12 ans qui passent beaucoup de temps à se toiletter. Ajout d'Omega 3 et de Glucosamine pour les articulations. Et enrichi en fibre de pois pour aider à l'expulsion des boules de poils. Parfait pour les chats stérilisés car permet une meilleure surveillance de leur poids.",
    analyse: [
      { key: "Protéines brutes", value: "37,30 %" },
      { key: "Matières grasses brutes", value: "11,00%" },
      { key: "Fibres brutes", value: "3,15%" },
      { key: "Cendres brutes", value: "7,90%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Protéines animales déshydratées (dont agneau 14%), Maïs, Gluten de maïs, Farine de maïs Fioretto, Farine de blé, Riz complet (5%), Graisse de poulet, Levures, Fibres de pois (2,5%), Protéines animales hydrolyées, Yucca de Mojave",
  },
  {
    id: 23,
    name: "Croquettes - Chat&Chat Adult",
    image: "/CC_ADULT_B.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    price: 42,
    poids: "14 Kg",
    description:
      "Chat & Chat expert est la gamme d'aliments secs complets pour chats, issue d'une longue expérience acquise dans le domaine de la nutrition féline. Seuls des ingrédients hautement sélectionnés sont savamment cuisinés pour obtenir l'exaltation naturelle des saveurs et la haute assimilation des éléments nutritifs. Grâce au concept naturel, chaque produit favorise le bien-être intestinal grâce aux fibres alimentaires apportées par la pulpe de betterave. Enfin, la bonne intégration avec la taurine apporte au chat cet acide aminé si essentiel au bon fonctionnement de son cœur et de ses yeux.",
    analyse: [
      { key: "Protéines brutes", value: "31,00 %" },
      { key: "Matières grasses brutes", value: "12,00%" },
      { key: "Fibres brutes", value: "3,00%" },
      { key: "Cendres brutes", value: "9,50%" },
      { key: "Humidité", value: "10,00%" },
    ],
    composition:
      "Céréales (céréales complètes 24%), Viandes et sous-produits animaux, Sous-produits d'origine végétale (pulpe de betterave rouge 1%), Huiles et graisses, Poissons et dérivés de poissons (thon 1%), Légumes (pois secs 0,2%) Farine de maïs Fioretto, Farine de blé, Riz complet (5%), Graisse de poulet, Levures, Fibres de pois (2,5%), Protéines animales hydrolyées, Yucca de Mojave",
  },
  {
    id: 24,
    name: "Croquettes - VincentDiet Adult Bluefish",
    image: "/VDIET_ABLUEFISH_B.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    price: 12,
    poids: "1,5 Kg",
    description:
      "Adult All Breeds with bluefish est un aliment complet et équilibré pour les chats adultes de toutes races. Conçue avec l'utilisation d'ingrédients naturels communs à la diète méditerranéenne (huile d'olive, blé dur, tomate, légumineuses), cette formule garantit le bien-être et la santé de vos amis à 4 pattes. La présence de protéines animales de haute qualité (poisson bleu et poulet) et végétales (légumineuses) de haute qualité, ainsi que l'apport équilibré de fibres (blé), favorisent la haute digestibilité, l'absorption des nutriments et la santé intestinale. L'utilisation d'huile d'olive régule le bon rapport entre les acides gras oméga 3 et oméga 6 pour une peau et des poils sains et la tomate assure l'absorption d'antioxydants pour renforcer le système immunitaire.",
    analyse: [
      { key: "Protéines brutes", value: "33,00 %" },
      { key: "Matières grasses brutes", value: "14,00%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "6,50%" },
      { key: "Humidité", value: "10,00%" },
      { key: "Omega 3", value: "0,60%" },
      { key: "Omega 6", value: "1,80%" },
    ],
    composition:
      "Viande déshydratée (26 %), Maïs, Poisson bleu déshydraté (10%), Blé dur (entier 8%), Huile de poisson, Riz, Son de blé, Gluten de maïs, Pulpe de betterave déshydratée, Légumineuses (vivica faba mineur 2%), Huile d'olive (1%), Gousse de caroube déshydratée micronisée, Minéraux, Tomate déshydratée (0,2%), Extrait de châtaigne",
  },
  {
    id: 25,
    name: "Croquettes - VincentDiet Adult Chicken",
    image: "/VDIET_ACHICKEN_B.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    price: 12,
    poids: "1,5 Kg",
    description:
      "Adult All Breeds with chicken est un aliment complet et équilibré pour les chats adultes de toutes races. Conçue avec l'utilisation d'ingrédients naturels communs à la diète méditerranéenne (huile d'olive, blé dur, tomate, légumineuses), cette formule garantit le bien-être et la santé de vos amis à 4 pattes. La présence de protéines animales (poulet) et végétales (légumineuses) de haute qualité, ainsi que l'apport équilibré de fibres (blé), favorisent la haute digestibilité, l'absorption des nutriments et la santé intestinale. L'utilisation d'huile d'olive régule le bon rapport entre les acides gras oméga 3 et oméga 6 pour une peau et des poils sains et la tomate assure l'absorption d'antioxydants pour renforcer le système immunitaire.",
    analyse: [
      { key: "Protéines brutes", value: "33,00 %" },
      { key: "Matières grasses brutes", value: "14,00%" },
      { key: "Fibres brutes", value: "2,00%" },
      { key: "Cendres brutes", value: "6,50%" },
      { key: "Humidité", value: "10,00%" },
      { key: "Omega 3", value: "0,40%" },
      { key: "Omega 6", value: "1,40%" },
    ],
    composition:
      "Viande déshydratée (poulet 37%), Maïs, Blé dur (entier 8%), Graisse de poulet, Son de blé, Riz, Gluten de maïs, Poisson déshydraté, Pulpe de betterave, Légumineuses (vivica faba mineur 2%), Huile d'olive (1%), Minéraux, Gousse de caroube déshydratée micronisée, Tomate déshydratée (0,2%), Extrait de châtaigne",
  },
  {
    id: 26,
    name: "Croquettes - VincentDiet Adult Sterilized",
    image: "/VDIET_SCHICKEN_B.jpg",
    category: "Nutrition Chat",
    isNew: true,
    href: "chats",
    price: 12,
    poids: "1,5 Kg",
    description:
      "Sterilized All Breeds with chichen est un aliment complet et équilibré pour les chats stérilisés de toutes races. Conçu avec l'utilisation d'ingrédients naturels communs à la diète méditerranéenne (huile d'olive, blé dur, tomates, légumineuses), il garantit la juste quantité de fibres et de protéines nécessaires au maintien du poids et du bien-être de votre chat stérilisé. La présence de protéines animales (poulet) et végétales (légumineuses) de haute qualité, ainsi que l'apport équilibré de fibres (blé), favorisent la haute digestibilité, l'absorption des nutriments et la santé intestinale. L'utilisation d'huile d'olive régule le bon rapport entre les acides gras oméga 3 et oméga 6 pour une peau et des poils sains et la tomate assure l'absorption d'antioxydants pour renforcer le système immunitaire.",
    analyse: [
      { key: "Protéines brutes", value: "32,00 %" },
      { key: "Matières grasses brutes", value: "12,00%" },
      { key: "Fibres brutes", value: "4,60%" },
      { key: "Cendres brutes", value: "6,50%" },
      { key: "Humidité", value: "10,00%" },
      { key: "Omega 3", value: "0,40%" },
      { key: "Omega 6", value: "1,40%" },
    ],
    composition:
      "Viande déshydratée (poulet 33%), Maïs, Blé dur (entier 8%), Riz, Son de blé, Gluten de maïs, Pulpe de betterave déshydratée, Légumineuses (vivica faba mineur 2%), Huile d'olive (1%), Gousse de caroube déshydratée micronisée, Minéraux, Tomate déshydratée (0,2%), Extrait de châtaigne",
  },
];

export const categories = [
  { name: "Nutrition Chien", icon: "🐶", href: "chiens" },
  { name: "Nutrition Chat", icon: "🐱", href: "chats" },
  { name: "Hygiène Chien", icon: "🛁", href: "chiens" },
  { name: "Hygiène Chat", icon: "🧽", href: "chats" },
  { name: "Compléments", icon: "💖", href: "chiens" },
];

export const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Chiens", href: "/produits/chiens" },
  { name: "Chats", href: "/produits/chats" },
  { name: "Promotions", href: "/produits/promotions" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];
