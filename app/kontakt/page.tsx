import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie ArcoBau AG – Chamerstrasse 172, 6300 Zug, Schweiz. E-Mail: contact@arcobau.ch. Starten Sie noch heute Ihr Projekt.",
  alternates: {
    canonical: "/kontakt/",
  },
};

export default function Page() {
  return <ContactPage />;
}
