export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Welcome to Vera 🚀
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Create viral content in minutes with AI-powered scripts, trending hooks, and ready-to-use social posts.
      </p>
      <a
        href="#get-started"
        style={{
          backgroundColor: '#3b82f6',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: 'bold',
          color: 'white',
          textDecoration: 'none'
        }}
      >
        Get Started
      </a>
    </div>
  );
}
