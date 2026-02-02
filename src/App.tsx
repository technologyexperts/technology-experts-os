import React, { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "system-ui", padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 6 }}>Technology Expert’s</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        App en construcción ✅ (primera pantalla funcionando)
      </p>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 16 }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid #111", background: "#111", color: "white", fontWeight: 800 }}
        >
          Probar botón
        </button>
        <div>Clicks: <b>{count}</b></div>
      </div>

      <div style={{ marginTop: 20, padding: 12, borderRadius: 12, border: "1px solid #e5e5e5" }}>
        Próximo: Orden de servicio desde <b>2100</b>, checklist, fotos y firma.
      </div>
    </div>
  );
}
