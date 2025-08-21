"use client";

import { PawPrint } from "lucide-react";
import { motion } from "motion/react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* PawPrint qui pulse */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="mb-6"
      >
        <PawPrint className="h-16 w-16 text-blue-600" />
      </motion.div>

      {/* Texte */}
      <p className="text-gray-600 mb-6">Chargement en cours...</p>

      {/* Barre de progression */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
