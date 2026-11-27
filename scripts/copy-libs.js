// Copies browser builds of the libraries into www/lib so the app works fully offline.
const fs = require("fs"), path = require("path");
const map = {
  "node_modules/xlsx/dist/xlsx.full.min.js": "www/lib/xlsx.full.min.js",
  "node_modules/html2canvas/dist/html2canvas.min.js": "www/lib/html2canvas.min.js",
  "node_modules/jspdf/dist/jspdf.umd.min.js": "www/lib/jspdf.umd.min.js"
};
for (const [src, dst] of Object.entries(map)) {
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
  console.log("copied", dst);
}
