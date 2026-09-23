import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const defaultCard = {
  name: "Owen Abel Amenze",
  role: "Senior Software Engineer / London",
  email: "work@owenabel.com",
  document: "INDEX-ABEL",
  issued: "May 2026",
  site: "owenabel.com",
  status: "Present",
  sectionLabel: "Current practice",
  rows: [
    ["01", "Product systems", "Help people find what they came for"],
    ["02", "Data work", "Make messy records useful"],
    ["03", "Reliability", "Keep things working when people depend on them"],
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
  sectionLabel: "Case study",
  rows,
});

const cards = [
  defaultCard,
  caseCard({
    slug: "fete-finder-discovery",
    name: "Fête Finder",
    area: "Discovery",
    document: "CASE-FF-DISC",
    issued: "2025–26",
    method: "Search, maps, stable routes",
    rows: [
      ["01", "Discovery surface", "Narrow by date, place, and taste"],
      ["02", "City context", "Use maps without blocking browsing"],
      ["03", "Shareable events", "Keep edited event links stable"],
    ],
  }),
  caseCard({
    slug: "fete-finder-operations",
    name: "Fête Finder",
    area: "Operations",
    document: "CASE-FF-OPS",
    issued: "2025–26",
    method: "Operate, recover, report",
    rows: [
      ["01", "Runtime data", "Back up and recover live records"],
      ["02", "Admin workflow", "Make launch work explicit"],
      ["03", "Partner reporting", "Record placement engagement"],
    ],
  }),
  caseCard({
    slug: "milk-and-henny-operations",
    name: "Milk & Henny",
    area: "Running the night",
    document: "CASE-MH-OPS",
    issued: "2025–26",
    method: "Arrive, join in, return",
    rows: [
      ["01", "Getting in", "Connect tickets and door check-in"],
      ["02", "Joining in", "Bring games into the event"],
      ["03", "Following up", "Keep information and memories together"],
    ],
  }),
  caseCard({
    slug: "milk-and-henny-games",
    name: "Milk & Henny",
    area: "Games for the room",
    document: "CASE-MH-GAMES",
    issued: "2025–26",
    method: "Play, reveal, reconnect",
    rows: [
      ["01", "Shared display", "Give the room a common focal point"],
      ["02", "Host controls", "Leave pacing and rulings with the host"],
      ["03", "Room state", "Keep recovery and results in the design"],
    ],
  }),
  caseCard({
    slug: "milk-and-henny-media",
    name: "Milk & Henny",
    area: "Keeping the memories",
    document: "CASE-MH-MEDIA",
    issued: "2025–26",
    method: "Process, publish, share",
    rows: [
      ["01", "Photo albums", "Prepare previews before publishing"],
      ["02", "Private transfers", "Give shared files their own lifetime"],
      ["03", "Writing", "Keep the stories around the photos"],
    ],
  }),
  caseCard({
    slug: "open-policy-finder",
    name: "Open Policy Finder",
    area: "Search & data",
    document: "CASE-OPF",
    issued: "2024–26",
    method: "Find, explain, verify",
    rows: [
      ["01", "Search surface", "Make policy data findable"],
      ["02", "Documentation", "Connect source content and publishing"],
      ["03", "Data quality", "Surface source gaps to data stewards"],
    ],
  }),
  caseCard({
    slug: "jisc-website",
    name: "Jisc website",
    area: "Infrastructure & publishing",
    document: "CASE-JISC-WEB",
    issued: "2024–26",
    method: "Stabilise, preview, release",
    rows: [
      ["01", "Infrastructure", "Move the main site to Fargate"],
      ["02", "Publishing", "Maintain Wagtail and Next.js"],
      ["03", "Delivery", "Preview and validate changes"],
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
      ["02", "Visual search", "Use an image to express a desired look"],
      ["03", "Ranking", "Label the source behind a match"],
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
      ["03", "Publication", "Keep incomplete media private"],
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
  sectionLabel,
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

    <text x="78" y="230" font-size="18">${escapeXml(sectionLabel)}</text>
    <line x1="78" y1="262" x2="1122" y2="262" stroke="#111111" stroke-width="1" />
    <text x="92" y="292" font-size="20">#</text>
    <text x="158" y="292" font-size="20">Area</text>
    <text x="458" y="292" font-size="20">Use</text>
    <line x1="78" y1="310" x2="1122" y2="310" stroke="#111111" stroke-width="1" />
${rowMarkup}

    <line x1="78" y1="478" x2="1122" y2="478" stroke="#111111" stroke-width="1" />
    <line x1="78" y1="482" x2="1122" y2="482" stroke="#111111" stroke-width="1" />

${method ? `    <text x="78" y="536" font-size="22">Method: ${escapeXml(method)}</text>` : ""}
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
