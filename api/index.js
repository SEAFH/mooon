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
  <title>moon™ | Home</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700&family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
:root{
  --bg:#0a0812;
  --bg-deep:#05050a;
  --card:#12101b;
  --text:#f2f0fb;
  --muted:#a7a3bc;
  --accent:#b18cff;
  --accent-2:#6f5bff;
  --border:rgba(177,140,255,0.25);
  --radius:14px;
  --font-sans:"DM Sans",system-ui,sans-serif;
  --font-display:"Outfit",sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
a{color:inherit;text-decoration:none}
html{scroll-behavior:smooth}
body{
  font-family:var(--font-sans);
  color:var(--text);
  background:
    radial-gradient(1200px 600px at 10% 10%, rgba(126,92,255,0.18), transparent 60%),
    radial-gradient(900px 500px at 90% 20%, rgba(255,255,255,0.08), transparent 55%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-deep) 100%);
  min-height:100vh;
  overflow-x:hidden;
}
body::before{
  content:"";
  position:fixed;
  inset:0;
  background-image:
    linear-gradient(rgba(177,140,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(177,140,255,0.08) 1px, transparent 1px),
    radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.25), transparent 60%),
    radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.2), transparent 60%),
    radial-gradient(2px 2px at 80% 75%, rgba(255,255,255,0.18), transparent 60%);
  background-size:48px 48px,48px 48px,auto,auto,auto;
  animation:drift 28s linear infinite;
  opacity:0.65;
  pointer-events:none;
  z-index:0;
}
body::after{
  content:"";
  position:fixed;
  inset:-10% 0 0 0;
  background:radial-gradient(400px 200px at 60% 10%, rgba(177,140,255,0.2), transparent 70%);
  animation:float 12s ease-in-out infinite;
  pointer-events:none;
  z-index:0;
}
@keyframes drift{from{background-position:0 0,0 0,0 0,0 0,0 0}to{background-position:240px 240px,240px 240px,0 0,0 0,0 0}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(18px)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.reveal{opacity:0;transform:translateY(16px);animation:fadeUp .7s ease forwards}
.reveal.delay-1{animation-delay:.15s}
.reveal.delay-2{animation-delay:.3s}
.reveal.delay-3{animation-delay:.45s}

.header{position:sticky;top:0;z-index:10;background:rgba(8,7,14,0.8);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.nav{max-width:1100px;margin:0 auto;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between}
.logo{font-family:var(--font-display);font-weight:700;font-size:1.25rem;letter-spacing:.02em;color:var(--accent);text-shadow:0 0 12px rgba(177,140,255,0.35)}
.nav-links{display:flex;list-style:none;gap:1.75rem}
.nav-links a{color:var(--muted);font-weight:600;transition:color .2s}
.nav-links a:hover,.nav-links a.active{color:var(--accent);text-shadow:0 0 10px rgba(177,140,255,0.4)}
.nav-links a.active{font-weight:700}
.menu-btn{display:none;background:none;border:1px solid var(--border);color:var(--text);padding:.4rem .7rem;border-radius:10px;cursor:pointer}

.main{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:4rem 1.5rem 5rem}
.hero{display:grid;grid-template-columns:1.2fr .8fr;gap:2.5rem;align-items:center}
.hero h1{font-family:var(--font-display);font-size:clamp(2.2rem,4vw,3.2rem);line-height:1.1;margin-bottom:1rem}
.hero h1 .brand{color:var(--accent)}
.hero p{color:var(--muted);max-width:520px}
.hero-actions{margin-top:1.5rem;display:flex;gap:1rem;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:.5rem;padding:.8rem 1.4rem;border-radius:12px;font-weight:700;transition:transform .2s,box-shadow .2s,border-color .2s}
.btn-primary{background:linear-gradient(135deg,var(--accent),var(--accent-2));color:#120e1f;box-shadow:0 8px 24px rgba(120,88,255,0.35)}
.btn-outline{border:1px solid var(--border);color:var(--text)}
.btn:hover{transform:translateY(-2px)}
.hero-panel{background:linear-gradient(135deg,rgba(18,16,27,0.9),rgba(10,8,18,0.7));border:1px solid var(--border);border-radius:var(--radius);padding:1.5rem}
.hero-panel h3{font-family:var(--font-display);margin-bottom:.4rem}
.hero-panel p{color:var(--muted);font-size:.95rem}

.section{margin-top:4rem}
.section-title{font-family:var(--font-display);font-size:clamp(1.6rem,3vw,2.2rem);margin-bottom:1.2rem}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.2rem}
.card{background:rgba(18,16,27,0.8);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem;transition:transform .2s,border-color .2s,box-shadow .2s}
.card:hover{transform:translateY(-4px);border-color:rgba(177,140,255,0.6);box-shadow:0 10px 30px rgba(7,6,12,0.45)}
.card h4{font-family:var(--font-display);margin-bottom:.35rem}
.card p{color:var(--muted);font-size:.92rem}

.callout{margin-top:3rem;background:linear-gradient(135deg,rgba(177,140,255,0.15),rgba(110,80,255,0.08));border:1px solid var(--border);border-radius:16px;padding:1.6rem;display:flex;justify-content:space-between;align-items:center;gap:1.5rem}
.callout p{color:var(--muted)}

.footer{border-top:1px solid var(--border);padding:1.5rem;text-align:center;color:var(--muted)}

@media (max-width:900px){
  .hero{grid-template-columns:1fr}
}
@media (max-width:768px){
  .nav-links{display:none}
  .menu-btn{display:inline-flex}
  .callout{flex-direction:column;align-items:flex-start}
}
@media (prefers-reduced-motion:reduce){
  body::before,body::after{animation:none}
  .reveal{animation:none;opacity:1;transform:none}
}
  </style>
</head>
<body>
  <header class="header">
    <nav class="nav">
      <a class="logo" href="index.html">moon™</a>
      <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="features.html">Features</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="support.html">Support</a></li>
      </ul>
      <button class="menu-btn" aria-label="Open menu">Menu</button>
    </nav>
  </header>

  <main class="main">
    <section class="hero">
      <div class="reveal">
        <p class="section-title" style="margin-bottom:.4rem;color:var(--muted)">Welcome to</p>
        <h1><span class="brand">moon™</span></h1>
        <p>Fast, clean, and built for smooth control. Explore features, read the FAQ, or jump into support.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="features.html">Explore Features</a>
          <a class="btn btn-outline" href="support.html">Get Support</a>
        </div>
      </div>
      <div class="hero-panel reveal delay-1">
        <h3>Quick Start</h3>
        <p>Use the navigation to see Features, FAQ, and Support. Everything is optimized for speed and clarity.</p>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title reveal">Why moon™</h2>
      <div class="grid">
        <article class="card reveal delay-1">
          <h4>Performance</h4>
          <p>Lightweight UI with smooth transitions and efficient layout.</p>
        </article>
        <article class="card reveal delay-2">
          <h4>Clarity</h4>
          <p>Simple structure that stays readable on desktop and mobile.</p>
        </article>
        <article class="card reveal delay-3">
          <h4>Control</h4>
          <p>Designed for quick access to your most important pages.</p>
        </article>
      </div>
    </section>

    <section class="callout reveal">
      <div>
        <h3 style="font-family:var(--font-display)">Need help right now?</h3>
        <p>Check the FAQ or open Support for direct guidance.</p>
      </div>
      <a class="btn btn-primary" href="faq.html">Go to FAQ</a>
    </section>
  </main>

  <footer class="footer">© 2025 moon™.</footer>

  <script>
  (function(){
    var menuBtn = document.querySelector('.menu-btn');
    var navLinks = document.querySelector('.nav-links');
    if(menuBtn && navLinks){
      menuBtn.addEventListener('click', function(){
        var isOpen = navLinks.style.display === 'flex';
        navLinks.style.display = isOpen ? 'none' : 'flex';
        if(!isOpen){
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.right = '1.5rem';
          navLinks.style.background = '#0f0c18';
          navLinks.style.padding = '0.75rem 1rem';
          navLinks.style.border = '1px solid rgba(177,140,255,0.25)';
          navLinks.style.borderRadius = '12px';
          navLinks.style.gap = '0.75rem';
        }
      });
    }
  })();
  </script>
</body>
</html>
