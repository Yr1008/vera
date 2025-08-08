import { useState } from "react";

export default function Create() {
  const [niche, setNiche] = useState("Finance");
  const [audience, setAudience] = useState("Gen Z in the US");
  const [product, setProduct] = useState("an AI personal finance app");
  const [hook, setHook] = useState(null);

  const generate = () => {
    const hooks = [
      "I thought I was saving… until I saw this",
      "$312 disappeared last week? Here’s where",
      "The app that claps back at my spending"
    ];
    setHook(hooks[Math.floor(Math.random()*hooks.length)]);
  };

  return (
    <main style={{minHeight:"100vh",display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,padding:24}}>
      <section style={{border:"1px solid #eee",borderRadius:16,padding:20}}>
        <h1 style={{fontSize:24,marginBottom:12}}>Create Post</h1>
        <div style={{display:"grid",gap:8}}>
          <select value={niche} onChange={(e)=>setNiche(e.target.value)} style={{padding:10,borderRadius:10,border:"1px solid #ddd"}}>
            <option>Finance</option><option>Beauty</option><option>Fitness</option>
          </select>
          <input value={audience} onChange={(e)=>setAudience(e.target.value)} placeholder="Audience" style={{padding:10,borderRadius:10,border:"1px solid #ddd"}}/>
          <input value={product} onChange={(e)=>setProduct(e.target.value)} placeholder="Product" style={{padding:10,borderRadius:10,border:"1px solid #ddd"}}/>
          <button onClick={generate} style={{padding:"10px 16px",borderRadius:12,background:"#111",color:"#fff",fontWeight:600}}>Generate</button>
        </div>

        {hook && (
          <div style={{marginTop:14}}>
            <div style={{fontWeight:600,marginBottom:6}}>Hook</div>
            <div style={{padding:12,borderRadius:12,background:"rgba(0,0,0,.06)"}}>{hook}</div>
            <div style={{marginTop:10,fontSize:14,opacity:.7}}>
              Caption: Your money, but clearer. #genzfinance #moneymindset
            </div>
          </div>
        )}
      </section>

      <section style={{border:"1px solid #eee",borderRadius:16,padding:20}}>
        <h2 style={{fontSize:18,marginBottom:8}}>Preview (1080×1920)</h2>
        <div style={{position:"relative",width:"100%",aspectRatio:"9/16",borderRadius:16,overflow:"hidden",background:"linear-gradient(135deg,#f5f5f5,#e9e9e9)"}}>
          <div style={{position:"absolute",inset:0,display:"grid",placeItems:"center",opacity:.4}}>Candid iPhone image</div>
          <div style={{position:"absolute",left:0,top:0,right:0,height:200,background:"rgba(255,59,48,.12)"}}/>
          <div style={{position:"absolute",left:0,bottom:0,right:0,height:300,background:"rgba(255,59,48,.12)"}}/>
          {hook && (
            <div style={{position:"absolute",left:16,top:220,maxWidth:"70%",background:"rgba(0,0,0,.7)",color:"#fff",padding:"10px 12px",borderRadius:12}}>
              {hook}
            </div>
          )}
        </div>
        <div style={{marginTop:12,display:"flex",gap:8}}>
          <a href="/onboarding" style={{padding:"10px 16px",background:"rgba(0,0,0,.06)",borderRadius:12,textDecoration:"none"}}>Back</a>
          <a href="/" style={{padding:"10px 16px",background:"#111",color:"#fff",borderRadius:12,textDecoration:"none",fontWeight:600}}>Schedule (stub)</a>
        </div>
      </section>
    </main>
  );
}
