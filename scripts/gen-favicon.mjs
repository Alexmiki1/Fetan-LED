import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const png = readFileSync(join(root, "public", "iconnn.png"));
const b64 = png.toString("base64");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="8" fill="#000000"/>
  <image
    href="data:image/png;base64,${b64}"
    x="4" y="4" width="56" height="56"
    preserveAspectRatio="xMidYMid meet"
  />
</svg>`;

writeFileSync(join(root, "public", "favicon.svg"), svg);
console.log("favicon.svg written successfully");
