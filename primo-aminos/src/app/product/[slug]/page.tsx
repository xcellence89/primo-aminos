import { getProduct } from "@/lib/catalog";
import { RUOBanner } from "@/components/RUOBanner";
import { RUOGate } from "@/components/RUOGate";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return <main>Not found</main>;

  const lots = [...product.lots].reverse();
  const latest = lots[0];

  return (
    <main style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0, color: "#0f172a" }}>{product.name}</h1>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", color: "#475569", fontSize: 14 }}>
        <span>{product.vialLabel}</span>
        <span>•</span>
        <span>SKU: {product.sku}</span>
        {latest?.lot ? (
          <>
            <span>•</span>
            <span>Lot: {latest.lot}</span>
          </>
        ) : null}
      </div>

      {product.constituents ? (
        <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
          Constituents: {product.constituents}
        </div>
      ) : null}

      <RUOBanner />

      <section style={{ display: "grid", gap: 10 }}>
        <h2 style={{ margin: "8px 0 0", fontSize: 16, color: "#0f172a" }}>Documentation</h2>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 900, color: "#0f172a" }}>Independent Analytical Report</div>
          <div style={{ marginTop: 6, fontSize: 13, color: "#475569", lineHeight: 1.6 }}>
            Reports are linked by lot number. These documents are not certificates of analysis.
          </div>

          <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
            {lots.map((l) => (
              <div
                key={l.lot}
                style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}
              >
                <div style={{ fontSize: 13, color: "#0f172a" }}>
                  <strong>Lot:</strong> {l.lot}{" "}
                  <span style={{ color: "#64748b" }}>
                    • {l.status === "available" ? "Report available" : "Report pending"}
                  </span>
                </div>

                <div style={{ fontSize: 13 }}>
                  {l.status === "available" && l.reportUrl ? (
                    <a href={l.reportUrl} style={{ color: "#0f172a" }}>
                      View report on Janoshik (external)
                    </a>
                  ) : (
                    <span style={{ color: "#94a3b8" }}>No link</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RUOGate onProceed={() => alert("Demo: cart not implemented yet.")} />
    </main>
  );
}
