import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schema's - Warmtevolt.nl",
  description: "Bekijk de verschillende warmtepomp opstellingen: Hybride, Hybride met buffervat, All-electric en Stand-alone.",
};

export default function SchemasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


