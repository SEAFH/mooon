module.exports = function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  // 1. Nếu là từ Roblox (để chạy script executor)
  if (ua.includes('Roblox')) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send('loadstring(game:HttpGet("https://api.jnkie.com"))()');
    return;
  }

  // 2. Trả về toàn bộ giao diện HTML cho trình duyệt
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>moon™</title>
<link href="https://fonts.googleapis.com" rel="stylesheet">
<style>
  :root {
    --bg: #0d0a14;
    --surface: #1a1228;
    --border: #3a2a5e;
    --text: #ffffff;
    --muted: #aaaaaa;
    --accent: #c77dff;
    --grid: rgba(180,130,255,0.05);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Space Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: gridMove 6s linear infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes gridMove {
    0%   { background-position: 0 0; }
    100% { background-position: 0 60px; }
  }

  .grid-floor {
    position: fixed;
    bottom: 0;
    left: -20%;
    width: 140%;
    height: 55%;
    background-image:
      linear-gradient(rgba(180,130,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(180,130,255,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: perspective(600px) rotateX(60deg);
    transform-origin: top center;
    pointer-events: none;
    z-index: 0;
    opacity: 0.7;
    animation: floorMove 4s linear infinite;
  }

  @keyframes floorMove {
    0%   { background-position: 0 0; }
    100% { background-position: 0 60px; }
  }

  #particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .glow-orb {
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(199,125,255,0.08) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.2); }
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse at 30% 40%, transparent 40%, rgba(0,0,0,0.7) 100%);
    pointer-events: none;
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 860px;
    padding: 60px 50px 40px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo {
    width: 180px;
    height: 180px;
    margin-bottom: 40px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.1s;
  }

  .logo img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 10px var(--accent));
  }

  h1 {
    font-family: 'Courier Prime', monospace;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: var(--text);
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.2s;
  }

  .code-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255,255,255,0.04);
    border: 1.5px solid var(--border);
    padding: 14px 18px;
    margin-bottom: 44px;
    max-width: 620px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.42s;
  }

  .code-block code {
    font-size: 0.78rem;
    color: #ccc;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .copy-btn {
    background: transparent;
    border: none;
    color: var(--muted);
    cursor: pointer;
    margin-left: 12px;
    transition: color 0.15s;
  }

  .copy-btn:hover, .copy-btn.copied { color: var(--accent); }

  .description {
    font-size: 0.9rem;
    line-height: 1.75;
    color: #cccccc;
    max-width: 600px;
    margin-bottom: 44px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.35s;
  }

  .buttons {
    display: flex;
    gap: 12px;
    margin-bottom: 56px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.5s;
  }

  .btn {
    padding: 14px 28px;
    border: 1.5px solid var(--text);
    color: var(--text);
    text-decoration: none;
    font-weight: 700;
    transition: all 0.18s ease;
    background: transparent;
  }

  .btn:hover { background: var(--accent); border-color: var(--accent); color: #000; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
</head>
<body>

<canvas id="particles"></canvas>
<div class="glow-orb"></div>
<div class="grid-floor"></div>

<div class="container">
  <div class="logo">
    <img src="https://via.placeholder.com" alt="Logo">
  </div>

  <h1>moon<span style="color: var(--accent)">.lua</span></h1>

  <div class="description">
    Hệ thống tối ưu hóa cho trải nghiệm tốt nhất. Nhấn nút bên dưới để sao chép script thực thi.
  </div>

  <div class="code-block">
    <code id="script-code">_G.Key = "YOUR_KEY"; loadstring(game:HttpGet("https://api.jnkie.com..."))()</code>
    <button class="copy-btn" onclick="copyScript(this)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
  </div>

  <div class="buttons">
    <a href="#" class="btn">DISCORD</a>
    <a href="#" class="btn">DOCUMENTATION</a>
  </div>
</div>

<script>
  // Đã sửa dấu backtick thành nháy đơn ở đây để tránh lỗi 500
  function copyScript(btn) {
    const text = document.getElementById('script-code').innerText;
    navigator.clipboard.writeText(text).then(() => {
      const originalSVG = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = originalSVG;
      }, 2000);
    });
  }

  // Hiệu ứng Particles đơn giản
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for(let i=0; i<50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(199, 125, 255, 0.5)';
    particles.forEach(p => {
      p.y -= p.speed;
      if (p.y < 0) p.y = canvas.height;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', init);
  init();
  animate();
</script>

</body>
</html>`);
};
