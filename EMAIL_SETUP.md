# Configuration du système d'email - RunKroket

## 🚀 Configuration rapide

### 1. Créer un compte Resend

1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour)
3. Récupérez votre clé API

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` avec :

```env
# Configuration Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Configuration Email
FROM_EMAIL=noreply@votre-domaine.com
CONTACT_EMAIL=contact@votre-domaine.com

# Configuration reCAPTCHA (optionnel pour les tests)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
```

### 3. Tester la configuration

Visitez `/api/contact` pour vérifier que tout fonctionne.

## 📧 Services d'email supportés

### Resend (Recommandé)

- ✅ **Gratuit** : 100 emails/jour
- ✅ **Facile** à configurer
- ✅ **Excellente** délivrabilité

### Nodemailer + Gmail

```env
EMAIL_SERVICE=nodemailer
GMAIL_USER=votre-email@gmail.com
GMAIL_APP_PASSWORD=votre-mot-de-passe-app
```

### SendGrid

```env
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=votre-cle-api
```

## 🔧 Fonctionnalités

### Sécurité

- ✅ **Validation Zod** côté client et serveur
- ✅ **Rate limiting** côté client et serveur
- ✅ **reCAPTCHA** anti-bot
- ✅ **Validation** des données du panier

### Email Template

- ✅ **Design responsive** et professionnel
- ✅ **Récapitulatif complet** du panier
- ✅ **Informations client** structurées
- ✅ **Actions à effectuer** clairement listées

### Monitoring

- ✅ **Logs détaillés** des envois
- ✅ **Gestion d'erreurs** robuste
- ✅ **Fallback** automatique

## 🧪 Test de la configuration

### Test de connexion

```bash
curl http://localhost:3000/api/contact
```

### Test d'envoi d'email

1. Remplissez le formulaire de contact
2. Soumettez avec des produits dans le panier
3. Vérifiez votre boîte email

## 🔄 Changer de service d'email

Le système est modulaire ! Pour changer de service :

1. **Installez** le package du nouveau service
2. **Créez** l'adaptateur dans `src/lib/email/adapters/`
3. **Modifiez** `emailService.ts` pour inclure le nouveau service
4. **Changez** la variable d'environnement `EMAIL_SERVICE`

## 📊 Monitoring et logs

Les emails sont loggés avec :

- ✅ **ID de l'email** (Resend)
- ✅ **Statut d'envoi**
- ✅ **Erreurs détaillées**
- ✅ **Rate limiting** côté serveur

## 🛡️ Sécurité

### Protection contre le spam

- **Rate limiting** : 3 tentatives/15min côté client, 5/15min côté serveur
- **reCAPTCHA** : Validation Google
- **Validation** : Schémas Zod stricts

### Validation des données

- **Côté client** : UX fluide
- **Côté serveur** : Sécurité maximale
- **Cohérence** : Vérification du total du panier

## 🚨 Dépannage

### Email non reçu

1. Vérifiez la clé API Resend
2. Vérifiez l'adresse email de destination
3. Consultez les logs du serveur
4. Vérifiez les spams

### Erreur de validation

1. Vérifiez le format du téléphone
2. Assurez-vous que l'adresse fait au moins 10 caractères
3. Vérifiez que le reCAPTCHA est validé

### Rate limiting

1. Attendez 15 minutes
2. Vérifiez les tentatives restantes
3. Contactez l'administrateur si nécessaire
