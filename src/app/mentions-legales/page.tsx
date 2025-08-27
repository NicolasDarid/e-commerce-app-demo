import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📜 Mentions Légales
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conformément à la législation en vigueur, vous trouverez ci-dessous
            les informations légales concernant ce site.
          </p>
        </div>

        {/* Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🏢 1. Éditeur du site
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site est édité par <strong>DARID Nicolas</strong>
            <br />
            Responsable de la publication : DARID Nicolas / Web Developer
            <br />
            Contact :{" "}
            <Link
              href="mailto:nicolasdarid@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nicolasdarid@gmail.com
            </Link>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🌐 2. Hébergement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ce site est hébergé par Vercel.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📷 3. Crédits & Propriété intellectuelle
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le contenu de ce site (textes, design, structure) est la propriété
            exclusive de <strong>Darid Nicolas</strong>, sauf mention contraire.
            Toute reproduction, même partielle, est interdite sans autorisation
            préalable.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🔒 4. Données personnelles
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Aucune donnée personnelle n&apos;est collectée sans votre
            consentement. Pour plus de détails concernant la gestion de vos
            données, veuillez consulter notre{" "}
            <Link
              href="/politique-confidentialite"
              className="text-blue-600 hover:underline"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
