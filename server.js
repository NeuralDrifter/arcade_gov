import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const BACK_BAR_SNIPPET = `
<div id="arcade-back-nav" style="position:fixed;top:10px;left:10px;z-index:2147483647;font-family:'Press Start 2P',monospace,sans-serif;">
  <a href="/" style="display:inline-flex;align-items:center;gap:6px;padding:8px 12px;background:rgba(5,6,15,0.9);color:#06ffa5;border:1px solid #06ffa5;border-radius:4px;font-size:10px;text-decoration:none;letter-spacing:1px;box-shadow:0 0 12px rgba(6,255,165,0.4);">
    &larr; ARCADE MENU
  </a>
</div>
`;

function serveHtmlWithBackBar(filePath, res, next) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return next();
    }
    const injected = data.includes('</body>')
      ? data.replace('</body>', `${BACK_BAR_SNIPPET}</body>`)
      : data + BACK_BAR_SNIPPET;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(injected);
  });
}

// Inject back-to-arcade button on standalone game pages and captured pages
app.get('/wh-arcade/standalone/:file', (req, res, next) => {
  const filePath = path.join(__dirname, 'wh-arcade', 'standalone', req.params.file);
  if (filePath.endsWith('.html')) {
    return serveHtmlWithBackBar(filePath, res, next);
  }
  next();
});

const handleAntiFascistStandalone = (req, res, next) => {
  const file = decodeURIComponent(req.params.file);
  const filePath = path.join(__dirname, 'anti-fascist games', 'standalone', file);
  if (filePath.endsWith('.html')) {
    return serveHtmlWithBackBar(filePath, res, next);
  }
  next();
};

app.get('/anti-fascist%20games/standalone/:file', handleAntiFascistStandalone);
app.get('/anti-fascist games/standalone/:file', handleAntiFascistStandalone);

app.get('/wh-arcade/pages/index.html', (req, res, next) => {
  const filePath = path.join(__dirname, 'wh-arcade', 'pages', 'index.html');
  return serveHtmlWithBackBar(filePath, res, next);
});

// Support /arcade/:game/ links from the raw whitehouse.gov/arcade capture
app.get('/arcade/:game', (req, res, next) => {
  const game = req.params.game;
  const standalonePath = path.join(__dirname, 'wh-arcade', 'standalone', `${game}.html`);
  if (fs.existsSync(standalonePath)) {
    return serveHtmlWithBackBar(standalonePath, res, next);
  }
  next();
});

app.get('/arcade', (req, res) => {
  res.redirect('/');
});

// Serve static files from root
app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`White House Arcade server listening on http://0.0.0.0:${PORT}`);
});
