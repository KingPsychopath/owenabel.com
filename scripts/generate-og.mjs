import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const output = {
  svg: new URL("../public/og.svg", import.meta.url),
  png: new URL("../public/og.png", import.meta.url),
};

const card = {
  name: "Owen Abel Amenze",
  role: "Software Engineer / London",
  email: "work@owenabel.com",
  document: "INDEX-ABEL",
  issued: "May 2026",
  method: "Clarify, build, verify",
  site: "owenabel.com",
  status: "Present",
  rows: [
    ["01", "Product systems", "Make the path through a problem visible"],
    ["02", "Data work", "Turn uncertain records into useful decisions"],
    ["03", "Reliability", "Leave the system easier to trust after launch"],
  ],
};

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const createLedgerOgSvg = ({
  name,
  role,
  email,
  document,
  issued,
  method,
  site,
  status,
  rows,
}) => {
  const rowMarkup = rows
    .map(
      ([no, area, use], index) => `
    <text x="92" y="${344 + index * 46}" font-size="20">${escapeXml(no)}</text>
    <text x="158" y="${344 + index * 46}" font-size="20">${escapeXml(area)}</text>
    <text x="458" y="${344 + index * 46}" font-size="20">${escapeXml(use)}</text>`,
    )
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#efefec" />
  <g fill="#111111" font-family="Courier New, Courier, monospace">
    <text x="78" y="92" font-size="22">${escapeXml(name)}</text>
    <text x="78" y="124" font-size="22">${escapeXml(role)}</text>
    <text x="78" y="156" font-size="22">${escapeXml(email)}</text>

    <g font-size="22">
      <rect x="748" y="70" width="374" height="86" fill="none" stroke="#111111" stroke-width="1" />
      <text x="764" y="104">Document:      ${escapeXml(document)}</text>
      <text x="764" y="134">Issued:        ${escapeXml(issued)}</text>
    </g>

    <text x="78" y="230" font-size="18">Current Practice</text>
    <line x1="78" y1="262" x2="1122" y2="262" stroke="#111111" stroke-width="1" />
    <text x="92" y="292" font-size="20">#</text>
    <text x="158" y="292" font-size="20">Area</text>
    <text x="458" y="292" font-size="20">Use</text>
    <line x1="78" y1="310" x2="1122" y2="310" stroke="#111111" stroke-width="1" />
${rowMarkup}

    <line x1="78" y1="478" x2="1122" y2="478" stroke="#111111" stroke-width="1" />
    <line x1="78" y1="482" x2="1122" y2="482" stroke="#111111" stroke-width="1" />

    <text x="78" y="536" font-size="22">Method: ${escapeXml(method)}</text>
    <text x="78" y="574" font-size="18">${escapeXml(site)}</text>
    <text x="960" y="574" font-size="18">Status: ${escapeXml(status)}</text>
  </g>
</svg>
`;
};

const svg = createLedgerOgSvg(card);

await writeFile(output.svg, svg);
await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(output.png));

console.log(`Generated ${output.svg.pathname}`);
console.log(`Generated ${output.png.pathname}`);
