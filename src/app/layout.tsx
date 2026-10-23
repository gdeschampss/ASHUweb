import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { RevealController } from "@/components/motion/RevealController";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASHU | Associação dos Servidores do Hospital Universitário HU/UFSC",
  description:
    "Há mais de 45 anos promovendo qualidade de vida, integração e benefícios para servidores do HU/UFSC, EBSERH, familiares e comunidade. Academia, Restaurante, Creche CEI-ASHU, Planos de Saúde e Assessoria Jurídica.",
  keywords: [
    "ASHU",
    "HU UFSC",
    "EBSERH",
    "Servidores HU",
    "Associação HU UFSC",
    "CEI ASHU",
    "Restaurante Antenas",
    "Academia ASHU",
    "Florianópolis",
  ],
  authors: [{ name: "ASHU HU/UFSC" }],
  openGraph: {
    title: "ASHU — Associação dos Servidores do HU/UFSC",
    description:
      "Tradição, saúde e integração há 45+ anos para a comunidade do Hospital Universitário.",
    siteName: "ASHU",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5EFE6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca o documento antes da primeira pintura para o CSS esconder os elementos que serão revelados */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="antialiased selection:bg-ashu-green selection:text-white">
        <MotionProvider>
          <SmoothScroll />
          <RevealController />
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
