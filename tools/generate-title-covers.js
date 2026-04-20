const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");

function loadBrowserData() {
  const context = {
    window: {},
    console
  };
  context.window = context;
  vm.createContext(context);

  const file = path.join(root, "assets", "js", "data", "site-content.js");
  const code = fs.readFileSync(file, "utf8");
  vm.runInContext(code, context, { filename: file });
  return context.SiteContent;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapWords(text, maxCharsPerLine) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
      return;
    }
    current = next;
  });

  if (current) {
    lines.push(current);
  }

  return lines;
}

function titleFontSize(lines) {
  if (lines.length <= 2) {
    return 96;
  }
  if (lines.length === 3) {
    return 82;
  }
  if (lines.length === 4) {
    return 70;
  }
  return 60;
}

function paletteFor(slug, section) {
  const palettes =
    section === "notes"
      ? [
          ["#284868", "#f0d8d0", "#ffffff"],
          ["#1f3f61", "#e9d3c4", "#ffffff"],
          ["#2a4458", "#dfc7cf", "#ffffff"]
        ]
      : [
          ["#183a5b", "#7ea8d5", "#ffffff"],
          ["#26486e", "#f0c9c6", "#ffffff"],
          ["#184c5e", "#9ecad2", "#ffffff"],
          ["#3b4470", "#d7bfd8", "#ffffff"]
        ];

  const hash = Array.from(String(slug)).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return palettes[hash % palettes.length];
}

function titleCardSvg(item, section) {
  const [colorA, colorB, textColor] = paletteFor(item.slug, section);
  const title = item.title || item.slug;
  const label = section === "notes" ? "NOTES" : "DATASET";
  const meta = section === "notes" ? item.date || "Group Resource" : `${item.year || ""} ${item.venue || ""}`.trim();
  const lines = wrapWords(title, section === "notes" ? 16 : 18).slice(0, 4);
  const fontSize = titleFontSize(lines);
  const firstLineY = 315 - ((lines.length - 1) * (fontSize + 10)) / 2;
  const titleMarkup = lines
    .map(
      (line, index) =>
        `<tspan x="110" y="${firstLineY + index * (fontSize + 18)}">${escapeXml(line)}</tspan>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colorA}"/>
      <stop offset="100%" stop-color="${colorB}"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" rx="48" fill="url(#gradient)"/>
  <circle cx="1310" cy="170" r="120" fill="rgba(255,255,255,0.12)"/>
  <circle cx="1460" cy="350" r="190" fill="rgba(255,255,255,0.09)"/>
  <circle cx="1260" cy="760" r="240" fill="rgba(255,255,255,0.08)"/>
  <path d="M0 720C180 650 320 632 470 648C625 664 768 718 936 734C1095 750 1266 726 1600 590V900H0Z" fill="rgba(255,255,255,0.08)"/>
  <rect x="108" y="108" width="224" height="56" rx="18" fill="rgba(255,255,255,0.18)"/>
  <text x="220" y="145" text-anchor="middle" font-family="'Trebuchet MS', 'Segoe UI', Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="4" fill="${textColor}">${label}</text>
  <text x="110" y="${firstLineY}" font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}" font-weight="700" fill="${textColor}">${titleMarkup}</text>
  <line x1="112" y1="610" x2="454" y2="610" stroke="rgba(255,255,255,0.7)" stroke-width="6" stroke-linecap="round"/>
  <text x="110" y="690" font-family="'Trebuchet MS', 'Segoe UI', Arial, sans-serif" font-size="34" font-weight="600" fill="rgba(255,255,255,0.92)">${escapeXml(meta)}</text>
  <text x="110" y="762" font-family="Arial, sans-serif" font-size="26" fill="rgba(255,255,255,0.74)">XJTU AIoT Group</text>
</svg>
`;
}

function writeCards(items, section) {
  const dir = path.join(root, "assets", "media", "title-covers", section);
  ensureDir(dir);
  let count = 0;
  items.forEach((item) => {
    const file = path.join(dir, `${item.slug}.svg`);
    fs.writeFileSync(file, titleCardSvg(item, section), "utf8");
    count += 1;
  });
  return count;
}

function main() {
  const siteContent = loadBrowserData();
  const notes = siteContent.notes && Array.isArray(siteContent.notes.items) ? siteContent.notes.items : [];
  const datasets = siteContent.datasets && Array.isArray(siteContent.datasets.items) ? siteContent.datasets.items : [];

  const datasetCount = writeCards(datasets, "datasets");
  const noteCount = writeCards(notes, "notes");

  console.log(`Dataset title cards written: ${datasetCount}`);
  console.log(`Note title cards written: ${noteCount}`);
}

main();
