import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact – ArcoBau AG Zurich",
  description:
    "Contact ArcoBau – Bahnhofstrasse 1, 8001 Zürich, Switzerland. Email: contact@arcobau.ch. Start your project today.",
};

export default function Page() {
  return <ContactPage />;
}
