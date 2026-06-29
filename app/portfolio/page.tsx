import type { Metadata } from "next";
import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Entdecken Sie das Portfolio von ArcoBau AG – hochwertige Wohn- und Gewerbebauprojekte in der ganzen Schweiz. Wärmedämmung, Innenausbau, Keramik und Strukturarbeiten.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function Page() {
  return <PortfolioPage />;
}
