export default function Home() {
  return (
    <main style={{ 
      fontFamily: "sans-serif", 
      textAlign: "center", 
      padding: "50px" 
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        🚀 Welcome to Vera
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#555" }}>
        Viral content creation in minutes — AI scripts, ready-to-post carousels, and more.
      </p>
      <a 
        href="#"
        style={{
          padding: "12px 24px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Get Started
      </a>
    </main>
  )
}
