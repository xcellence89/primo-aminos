"use client";

import { useState } from "react";

export function RUOGate({ onProceed }: { onProceed: () => void }) {
  const [ruo, setRuo] = useState(false);
  const [age, setAge] = useState(false);

  const ok = ruo && age;

  return (
    <div
      style={{
        display: "grid",
        gap: 10,
        border: "1px solid #e5e7eb",
        padding: 14,
        borderRadius: 12,
      }}
    >
      <div style={{ fontWeight: 800 }}>Before proceeding</div>

      <label style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <input
          type="checkbox"
          checked={ruo}
          onChange={(e) => setRuo(e.target.checked)}
          style={{ marginTop: 3 }}
        />
        <span style={{ fontSize: 14, lineHeight: 1.5 }}>
          I acknowledge this product is <strong>Research Use Only</strong> and
          not for human or veterinary use.
        </span>
      </label>

      <label style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <input
          type="checkbox"
          checked={age}
          onChange={(e) => setAge(e.target.checked)}
          style={{ marginTop: 3 }}
        />
        <span style={{ fontSize: 14, lineHeight: 1.5 }}>
          I confirm I am at least <strong>18 years old</strong>.
        </span>
      </label>

      <button
        disabled={!ok}
        onClick={() => ok && onProceed()}
        style={{
          padding: "10px 14px",
          borderRadius: 12,
          border: "1px solid #0f172a",
          background: ok ? "#0f172a" : "#eee",
          color: ok ? "#fff" : "#666",
          fontWeight: 800,
          cursor: ok ? "pointer" : "not-allowed",
        }}
      >
        Add to Cart (demo)
      </button>

      <div style={{ fontSize: 12, color: "#64748b" }}>
        Demo only for now. Checkout is added after processor strategy is finalized.
      </div>
    </div>
  );
}
