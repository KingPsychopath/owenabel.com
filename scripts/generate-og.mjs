import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const defaultCard = {
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

const caseCard = ({ slug, name, area, document, issued, method, rows }) => ({
  slug,
  name,
  role: `${area} / Case study`,
  email: `owenabel.com/work/${slug}`,
  document,
  issued,
  method,
  site: "owenabel.com",
  status: "Case study",
  rows,
});

const cards = [
  defaultCard,
  caseCard({
    slug: "fete-finder-discovery",
    name: "Fete Finder",
    area: "Discovery",
    document: "CASE-FF-DISC",
    issued: "2025-26",
    method: "Search, maps, stable routes",
    rows: [
      ["01", "Discovery surface", "Narrow by date, place, and taste"],
      ["02", "City context", "Use maps without blocking browsing"],
      ["03", "Shareable events", "Keep edited event links stable"],
    ],
  }),
  caseCard({
    slug: "fete-finder-operations",
    name: "Fete Finder",
    area: "Operations",
    document: "CASE-FF-OPS",
    issued: "2025-26",
    method: "Operate, recover, report",
    rows: [
      ["01", "Runtime data", "Back up and recover live records"],
      ["02", "Admin workflow", "Make launch work explicit"],
      ["03", "Partner signal", "Track placements without harming discovery"],
    ],
  }),
  caseCard({
    slug: "milk-and-henny-media",
    name: "Milk & Henny",
    area: "Media",
    document: "CASE-MH-MEDIA",
    issued: "2025",
    method: "Store, process, publish",
    rows: [
      ["01", "Storage model", "Separate content by lifecycle"],
      ["02", "Image pipeline", "Create fast previews and useful crops"],
      ["03", "Publishing surface", "Unify public, unlisted, and private work"],
    ],
  }),
  caseCard({
    slug: "milk-and-henny-operations",
    name: "Milk & Henny",
    area: "Sharing",
    document: "CASE-MH-OPS",
    issued: "2025",
    method: "Share, control, recover",
    rows: [
      ["01", "Event operations", "Support entry, voting, and photos"],
      ["02", "Photo sharing", "Deliver large media from owned storage"],
      ["03", "Operational control", "Keep private tools cheap and recoverable"],
    ],
  }),
  caseCard({
    slug: "open-policy-finder",
    name: "Open Policy Finder",
    area: "Search & data",
    document: "CASE-OPF",
    issued: "2023-26",
    method: "Find, explain, verify",
    rows: [
      ["01", "Search surface", "Make policy data findable"],
      ["02", "Documentation", "Connect source content and publishing"],
      ["03", "Data quality", "Remove missing and incorrect records"],
    ],
  }),
  caseCard({
    slug: "receipts-discovery",
    name: "Receipts",
    area: "Discovery",
    document: "CASE-RCPT-DISC",
    issued: "2026",
    method: "Evidence before claims",
    rows: [
      ["01", "Evidence model", "Explain why a provider appears"],
      ["02", "Taxonomy policy", "Keep visual inference within limits"],
      ["03", "Ranking", "Make trust part of result order"],
    ],
  }),
  caseCard({
    slug: "receipts-platform",
    name: "Receipts",
    area: "Platform",
    document: "CASE-RCPT-PLAT",
    issued: "2026",
    method: "Separate, queue, observe",
    rows: [
      ["01", "Platform boundaries", "Keep domain logic out of delivery code"],
      ["02", "Async work", "Move heavy processing into workers"],
      ["03", "Operational control", "Make failure inspectable and reversible"],
    ],
  }),
];

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

await mkdir(new URL("../public/og/", import.meta.url), { recursive: true });

await Promise.all(
  cards.map(async ({ slug, ...card }) => {
    const output = slug
      ? {
          svg: new URL(`../public/og/${slug}.svg`, import.meta.url),
          png: new URL(`../public/og/${slug}.png`, import.meta.url),
        }
      : {
          svg: new URL("../public/og.svg", import.meta.url),
          png: new URL("../public/og.png", import.meta.url),
        };
    const svg = createLedgerOgSvg(card);

    await writeFile(output.svg, svg);
    await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(output.png));

    console.log(`Generated ${output.svg.pathname}`);
    console.log(`Generated ${output.png.pathname}`);
  }),
);
