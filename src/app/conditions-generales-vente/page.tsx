"use client";

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📋 Conditions Générales de Vente
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dernière mise à jour : Aout 2025
          </p>
        </div>

        {/* Contenu CGV */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {/* Préambule */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Préambule
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les présentes Conditions Générales de Vente (CGV)
                s&apos;appliquent à toutes les prestations de vente conclues par
                RunKroket auprès de ses clients professionnels et particuliers,
                quelles que soient les clauses pouvant figurer sur les documents
                du client.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Éditeur :</strong> RunKroket
                <br />
                <strong>Adresse :</strong> 18bis chemin Neuf, 97421 Saint-Louis,
                Réunion
                <br />
                <strong>Téléphone :</strong> +262 6 92 33 42 43
                <br />
                <strong>Email :</strong> runkroket@runkroket.re
              </p>
            </section>

            {/* Produits et Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Produits et Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                RunKroket commercialise des produits pour animaux de compagnie,
                notamment :
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                <li>
                  Alimentation pour chiens et chats (croquettes, pâtées,
                  friandises)
                </li>
                <li>Produits d&apos;hygiène et de soins</li>
                <li>Équipements divers pour le bien-être animal</li>
              </ul>
            </section>

            {/* Commandes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Commandes
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    3.1 Processus de commande
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les commandes peuvent être passées par téléphone, email ou
                    via notre site web. Chaque commande fait l&apos;objet
                    d&apos;une confirmation par nos soins.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    3.2 Validation de commande
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Toute commande est soumise à acceptation de notre part. Nous
                    nous réservons le droit de refuser une commande en cas de
                    stock insuffisant ou pour tout autre motif légitime.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    3.3 Modification et annulation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les modifications ou annulations de commande doivent être
                    effectuées dans les 2 heures suivant la validation de la
                    commande. Passé ce délai, la commande sera traitée
                    normalement.
                  </p>
                </div>
              </div>
            </section>

            {/* Prix et Paiement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Prix et Paiement
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    4.1 Prix
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les prix sont exprimés en euros (€) et s&apos;entendent
                    toutes taxes comprises (TVA applicable). Les prix peuvent
                    être modifiés à tout moment sans préavis.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    4.2 Moyens de paiement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous acceptons les moyens de paiement suivants :
                  </p>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1 ml-4 mt-2">
                    <li>
                      Cartes bancaires (Visa, Mastercard) lors de la livraison
                    </li>
                    <li>Espèces lors de la livraison</li>
                    <li>Virement bancaire (paiement anticipé)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    4.3 Conditions de paiement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Le paiement s&apos;effectue au moment de la commande ou lors
                    de la livraison selon le moyen choisi. Aucun crédit
                    n&apos;est accordé.
                  </p>
                </div>
              </div>
            </section>

            {/* Livraison */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Livraison
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    5.1 Zones de livraison
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous livrons sur l&apos;ensemble de l&apos;île de la Réunion
                    facilement accessible par la route avec un véhicule de type
                    fourgonnette. Certaines zones peuvent cependant ne pas être
                    elligibles à la livraison, pour cela vous pouvez nous
                    contacter pour plus d&apos;informations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    5.2 Délais de livraison
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les délais de livraison sont de 2 à 5 jours ouvrés selon
                    votre localisation. Ces délais sont donnés à titre
                    indicatif.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    5.3 Frais de livraison
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    La livraison est gratuite sans frais supplémentaires.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    5.4 Réception
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    La réception des produits implique l&apos;acceptation des
                    conditions de livraison. En cas d&apos;absence, nous vous
                    contacterons pour reprogrammer la livraison ou pour laisser
                    le produit à l&apos;entrée de votre maison ou avec une
                    personne de votre choix.
                  </p>
                </div>
              </div>
            </section>

            {/* Retours et Garanties */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Retours et Garanties
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    6.1 Droit de rétractation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vous disposez de 14 jours pour retourner un produit non
                    utilisé et dans son emballage d&apos;origine. Les frais de
                    retour sont à votre charge.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    6.2 Garantie
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tous nos produits bénéficient de la garantie légale de
                    conformité. En cas de problème, contactez-nous
                    immédiatement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    6.3 Produits alimentaires
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pour les produits alimentaires non ouverts, nous acceptons
                    les retours dans les 7 jours suivant la réception. Vous
                    pouvez nous contacter pour un retour du moment où le produit
                    n&apos;est pas encore ouvert.
                  </p>
                </div>
              </div>
            </section>

            {/* Responsabilité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Responsabilité
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notre responsabilité est limitée au montant de la commande. Nous
                ne pourrons être tenus responsables des dommages indirects ou
                immatériels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Il appartient au client de vérifier la compatibilité des
                produits avec son animal et de suivre les recommandations
                d&apos;utilisation.
              </p>
            </section>

            {/* Protection des données */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Protection des données
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément au RGPD, vos données personnelles sont collectées
                et traitées uniquement dans le cadre de l&apos;exécution de
                votre commande pour pouvoir vous contacter. Aucune donnée
                personnelle n&apos;est collectée lors de l&apos;utilisation de
                notre site.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vous disposez d&apos;un droit d&apos;accès, de rectification et
                de suppression de vos données. Pour plus d&apos;informations,
                consultez notre politique de confidentialité. Pour toutes
                demandes de suppression de données, veuillez nous contacter.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Droit applicable
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes CGV sont soumises au droit français. En cas de
                litige, les tribunaux français sont seuls compétents.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Contact
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pour toute question concernant ces conditions générales de vente
                :
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>RunKroket</strong>
                  <br />
                  📞 +262 6 92 33 42 43
                  <br />
                  📧 runkroket@runkroket.re
                  <br />
                  🕒 Lundi - Vendredi : 9h - 18h
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Section Contact */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              💬 Des questions sur nos CGV ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous éclairer sur nos conditions de
              vente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+262692334243"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                📞 Nous appeler
              </a>
              <a
                href="/contact"
                className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                📧 Nous écrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
