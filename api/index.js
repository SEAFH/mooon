export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  if (ua.includes('Roblox')) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send('loadstring(game:HttpGet("https://api.jnkie.com/api/v1/luascripts/public/05202a6a652c8550230232c7e8d0d005504075e14d027a1c29b5709db0cc92ee/download"))()');
    return;
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>moon\u2122</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root { --bg:#0d0a14; --border:#3a2a5e; --text:#fff; --muted:#aaa; --accent:#c77dff; --grid:rgba(180,130,255,0.05); }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:var(--bg); color:var(--text); font-family:'Space Mono',monospace; min-height:100vh; overflow-x:hidden; position:relative; }
  body::before {
    content:''; position:fixed; inset:0;
    background-image: linear-gradient(var(--grid) 1px,transparent 1px), linear-gradient(90deg,var(--grid) 1px,transparent 1px);
    background-size:60px 60px; animation:gridMove 6s linear infinite; pointer-events:none; z-index:0;
  }
  @keyframes gridMove { 0%{background-position:0 0} 100%{background-position:0 60px} }
  .grid-floor {
    position:fixed; bottom:0; left:-20%; width:140%; height:55%;
    background-image: linear-gradient(rgba(180,130,255,0.06) 1px,transparent 1px), linear-gradient(90deg,rgba(180,130,255,0.06) 1px,transparent 1px);
    background-size:60px 60px; transform:perspective(600px) rotateX(60deg); transform-origin:top center;
    pointer-events:none; z-index:0; opacity:0.7; animation:floorMove 4s linear infinite;
  }
  @keyframes floorMove { 0%{background-position:0 0} 100%{background-position:0 60px} }
  #particles { position:fixed; inset:0; pointer-events:none; z-index:0; }
  .glow-orb {
    position:fixed; width:500px; height:500px; border-radius:50%;
    background:radial-gradient(circle,rgba(199,125,255,0.08) 0%,transparent 70%);
    top:50%; left:50%; transform:translate(-50%,-50%); pointer-events:none; z-index:0;
    animation:pulse 4s ease-in-out infinite;
  }
  @keyframes pulse { 0%,100%{opacity:0.5;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.2)} }
  body::after { content:''; position:fixed; inset:0; background:radial-gradient(ellipse at 30% 40%,transparent 40%,rgba(0,0,0,0.7) 100%); pointer-events:none; z-index:0; }
  .scanlines { position:fixed; inset:0; background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px); pointer-events:none; z-index:2; }
  .container { position:relative; z-index:1; max-width:860px; padding:60px 50px 40px; min-height:100vh; display:flex; flex-direction:column; justify-content:center; }
  .logo { margin-bottom:36px; opacity:0; animation:fadeUp 0.6s ease forwards 0.1s; }
  .logo svg { width:120px; height:120px; }
  h1 { font-family:'Courier Prime',monospace; font-size:clamp(2rem,5vw,3.2rem); font-weight:700; letter-spacing:-0.02em; color:var(--text); margin-bottom:28px; opacity:0; animation:fadeUp 0.6s ease forwards 0.2s; line-height:1.1; }
  .code-block { display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.04); border:1.5px solid var(--border); padding:14px 18px; margin-bottom:44px; max-width:620px; overflow:hidden; opacity:0; animation:fadeUp 0.6s ease forwards 0.42s; }
  .code-block code { font-family:'Space Mono',monospace; font-size:0.78rem; color:#ccc; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .copy-btn { background:transparent; border:none; color:var(--muted); cursor:pointer; padding:4px; display:flex; align-items:center; transition:color 0.15s; flex-shrink:0; margin-left:12px; }
  .copy-btn:hover,.copy-btn.copied { color:var(--accent); }
  .description { font-size:0.9rem; line-height:1.75; color:#ccc; max-width:600px; margin-bottom:44px; opacity:0; animation:fadeUp 0.6s ease forwards 0.35s; }
  .description .highlight { color:var(--accent); font-style:italic; }
  .buttons { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:56px; opacity:0; animation:fadeUp 0.6s ease forwards 0.5s; }
  .btn { display:inline-block; padding:14px 28px; border:1.5px solid var(--text); background:transparent; color:var(--text); font-family:'Space Mono',monospace; font-size:0.82rem; font-weight:700; letter-spacing:0.03em; text-decoration:none; cursor:pointer; transition:all 0.18s ease; position:relative; overflow:hidden; }
  .btn::before { content:''; position:absolute; inset:0; background:var(--accent); transform:scaleX(0); transform-origin:left; transition:transform 0.18s ease; z-index:-1; }
  .btn:hover { color:#fff; border-color:var(--accent); }
  .btn:hover::before { transform:scaleX(1); }
  .copyright { font-size:0.65rem; color:var(--muted); letter-spacing:0.1em; text-transform:uppercase; opacity:0; animation:fadeUp 0.6s ease forwards 0.75s; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
</style>
</head>
<body>
<canvas id="particles"></canvas>
<div class="glow-orb"></div>
<div class="grid-floor"></div>
<div class="scanlines"></div>
<div class="container">

  <div class="logo">
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#c77dff" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#c77dff" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e0aaff"/>
          <stop offset="100%" stop-color="#7b2fff"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill="url(#glowGrad)"/>
      <circle cx="60" cy="60" r="44" fill="url(#moonGrad)" opacity="0.15"/>
      <circle cx="60" cy="60" r="44" fill="none" stroke="#c77dff" stroke-width="1" opacity="0.4"/>
      <path d="M60 20 A40 40 0 1 1 60 100 A28 28 0 1 0 60 20 Z" fill="url(#moonGrad)" opacity="0.9"/>
      <circle cx="60" cy="60" r="44" fill="none" stroke="#c77dff" stroke-width="0.5" opacity="0.6" stroke-dasharray="4 3"/>
    </svg>
  </div>

  <h1>moon\u2122</h1>
  <p class="description">
    moon\u2122 is a keyless and free script. Even though it is free and keyless, we still try to make the script because we just want everyone to be able to open and use it without having to get a key in a <span class="highlight">tiring</span> way.
  </p>
  <div class="code-block">
    <code id="loadstring">loadstring(game:HttpGet("https://moon-hub-eight.vercel.app"))()</code>
    <button class="copy-btn" onclick="copyCode()" title="Copy">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>
    </button>
  </div>
  <div class="buttons">
    <a href="#" class="btn">Support Game</a>
    <a href="#" class="btn">FAQ</a>
    <a href="#" class="btn">Features</a>
  </div>
  <p class="copyright">&copy; 2025 MOON\u2122</p>
</div>
<script>
  function copyCode() {
    const text = document.getElementById('loadstring').textContent;
    navigator.clipboard.writeText(text);
    const btn = document.querySelector('.copy-btn');
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
      btn.classList.remove('copied');
    }, 2000);
  }
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const particles = Array.from({length:60}, () => ({
    x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight,
    r: Math.random()*1.5+0.3, vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
    alpha: Math.random()*0.6+0.2
  }));
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(199,125,255,'+p.alpha+')';
      ctx.shadowBlur=6; ctx.shadowColor='rgba(199,125,255,0.8)'; ctx.fill();
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0) p.x=canvas.width; if(p.x>canvas.width) p.x=0;
      if(p.y<0) p.y=canvas.height; if(p.y>canvas.height) p.y=0;
    });
    requestAnimationFrame(draw);
  }
  draw();
</script>
</body>
</html>`);
}
