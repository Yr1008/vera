export default function Onboarding() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24}}>
      <div style={{maxWidth:760,width:"100%",border:"1px solid #eee",borderRadius:16,padding:24}}>
        <h1 style={{fontSize:28,marginBottom:6}}>Quick Onboarding</h1>
        <p style={{opacity:.7,marginBottom:16}}>Sign in, add brand basics, connect accounts — done.</p>
        <ol style={{lineHeight:1.8,marginLeft:18}}>
          <li>Sign in with Google / Apple</li>
          <li>Brand name + niche + audience</li>
          <li>Paste product URL (we’ll auto-extract USPs)</li>
          <li>Connect TikTok / Instagram</li>
          <li>Goal (Installs / Sales / Growth)</li>
        </ol>
        <div style={{marginTop:16,display:"flex",gap:8}}>
          <a href="/create" style={{padding:"10px 16px",background:"#111",color:"#fff",borderRadius:12,textDecoration:"none",fontWeight:600}}>Continue → Create</a>
          <a href="/" style={{padding:"10px 16px",background:"rgba(0,0,0,.06)",borderRadius:12,textDecoration:"none"}}>Back</a>
        </div>
      </div>
    </main>
  );
}
