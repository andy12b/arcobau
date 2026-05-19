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
  title: "ArcoBau AG – Swiss Construction & Interior Finishing",
  description:
    "ArcoBau AG Zürich. Swiss precision construction, interior finishing, flooring and tiling for private clients across Switzerland. Quality you can see.",
  keywords: ["ArcoBau", "construction", "Zurich", "Switzerland", "residential", "flooring", "finishing", "renovation"],
  authors: [{ name: "ArcoBau AG" }],
  openGraph: {
    title: "ArcoBau AG – Swiss Construction & Interior Finishing",
    description:
      "Swiss precision construction, interior finishing and flooring for private clients across Switzerland.",
    type: "website",
    locale: "de_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
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
