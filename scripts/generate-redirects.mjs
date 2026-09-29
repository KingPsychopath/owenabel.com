import { readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../dist/", import.meta.url));
const files = await readdir(outputDirectory, { recursive: true });
const routes = files
  .filter((file) => file.endsWith(".html") && file !== "index.html" && file !== "404.html")
  .map((file) => `/${file.replaceAll("\\", "/").replace(/\.html$/, "")}`)
  .sort();

const redirects = routes.flatMap((route) => [
  `${route}/ ${route} 301`,
  `${route}/index.html ${route} 301`,
]);

await writeFile(
  new URL("../dist/_redirects", import.meta.url),
  `# Generated from built pages; keep legacy directory URLs working.\n${redirects.join("\n")}\n`,
);
console.log(`Generated canonical URL redirects for ${routes.length} pages.`);
