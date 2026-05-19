import type { Metadata } from "next";
import CompanyPage from "./CompanyPage";

export const metadata: Metadata = {
  title: "Company – ArcoBau | Swiss Construction & Finishing",
  description:
    "About ArcoBau — a Swiss construction company specialising in residential building, interior finishing, and flooring. 15+ years serving private clients across Switzerland.",
};

export default function Page() {
  return <CompanyPage />;
}
