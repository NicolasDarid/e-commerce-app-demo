import { Mail, Phone, Clock, Github } from "lucide-react";
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
            <p className="text-gray-600 text-sm">contact@petstore-demo.com</p>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 text-center border border-gray-100">
            <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
            <p className="text-gray-600 text-sm">+33 6 12 34 56 78</p>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 text-center border border-gray-100">
            <Github className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
            <Link href={"https://github.com/Nicod-hub"}>
              <p className="text-gray-600 text-sm hover:underline hover:text-indigo-500 hover:decoration-indigo-500">
                Nicod-hub
              </p>
            </Link>
          </div>

          <div className="bg-white shadow-sm rounded-2xl p-6 text-center border border-gray-100">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
            <p className="text-gray-600 text-sm">Lun - Ven : 9h - 18h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
