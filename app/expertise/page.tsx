import type { Metadata } from "next";
import ExpertisePage from "./ExpertisePage";

export const metadata: Metadata = {
  title: "Expertise – ArcoBau | Residential Construction & Finishing in Switzerland",
  description:
    "ArcoBau offers residential construction, interior finishing, and flooring services across Switzerland. Swiss precision, transparent pricing, written guarantee on all works.",
};

export default function Page() {
  return <ExpertisePage />;
}
