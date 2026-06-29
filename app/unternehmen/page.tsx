import type { Metadata } from "next";
import CompanyPage from "./CompanyPage";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "Über ArcoBau AG – ein Schweizer Bauunternehmen spezialisiert auf Wohnbau, Innenausbau und Bodenbeläge. 15+ Jahre Erfahrung für Privatkunden in der ganzen Schweiz.",
  alternates: {
    canonical: "/unternehmen/",
  },
};

export default function Page() {
  return <CompanyPage />;
}
