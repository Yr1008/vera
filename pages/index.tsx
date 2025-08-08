export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(1200px 800px at 20% -10%, rgba(255,59,48,.08), transparent 60%), radial-gradient(900px 600px at 120% 20%, rgba(0,0,0,.06), transparent 40%)",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
        color: "#111",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 920,
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "saturate(180%) blur(16px)",
          WebkitBackdropFilter: "saturate(180%) blur(16px)",
          border: "1px solid rgba(0,0,0,0.06)",
          borderRadius: 16,
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          padding: "36px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 14, letterSpacing: 1, opacity: 0.7, marginBottom: 6 }}>
          VERA
        </div>

        <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: "6px 0 12px" }}>
          Create viral, trend-ready posts in minutes
        </h1>

        <p style={{ fontSize: 18, color: "#555", maxWidth: 720, margin: "0 auto 22px" }}>
          AI scripts, on-image safe-zone text, scheduling across TikTok/IG, and a simple viral
          dashboard — all in a calm, minimal interface.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/onboarding"
            style={{
              padding: "12px 18px",
              background: "#111",
              color: "#fff",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
            }}
          >
            Get Started
          </a>
          <a
            href="/create"
            style={{
              padding: "12px 18px",
              background: "rgba(0,0,0,0.06)",
              color: "#111",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Skip to Create
          </a>
        </div>

        <div
          style={{
            marginTop: 26,
            fontSize: 13,
            color: "#666",
          }}
        >
          Founders’ pricing available during beta • Auto-posting & analytics included
        </div>
      </div>
    </main>
  );
}
