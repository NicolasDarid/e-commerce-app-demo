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
      { key: "Cendres brutes", value: "7,00°%" },
      { key: "Humidité", value: "10,00°%" },
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
      { key: "Cendres brutes", value: "8,00°%" },
      { key: "Humidité", value: "16,00°%" },
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
      { key: "Cendres brutes", value: "9,30°%" },
      { key: "Humidité", value: "10,00°%" },
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
      { key: "Cendres brutes", value: "7,80°%" },
      { key: "Humidité", value: "10,00°%" },
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
      { key: "Cendres brutes", value: "8,00°%" },
      { key: "Humidité", value: "18,00°%" },
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
      { key: "Cendres brutes", value: "8,10°%" },
      { key: "Humidité", value: "18,00°%" },
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
      { key: "Cendres brutes", value: "8,20°%" },
      { key: "Humidité", value: "18,00°%" },
    ],
    composition:
      "40% porc frais, 30% Saumon frais, Riz, Pulpe de betterave, Levure de bière, Curcuma",
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
