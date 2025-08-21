export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🔒 Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous attachons une grande importance à la protection de vos données
            personnelles et à la transparence de leur utilisation.
          </p>
        </div>

        {/* Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📌 1. Collecte des données
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Notre site ne collecte pas d’informations personnelles sans votre
            consentement explicite. Les seules données conservées proviennent de
            votre navigation et sont limitées à ce qui est nécessaire au bon
            fonctionnement de l’application.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            💾 2. Utilisation du stockage local (localStorage)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Afin d’améliorer votre expérience utilisateur, notre application
            utilise le <strong>stockage local</strong> de votre navigateur
            (localStorage). Les informations enregistrées concernent uniquement
            :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              🛒 Votre panier (pour conserver vos articles jusqu’à votre
              prochaine visite)
            </li>
            <li>❤️ Vos produits favoris</li>
            <li>👀 Les produits récemment consultés</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Ces données sont stockées exclusivement sur votre appareil, ne sont
            pas transmises à des tiers et ne servent pas à des fins
            publicitaires ou de suivi. Vous pouvez les effacer à tout moment en
            vidant les données de navigation de votre navigateur.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🔐 3. Sécurité
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nous mettons tout en œuvre pour protéger vos données et limiter au
            maximum les informations stockées. Aucune donnée sensible n’est
            conservée dans le stockage local.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📩 4. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question concernant cette politique de confidentialité ou
            la gestion de vos données, vous pouvez nous contacter à l’adresse :{" "}
            <a
              href="mailto:contactsupport@runkroket.re"
              className="text-blue-600 hover:underline"
            >
              contactsupport@runkroket.re
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
