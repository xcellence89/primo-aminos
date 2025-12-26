import { getAllLots } from "@/lib/catalog";
import { RUOBanner } from "@/components/RUOBanner";

export default function Documentation() {
  const lots = getAllLots().reverse();

  return (
    <main style={{ display: "grid", gap: 16 }}>
      <h1 style={{ margin: 0, color: "#0f172a" }}>Documentation</h1>

      <p style={{ margin: 0, color: "#334155", lineHeight: 1.7, maxWidth: 860 }}>
        Independent analytical reports are provided where available. Reports are linked by product and lot number.
        These documents are not certificates of analysis.
      </p>

      <RUOBanner />

      <div style={{ border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 0.9fr",
            padding: 12,
            background: "#fafafa",
            fontSize: 12,
            color: "#64748b",
          }}
        >
          <div>Product</div>
          <div>Lot</div>
          <div>Status</div>
          <div>Link</div>
        </div>

        {lots.map((l) => (
          <div
            key={`${l.productSlug}-${l.lot}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr 0.9fr",
              padding: 12,
              borderTop: "1px solid #e5e7eb",
              fontSize: 13,
            }}
          >
            <div>
              <a
                href={`/product/${l.productSlug}`}
                style={{ color: "#0f172a", textDecoration: "none", fontWeight: 900 }}
              >
                {l.productName}
              </a>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>{l.vialLabel}</div>
            </div>
            <div style={{ color: "#0f172a" }}>{l.lot}</div>
            <div style={{ color: "#475569" }}>{l.status === "available" ? "Available" : "Pending"}</div>
            <div>
              {l.status === "available" && l.reportUrl ? (
                <a href={l.reportUrl} style={{ color: "#0f172a" }}>
                  Janoshik (external)
                </a>
              ) : (
                <span style={{ color: "#94a3b8" }}>—</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
