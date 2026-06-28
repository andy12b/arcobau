import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ArcoBau AG – Bau & Innenausbau Zürich Schweiz",
    template: "%s – ArcoBau AG",
  },
  description:
    "ArcoBau AG Zürich. Präziser Innenausbau, Wärmedämmung, Fliesenlegen und Rohbau für Privatkunden in der ganzen Schweiz. Schweizer Qualität – keine Kompromisse.",
  keywords: [
    "ArcoBau",
    "Bauunternehmen Zug",
    "Innenausbau Schweiz",
    "Wärmedämmung",
    "Fliesenleger Zug",
    "Renovierung Schweiz",
    "Fassade Zug",
    "Rohbau Schweiz",
    "Bauunternehmen Schweiz",
  ],
  authors: [{ name: "ArcoBau AG" }],
  metadataBase: new URL("https://arcobau.ch"),
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
    },
  },
  openGraph: {
    title: "ArcoBau AG – Bau & Innenausbau Zürich",
    description:
      "Präziser Innenausbau, Wärmedämmung und Rohbau für Privatkunden in der ganzen Schweiz. Schweizer Qualität – keine Kompromisse.",
    type: "website",
    locale: "de_CH",
    siteName: "ArcoBau AG",
    url: "https://arcobau.ch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${hankenGrotesk.variable} notranslate`} translate="no">
      <body className="bg-surface text-on-surface antialiased font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
