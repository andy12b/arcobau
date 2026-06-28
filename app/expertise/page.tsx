import type { Metadata } from "next";
import ExpertisePage from "./ExpertisePage";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "ArcoBau bietet Innenausbau, Wärmedämmfassaden, Fliesenlegen und Rohbau in der ganzen Schweiz. Schweizer Präzision, transparente Preise, schriftliche Garantie auf alle Arbeiten.",
};

export default function Page() {
  return <ExpertisePage />;
}
