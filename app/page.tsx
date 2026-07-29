export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "12px" }}>
          SSOMA PRO
        </h1>

        <p style={{ fontSize: "20px", color: "#cbd5e1" }}>
          Sistema Integral de Seguridad, Salud Ocupacional y Medio Ambiente
        </p>
      </div>
    </main>
  );
}
