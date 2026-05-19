import type { Metadata } from "next";
import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio – ArcoBau AG Zurich",
  description:
    "Explore ArcoBau's portfolio of premium residential and commercial architectural projects across Switzerland.",
};

export default function Page() {
  return <PortfolioPage />;
}
