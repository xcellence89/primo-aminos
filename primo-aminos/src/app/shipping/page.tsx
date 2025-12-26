export default function Shipping() {
  return (
    <main style={{ display: "grid", gap: 12, maxWidth: 900 }}>
      <h1 style={{ margin: 0, color: "#0f172a" }}>Shipping</h1>
      <p style={{ margin: 0, color: "#334155", lineHeight: 1.7 }}>
        Orders are processed in the order received. Shipping timelines vary by destination and carrier.
      </p>
      <p style={{ margin: 0, color: "#334155", lineHeight: 1.7 }}>
        Please verify delivery information at checkout. If you have an issue with a shipment, contact support with your
        order number.
      </p>
    </main>
  );
}
