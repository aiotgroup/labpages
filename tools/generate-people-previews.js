const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const projectRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(projectRoot, "assets", "media", "people");
const outputDir = path.join(sourceDir, "optimized");
const maxDimension = "900";
const jpegQuality = "82";
const sourcePattern = /\.(jpe?g|png)$/i;

function ensureSips() {
  const result = spawnSync("sips", ["--version"], { encoding: "utf8" });
  if (result.error) {
    console.error("Unable to find the macOS `sips` image tool.");
    process.exit(1);
  }
}

function isStale(sourcePath, outputPath) {
  if (!fs.existsSync(outputPath)) {
    return true;
  }
  const source = fs.statSync(sourcePath);
  const output = fs.statSync(outputPath);
  return source.mtimeMs > output.mtimeMs;
}

function createPreview(sourcePath, outputPath) {
  const result = spawnSync(
    "sips",
    [
      "-s",
      "format",
      "jpeg",
      "-s",
      "formatOptions",
      jpegQuality,
      "-Z",
      maxDimension,
      sourcePath,
      "--out",
      outputPath
    ],
    { encoding: "utf8" }
  );

  if (result.status !== 0) {
    const message = result.stderr || result.stdout || "Unknown image conversion error.";
    throw new Error(message.trim());
  }
}

ensureSips();
fs.mkdirSync(outputDir, { recursive: true });

const sources = fs
  .readdirSync(sourceDir)
  .filter((fileName) => sourcePattern.test(fileName))
  .sort();

let created = 0;
let skipped = 0;

for (const fileName of sources) {
  const sourcePath = path.join(sourceDir, fileName);
  const outputPath = path.join(outputDir, `${path.parse(fileName).name}.jpg`);

  if (!isStale(sourcePath, outputPath)) {
    skipped += 1;
    continue;
  }

  createPreview(sourcePath, outputPath);
  created += 1;
}

console.log(
  `People previews ready: ${created} generated, ${skipped} already current, ${sources.length} total.`
);
