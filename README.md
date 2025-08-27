# PetStore Demo - E-commerce pour Chiens et Chats

## 🎯 Description

Ce projet est une démonstration d'e-commerce moderne développée avec **Next.js 15.4.6**, **React 19.1**, **TypeScript** et **Tailwind CSS**. Il s'agit d'une boutique en ligne fictive spécialisée dans les produits pour chiens et chats, conçue pour présenter mes compétences de développement web.

## ✨ Fonctionnalités

### 🛍️ E-commerce

- **Catalogue de produits** avec 20 produits fictifs répartis en 8 catégories
- **Navigation par catégories** : Nutrition, Hygiène, Compléments, Jouets, Accessoires
- **Système de panier** avec gestion des quantités et formats
- **Recherche de produits** avec filtrage intelligent
- **Pages de détail produit** avec analyses nutritionnelles et compositions

### 🎨 Interface Utilisateur

- **Design responsive** optimisé pour mobile, tablette et desktop
- **Thème moderne** avec Tailwind CSS et composants shadcn/ui
- **Animations fluides** et transitions élégantes
- **Mode sombre/clair** (prêt pour implémentation)
- **Images SVG générées** pour tous les produits

### 📧 Système de Contact

- **Formulaire de commande** intégré
- **Envoi d'emails** via Resend API
- **Templates HTML** professionnels
- **Validation des données** côté client et serveur

### 🔧 Fonctionnalités Techniques

- **SSR/SSG** avec Next.js 14
- **TypeScript** pour la sécurité des types
- **Gestion d'état** avec Zustand
- **Rate limiting** pour la protection API
- **SEO optimisé** avec métadonnées dynamiques

## 🚀 Technologies Utilisées

### Frontend

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI modernes
- **Lucide React** - Icônes
- **Zustand** - Gestion d'état

### Backend

- **Next.js API Routes** - API REST
- **Resend** - Service d'envoi d'emails
- **Rate Limiting** - Protection contre le spam

### Outils

- **ESLint** - Linting du code
- **Prettier** - Formatage automatique
- **PostCSS** - Traitement CSS

## 📦 Installation

1. **Cloner le repository**

```bash
git clone <repository-url>
cd e-commerce-app-demo
```

2. **Installer les dépendances**

```bash
npm install
# ou
pnpm install
```

3. **Configuration des variables d'environnement**

```bash
cp .env.example .env.local
```

Remplir le fichier `.env.local` :

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=contact@yourdomain.com
```

4. **Lancer le serveur de développement**

```bash
npm run dev
# ou
pnpm dev
```

L'application sera accessible sur `http://localhost:3000`

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js 14 (App Router)
│   ├── api/               # Routes API
│   ├── produits/          # Pages produits
│   ├── contact/           # Pages contact
│   └── ...
├── components/            # Composants React
│   ├── ui/               # Composants shadcn/ui
│   ├── header.tsx        # En-tête du site
│   ├── footer.tsx        # Pied de page
│   └── ...
├── lib/                  # Utilitaires et services
│   ├── data.ts          # Données des produits
│   ├── store.ts         # Store Zustand
│   ├── email/           # Service d'emails
│   └── ...
└── ...
```

## 🎨 Personnalisation

### Ajouter un nouveau produit

1. **Modifier `src/lib/data.ts`**

```typescript
{
  id: 21,
  name: "Nouveau Produit",
  image: "/product-new.svg",
  category: "Nouvelle Catégorie",
  // ... autres propriétés
}
```

2. **Créer l'image SVG correspondante**

```bash
# Créer public/product-new.svg
```

### Modifier le design

- **Couleurs** : Modifier `tailwind.config.js`
- **Composants** : Éditer les composants dans `src/components/`
- **Styles globaux** : Modifier `src/app/globals.css`

## 📧 Configuration Email

Le projet utilise **Resend** pour l'envoi d'emails. Voir `EMAIL_SETUP.md` pour la configuration détaillée.

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connecter le repository à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Autres plateformes

- **Netlify** : Compatible avec Next.js
- **Railway** : Déploiement simple
- **Docker** : Support conteneurisé

## 📝 Notes de Développement

### Portfolio Demo

Ce projet a été adapté pour un portfolio en :

- Remplaçant les références à l'entreprise originale
- Créant des produits fictifs pour chiens et chats
- Ajoutant de nouvelles catégories de produits
- Générant des images SVG de placeholder
- Conservant toutes les fonctionnalités techniques

### Fonctionnalités Démonstratives

- **E-commerce complet** avec panier et commande
- **Interface moderne** et responsive
- **API REST** avec validation
- **Système d'emails** professionnel
- **Performance optimisée** avec Next.js 14

## 🤝 Contribution

Ce projet est une démonstration pour portfolio. Pour des suggestions ou questions :

- Ouvrir une issue
- Proposer des améliorations
- Signaler des bugs

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ pour démontrer mes compétences en développement web moderne**
