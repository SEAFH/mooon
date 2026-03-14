module.exports = function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  // 1. Xử lý phản hồi cho Roblox
  if (ua.includes('Roblox')) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send('loadstring(game:HttpGet("https://api.jnkie.com/api/v1/luascripts/public/05202a6a652c8550230232c7e8d0d005504075e14d027a1c29b5709db0cc92ee/download"))()');
    return;
  }

  // 2. Dữ liệu ảnh Base64 (đã rút gọn để bạn dễ theo dõi, bạn hãy dán lại mã đầy đủ của bạn vào đây)
  const logoBase64 = "iVBORw0KGgoAAAANSUhEUgAABgAAAAQACAYAAAAncZJCAAEAAEl... (đoạn mã rất dài của bạn) ...";

  // 3. Phản hồi giao diện HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>moon™</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
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
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.1s;
  }

  .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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

  .description {
    font-size: 0.9rem;
    color: #cccccc;
    max-width: 600px;
    margin-bottom: 44px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.35s;
  }

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
    <img src="data:image/png;base64,${logoBase64}" alt="Logo">
  </div>
  <h1>moon™<span class="cursor"></span></h1>
  <p class="description">Giao diện đã sẵn sàng.</p>
</div>

<script>
  // Bạn có thể thêm script xử lý hạt (particles) ở đây nếu muốn
</script>
</body>
</html>`);
};
