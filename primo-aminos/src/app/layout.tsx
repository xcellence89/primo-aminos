import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primo Aminos",
  description: "Research Use Only compounds for laboratory and analytical research.",
};

const linkStyle: React.CSSProperties = {
  color: "#0f172a",
  textDecoration: "none",
  fontSize: 14,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "22px 18px" }}>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#0f172a",
                fontWeight: 900,
                letterSpacing: 0.4,
              }}
            >
              PRIMO AMINOS
            </a>
            <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/catalog" style={linkStyle}>
                Catalog
              </a>
              <a href="/documentation" style={linkStyle}>
                Documentation
              </a>
              <a href="/shipping" style={linkStyle}>
                Shipping
              </a>
              <a href="/research-use-disclaimer" style={linkStyle}>
                RUO Disclaimer
              </a>
              <a href="/terms" style={linkStyle}>
                Terms
              </a>
              <a href="/privacy" style={linkStyle}>
                Privacy
              </a>
              <a href="/contact" style={linkStyle}>
                Contact
              </a>
            </nav>
          </header>

          {children}

          <footer
            style={{
              marginTop: 42,
              paddingTop: 18,
              borderTop: "1px solid #e5e7eb",
              fontSize: 12,
              color: "#64748b",
            }}
          >
            © {new Date().getFullYear()} Primo Aminos. Research Use Only. Not for
            human or veterinary use.
          </footer>
        </div>
      </body>
    </html>
  );
}
