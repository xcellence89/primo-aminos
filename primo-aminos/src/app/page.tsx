import { RUOBanner } from "@/components/RUOBanner";

export default function Home() {
  return (
    <main style={{ display: "grid", gap: 16 }}>
      <h1 style={{ margin: 0, fontSize: 44, letterSpacing: -0.8, color: "#0f172a" }}>
        Research Use Only
      </h1>

      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, maxWidth: 820, color: "#334155" }}>
        Primo Aminos supplies research-use-only compounds for laboratory and analytical research.
        Products are not intended for human or veterinary use. No medical, therapeutic, or diagnostic claims are made.
      </p>

      <RUOBanner />

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
        <a
          href="/catalog"
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid #0f172a",
            background: "#0f172a",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          View Catalog
        </a>

        <a
          href="/documentation"
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            background: "#fff",
            color: "#0f172a",
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          View Documentation
        </a>
      </div>
    </main>
  );
}
