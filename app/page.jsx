export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center"
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>Smart Booking Mask</h1>
        <p style={{ marginBottom: "4px" }}>
          This is the default home page.
        </p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Telegram will usually send users directly to <code>/form/S123456</code>.
        </p>
      </div>
    </main>
  );
}
