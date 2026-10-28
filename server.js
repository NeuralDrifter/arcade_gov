import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  next();
});

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

/**
 * Safely resolves a user-supplied filename against an allowed base directory.
 * Prevents directory traversal attacks (%2e%2e, null bytes, backslashes, etc.).
 */
function safeResolve(baseDir, untrustedInput) {
  if (typeof untrustedInput !== 'string') return null;
  let decoded;
  try {
    decoded = decodeURIComponent(untrustedInput);
  } catch {
    return null;
  }
  if (decoded.includes('\0')) return null;

  const resolved = path.resolve(baseDir, decoded);
  const rel = path.relative(baseDir, resolved);

  // If path tries to escape baseDir, reject
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    return null;
  }
  return resolved;
}

const STANDALONE_ORIG_DIR = path.join(__dirname, 'wh-arcade', 'standalone');
const STANDALONE_MOD_DIR = path.join(__dirname, 'anti-fascist games', 'standalone');
const SOURCE_DIR = path.join(__dirname, 'wh-arcade', 'source');

// Inject back-to-arcade button on standalone game pages
app.get('/wh-arcade/standalone/:file', (req, res, next) => {
  const filePath = safeResolve(STANDALONE_ORIG_DIR, req.params.file);
  if (filePath && filePath.endsWith('.html') && fs.existsSync(filePath)) {
    return serveHtmlWithBackBar(filePath, res, next);
  }
  next();
});

const handleAntiFascistStandalone = (req, res, next) => {
  const filePath = safeResolve(STANDALONE_MOD_DIR, req.params.file);
  if (filePath && filePath.endsWith('.html') && fs.existsSync(filePath)) {
    return serveHtmlWithBackBar(filePath, res, next);
  }
  next();
};

app.get('/anti-fascist%20games/standalone/:file', handleAntiFascistStandalone);
app.get('/anti-fascist games/standalone/:file', handleAntiFascistStandalone);

app.get('/wh-arcade/source/:file', (req, res, next) => {
  let filePath = safeResolve(SOURCE_DIR, req.params.file);
  if (!filePath || !fs.existsSync(filePath)) {
    filePath = path.join(SOURCE_DIR, 'explorer.html');
  }
  if (filePath && filePath.endsWith('.html') && fs.existsSync(filePath)) {
    return serveHtmlWithBackBar(filePath, res, next);
  }
  next();
});

app.get('/wh-arcade/pages/index.html', (req, res, next) => {
  const filePath = path.join(__dirname, 'wh-arcade', 'pages', 'index.html');
  return serveHtmlWithBackBar(filePath, res, next);
});

// Support /arcade/:game/ links from the raw whitehouse.gov/arcade capture
app.get('/arcade/:game', (req, res, next) => {
  const game = req.params.game;
  const filePath = safeResolve(STANDALONE_ORIG_DIR, `${game}.html`);
  if (filePath && fs.existsSync(filePath)) {
    return serveHtmlWithBackBar(filePath, res, next);
  }
  next();
});

app.get('/arcade', (req, res) => {
  res.redirect('/');
});

// Serve root index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Whitelist of root-level screenshot assets required for index.html & README
const ALLOWED_ROOT_FILES = new Set([
  'index.html',
  'Red_Scare_gameplay.png',
  'Stop_The_Insurrection_gameplay.png',
  'Stop_The_Insurrection_start.png',
  'Trump_Corruption_Tycoon_Gameplay.png',
  'Trump_Corruption_Tycoon_start.png',
]);

app.get('/:file', (req, res, next) => {
  if (ALLOWED_ROOT_FILES.has(req.params.file)) {
    return res.sendFile(path.join(__dirname, req.params.file));
  }
  next();
});

// Static asset options - strictly ignore dotfiles to protect .git, .env, .aistudio
const staticOptions = {
  dotfiles: 'ignore',
  index: false,
};

// Serve public directory and designated game subdirectories
app.use(express.static(path.join(__dirname, 'public'), staticOptions));
app.use('/wh-arcade', express.static(path.join(__dirname, 'wh-arcade'), staticOptions));
app.use(['/anti-fascist%20games', '/anti-fascist games'], express.static(path.join(__dirname, 'anti-fascist games'), staticOptions));

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`White House Arcade server listening on http://0.0.0.0:${PORT}`);
  });
}

export { safeResolve, serveHtmlWithBackBar, app };
