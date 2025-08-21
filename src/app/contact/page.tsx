import { Mail, Phone, Clock, Facebook } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📩 Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question sur nos produits, une suggestion ou besoin d’aide ?
            Nous sommes disponibles pour vous répondre.
          </p>
        </div>

        {/* Cards infos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white shadow-sm rounded-2xl p-6 text-center border border-gray-100">
            <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600 text-sm">runkroket@runkroket.re</p>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 text-center border border-gray-100">
            <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
            <p className="text-gray-600 text-sm">+262 6 92 33 42 43</p>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 text-center border border-gray-100">
            <Facebook className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Facebook</h3>
            <Link href={"https://www.facebook.com/DARIDjPATRICK"}>
              <p className="text-gray-600 text-sm hover:underline hover:text-indigo-500 hover:decoration-indigo-500">
                Run kroket
              </p>
            </Link>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 text-center border border-gray-100">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
            <p className="text-gray-600 text-sm">Lun - Ven : 9h - 18h</p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✍️ Envoyez-nous un message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="votremail@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
