type RelationText = {
  text: string;
  key?: string;
};

type WorkStream = {
  label: string;
  key: string;
  body: string;
};

export type CaseStudy = {
  label: string;
  href: string;
};

export type WorkItem = {
  year: string;
  name: string;
  featuredName?: string;
  href: string;
  detail: string;
  featuredDetail?: string;
  tension: string | RelationText[];
  owned: string;
  streams?: WorkStream[];
  signal: string | RelationText[];
  links: Array<{
    label: string;
    href: string;
    key?: string;
  }>;
  caseNotes: CaseStudy[];
  role: string;
};

export const work: WorkItem[] = [
  {
    year: "2025-26",
    name: "Fete Finder",
    href: "https://fete.outofofficecollective.co.uk",
    detail:
      "A cultural event discovery platform for Fete de la Musique, built to make a large, scattered programme feel findable.",
    featuredDetail:
      "A cultural event discovery surface shaped around search, maps, share links, and launch traffic.",
    tension:
      "A city-wide programme is only useful if people can move through it by place, time, taste, and confidence.",
    owned:
      "Listings, maps, event pages, partner placements, admin workflows, and launch readiness under real campaign traffic.",
    signal: "Supported 3,000+ registrations and 50,000+ unique visitors during launch.",
    links: [
      {
        label: "fete.outofofficecollective.co.uk",
        href: "https://fete.outofofficecollective.co.uk",
      },
    ],
    caseNotes: [
      {
        label: "Fete Finder: discovery, maps, and share links",
        href: "/work/fete-finder-discovery",
      },
      {
        label: "Fete Finder: admin, data, and launch operations",
        href: "/work/fete-finder-operations",
      },
    ],
    role: "Product",
  },
  {
    year: "2023-26",
    name: "Jisc",
    featuredName: "Open Policy Finder",
    href: "https://www.jisc.ac.uk",
    detail:
      "Work across Open Policy Finder and the Digital Experience Content Management System, where policy data and public publishing both needed steadier systems.",
    featuredDetail:
      "Search, documentation, content systems, indexing, and data quality for open access compliance.",
    tension: [
      {
        text: "Open access compliance depends on policy, journal, and transitional-agreement data being searchable and trustworthy",
        key: "open-policy-finder",
      },
      { text: "; " },
      {
        text: "the main website needed publishing tools and infrastructure that content teams could rely on through change",
        key: "digital-experience",
      },
      { text: "." },
    ],
    owned:
      "Search, content management system delivery, AWS migration work, release validation, and coordination between product, content, infrastructure, and data teams.",
    streams: [
      {
        label: "Open Policy Finder",
        key: "open-policy-finder",
        body: "Built the search and help pages for policy, journal, and transitional-agreement discovery, including documentation for API consumers and internal stakeholders; supported the data pipelines, indexing, and feedback loops that kept open access compliance data usable.",
      },
      {
        label: "Digital Experience Content Management System",
        key: "digital-experience",
        body: "Worked on the main Jisc website platform: content management system delivery, publishing flows, AWS migration support, release readiness, and validation with product and content teams.",
      },
    ],
    signal: [
      {
        text: "Policy and journal records became easier to keep aligned with the search experience",
        key: "open-policy-finder",
      },
      { text: ", while " },
      {
        text: "website releases gained a clearer path from content change to production",
        key: "digital-experience",
      },
      { text: "." },
    ],
    links: [
      {
        label: "openpolicyfinder.jisc.ac.uk",
        href: "https://openpolicyfinder.jisc.ac.uk",
        key: "open-policy-finder",
      },
      { label: "jisc.ac.uk", href: "https://www.jisc.ac.uk", key: "digital-experience" },
    ],
    caseNotes: [
      {
        label: "Open Policy Finder: search, documentation, and data quality",
        href: "/work/open-policy-finder",
      },
    ],
    role: "Senior",
  },
  {
    year: "2026",
    name: "Receipts",
    href: "https://receipts.beauty",
    detail:
      "A trust-first beauty discovery platform designed around evidence, not empty ranking theatre.",
    featuredDetail:
      "Beauty discovery designed around evidence, traceability, ranking, and operational confidence.",
    tension:
      "Beauty discovery often asks people to trust opaque recommendations; the product needed to show its working.",
    owned:
      "Product architecture, authentication, typed contracts, ranking logic, async work, and operational visibility.",
    signal: "Trust becomes part of the interface rather than a claim made after the fact.",
    links: [{ label: "receipts.beauty", href: "https://receipts.beauty" }],
    caseNotes: [
      {
        label: "Receipts: evidence-backed discovery and ranking",
        href: "/work/receipts-discovery",
      },
      {
        label: "Receipts: platform boundaries, jobs, and operations",
        href: "/work/receipts-platform",
      },
    ],
    role: "Founder",
  },
  {
    year: "2025",
    name: "Milk & Henny",
    href: "https://milkandhenny.com",
    detail:
      "A personal archive for writing, travel, parties, and the photos I take on digital and film cameras.",
    tension:
      "Meeting people, taking hundreds of photos, and sharing them afterwards should not turn into expensive storage, repeated DMs, or disposable transfer links.",
    owned:
      "R2-backed galleries, optimized previews, HD downloads, filtering and sorting, private transfers, words publishing, guest-list tooling, and admin workflows.",
    signal:
      "Turned a recurring personal problem into a durable place to publish, browse, filter, and download large photo sets cheaply.",
    links: [{ label: "milkandhenny.com", href: "https://milkandhenny.com" }],
    caseNotes: [
      {
        label: "Milk & Henny: media publishing and image pipeline",
        href: "/work/milk-and-henny-media",
      },
      {
        label: "Milk & Henny: photo sharing, transfers, and event tools",
        href: "/work/milk-and-henny-operations",
      },
    ],
    role: "Full stack",
  },
];

export const getCaseNotes = (item: WorkItem) => item.caseNotes;

export const getFeaturedWork = () =>
  work.slice(0, 3).map((item) => ({
    year: item.year,
    name: item.featuredName ?? item.name,
    href: item.caseNotes[0]?.href ?? item.href,
    detail: item.featuredDetail ?? item.detail,
    role: item.role,
  }));

export const getRelatedCaseStudies = (href: string) => {
  const parent = work.find((item) => item.caseNotes.some((caseNote) => caseNote.href === href));

  return parent?.caseNotes.filter((caseNote) => caseNote.href !== href) ?? [];
};
