export type LotReport = {
  lot: string;                 // e.g. "PA-RETA-001"
  status: "pending" | "available";
  labName?: string;            // e.g. "Janoshik Analytical"
  dateTested?: string;         // ISO date e.g. "2026-01-15"
  reportUrl?: string;          // external link (Janoshik)
  notes?: string;              // strictly factual
};

export type Product = {
  slug: string;
  name: string;
  vialLabel: string;           // plain: "20 mg vial"
  sku: string;
  constituents?: string;       // blends only
  lots: LotReport[];
};

export const products: Product[] = [
  {
    slug: "retatrutide-20mg",
    name: "Retatrutide",
    vialLabel: "20 mg vial",
    sku: "PA-RETA-20",
    lots: [{ lot: "PA-RETA-001", status: "pending" }],
  },
  {
    slug: "klow-blend",
    name: "KLOW Blend",
    vialLabel: "95 mg vial",
    sku: "PA-KLOW-95",
    constituents: "GHK-Cu 60 mg / KPV 15 mg / BPC-157 10 mg / TB-500 10 mg",
    lots: [{ lot: "PA-KLOW-001", status: "pending" }],
  },
  {
    slug: "tesamorelin-10mg",
    name: "Tesamorelin",
    vialLabel: "10 mg vial",
    sku: "PA-TESA-10",
    lots: [{ lot: "PA-TESA-001", status: "pending" }],
  },
  {
    slug: "ipamorelin-5mg",
    name: "Ipamorelin",
    vialLabel: "5 mg vial",
    sku: "PA-IPA-5",
    lots: [{ lot: "PA-IPA-001", status: "pending" }],
  },
  {
    slug: "selank-10mg",
    name: "Selank",
    vialLabel: "10 mg vial",
    sku: "PA-SEL-10",
    lots: [{ lot: "PA-SEL-001", status: "pending" }],
  },
  {
    slug: "semax-10mg",
    name: "Semax",
    vialLabel: "10 mg vial",
    sku: "PA-SEMAX-10",
    lots: [{ lot: "PA-SEMAX-001", status: "pending" }],
  },
  {
    slug: "nad-buffered-500mg",
    name: "NAD⁺ Buffered",
    vialLabel: "500 mg vial",
    sku: "PA-NAD-500",
    lots: [{ lot: "PA-NAD-001", status: "pending" }],
  },
  {
    slug: "mots-c-10mg",
    name: "MOTS-C",
    vialLabel: "10 mg vial",
    sku: "PA-MOTS-10",
    lots: [{ lot: "PA-MOTS-001", status: "pending" }],
  },
  {
    slug: "cagrilintide-10mg",
    name: "Cagrilintide",
    vialLabel: "10 mg vial",
    sku: "PA-CAG-10",
    lots: [{ lot: "PA-CAG-001", status: "pending" }],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getAllLots() {
  return products.flatMap((p) =>
    p.lots.map((l) => ({
      productName: p.name,
      productSlug: p.slug,
      sku: p.sku,
      vialLabel: p.vialLabel,
      constituents: p.constituents,
      ...l,
    }))
  );
}
