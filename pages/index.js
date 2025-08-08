export default function Home() {
  return (
    <div style={{
      display:'flex', flexDirection:'column', alignItems:'center',
      justifyContent:'center', minHeight:'100vh', background:'#0f172a',
      color:'#fff', textAlign:'center', padding:'2rem'
    }}>
      <h1 style={{ fontSize:'3rem', fontWeight:'bold', marginBottom:'1rem' }}>
        Welcome to Vera 🚀
      </h1>
      <p style={{ fontSize:'1.2rem', maxWidth:600, marginBottom:'2rem' }}>
        Create viral content in minutes with AI-powered scripts, trending hooks,
        and ready-to-post social posts.
      </p>
      <a href="/onboarding" style={{
        background:'#3b82f6', padding:'0.75rem 1.5rem', borderRadius:'0.5rem',
        fontWeight:'bold', color:'#fff', textDecoration:'none'
      }}>
        Get Started
      </a>
    </div>
  );
}
