module.exports = function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  // 1. Nếu là từ Roblox
  if (ua.includes('Roblox')) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send('loadstring(game:HttpGet("https://api.jnkie.com"))()');
    return;
  }

  // 2. Trả về HTML nguyên bản 100% không qua xử lý chuỗi
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  const rawHtml = `<!DOCTYPE html>
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

  /* Grid background */
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

  /* Floating particles canvas */
  #particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  /* Pulsing ambient glow */
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

  /* Radial vignette */
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

  /* Logo */
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
    background: transparent;
  }

  .logo svg {
    width: 180px;
    height: 180px;
  }

  /* Title */
  h1 {
    font-family: 'Courier Prime', monospace;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.2s;
    line-height: 1.1;
  }

  /* Code block */
  .code-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255,255,255,0.04);
    border: 1.5px solid var(--border);
    padding: 14px 18px;
    margin-bottom: 44px;
    max-width: 620px;
    overflow: hidden;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.42s;
  }

  .code-block code {
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    color: #ccc;
    letter-spacing: 0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .copy-btn {
    background: transparent;
    border: none;
    color: var(--muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    transition: color 0.15s;
    flex-shrink: 0;
    margin-left: 12px;
  }

  .copy-btn:hover { color: var(--accent); }
  .copy-btn.copied { color: var(--accent); }

  /* Description */
  .description {
    font-size: 0.9rem;
    line-height: 1.75;
    color: #cccccc;
    max-width: 600px;
    margin-bottom: 44px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.35s;
    letter-spacing: 0.01em;
  }

  .description .highlight {
    color: var(--accent);
    font-style: italic;
  }

  /* Buttons */
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 56px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.5s;
  }

  .btn {
    display: inline-block;
    padding: 14px 28px;
    border: 1.5px solid var(--text);
    background: transparent;
    color: var(--text);
    font-family: 'Space Mono', monospace;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.18s ease;
    position: relative;
    overflow: hidden;
  }

  .btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.18s ease;
    z-index: -1;
  }

  .btn:hover {
    color: #fff;
    border-color: var(--accent);
  }

  .btn:hover::before {
    transform: scaleX(1);
  }

  .btn-accent {
    border-color: var(--accent);
    color: var(--accent);
  }

  .btn-accent::before {
    background: var(--accent);
  }

  .btn-accent:hover {
    color: var(--bg);
  }

  /* Footer links */
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.65s;
  }

  .footer-links a {
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.15s;
  }

  .footer-links a:hover {
    color: var(--text);
  }

  .footer-links .sep {
    color: var(--border);
    font-size: 0.7rem;
  }

  /* Copyright */
  .copyright {
    font-size: 0.65rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards 0.75s;
  }

  /* Scanline effect */
  .scanlines {
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 4px
    );
    pointer-events: none;
    z-index: 2;
  }



  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Blinking cursor */
  .cursor {
    display: inline-block;
    width: 10px;
    height: 1.1em;
    background: var(--accent);
    vertical-align: text-bottom;
    animation: blink 1s step-end infinite;
    margin-left: 4px;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>
</head>
<body>

<canvas id="particles"></canvas>
<div class="glow-orb"></div>
<div class="grid-floor"></div>
<div class="scanlines"></div>

<div class="container">

  <!-- Logo -->
  <div class="logo">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABgAAAAQACAYAAAAncZJCAAEAAElEQVR4nOz96Zts13XfeX7X3udE5HBHjMRMDBTnSbQsa7As2ZKqXe22XV39oqvr6X76r+g/qrqf9lNV3a5yuUseSpZMDZREiTMJkgBBELgA7pQ3MyPO2Xv1i73PEJGRdyBIECB+Hz2XkRlx5jgRSqy191ogIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI">
  </div>
</div>
</body>
</html>`.replace(/\\`/g, '\\\\`'); // Cách duy nhất để tránh lỗi Syntax Node.js

  res.status(200).send(rawHtml);
};
