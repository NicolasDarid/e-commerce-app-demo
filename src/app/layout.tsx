import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HydrationProvider from "@/components/hydration-provider";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RunKroket - Boutique en ligne pour chiens et chats",
  description:
    "Tout pour le bonheur et le bien-être de vos compagnons à 4 pattes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NuqsAdapter>
          <HydrationProvider>
            <div className="flex flex-col min-h-screen w-full">
              <Header />
              <main>{children}</main>
              <Toaster />
              <Footer />
            </div>
          </HydrationProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
