import { products } from "@/lib/catalog";
import { RUOBanner } from "@/components/RUOBanner";

export default function Catalog() {
  return (
    <main style={{ display: "grid", gap: 16 }}>
      <h1 style={{ margin: 0, color: "#0f172a" }}>Catalog</h1>
      <p style={{ margin: 0, color: "#334155", lineHeight: 1.7, maxWidth: 820 }}>
        Browse research-use-only products. Documentation is provided where available as independent analytical reports.
      </p>
      <RUOBanner />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
        {products.map((p) => (
          <a
            key={p.slug}
            href={`/product/${p.slug}`}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 14,
              padding: 14,
              textDecoration: "none",
              color: "#0f172a",
              background: "#fff",
            }}
          >
            <div style={{ fontWeight: 900 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: "#475569", marginTop: 6 }}>{p.vialLabel}</div>
            {p.constituents ? (
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 6 }}>{p.constituents}</div>
            ) : null}
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 10 }}>SKU: {p.sku}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
