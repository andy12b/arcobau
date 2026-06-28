import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie ArcoBau AG – Bahnhofstrasse 1, 8001 Zürich, Schweiz. E-Mail: contact@arcobau.ch. Starten Sie noch heute Ihr Projekt.",
};

export default function Page() {
  return <ContactPage />;
}
