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
  signalLabel?: string;
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
    year: "2025–26",
    name: "Fête Finder",
    href: "https://fete.outofofficecollective.co.uk",
    detail:
      "Search, maps, and saved routes that help people turn the Fête de la Musique programme into a night out.",
    featuredDetail:
      "Event discovery and route planning, with 54,295 page views recorded in June 2026.",
    tension:
      "People need to find events by place, time, and taste, then make a plan they can share and return to.",
    owned:
      "Discovery, planning, identity, submissions, ticket exchange, partner operations, data workflows, and the seasonal lifecycle.",
    signalLabel: "Recorded activity",
    signal: "The June 2026 recap records 54,295 page views and 10,270 outbound clicks.",
    links: [
      {
        label: "fete.outofofficecollective.co.uk",
        href: "https://fete.outofofficecollective.co.uk",
      },
    ],
    caseNotes: [
      {
        label: "Fête Finder: discovery, planning, and sharing",
        href: "/work/fete-finder-discovery/",
      },
      {
        label: "Fête Finder: data, operations, and lifecycle",
        href: "/work/fete-finder-operations/",
      },
    ],
    role: "Product Engineer",
  },
  {
    year: "2025–26",
    name: "Milk & Henny",
    featuredDetail:
      "An events platform that brings ticketing, multiplayer games, and photo sharing together for organisers and guests.",
    href: "https://milkandhenny.com",
    detail:
      "An events platform for ticketing, check-in, multiplayer games, and photo sharing, with tools for both guests and event staff.",
    tension:
      "Hosting means thinking about the whole night: how people get in, what brings them together, and how they find the photos afterwards.",
    owned:
      "Event pages, ticketing and check-in, attendee tools, multiplayer games, event scoring, Pitch Night, galleries, writing, and private transfers.",
    signal:
      "Guests can find event information and photos in one place; hosts have tools for admission, participation, and follow-up.",
    links: [{ label: "milkandhenny.com", href: "https://milkandhenny.com" }],
    caseNotes: [
      { label: "Milk & Henny: running the night", href: "/work/milk-and-henny-operations/" },
      {
        label: "Milk & Henny: games that bring the room together",
        href: "/work/milk-and-henny-games/",
      },
      { label: "Milk & Henny: keeping the memories", href: "/work/milk-and-henny-media/" },
    ],
    role: "Founder & Host",
  },
  {
    year: "2024–26",
    name: "Jisc",
    featuredName: "Open Policy Finder at Jisc",
    href: "https://www.jisc.ac.uk",
    detail:
      "Search and data quality for Open Policy Finder, alongside publishing tools and AWS migration work for the main Jisc website.",
    featuredDetail:
      "Helping researchers find publishing policies, and content teams keep the guidance up to date.",
    tension: [
      {
        text: "Researchers need to find the policy or agreement relevant to their journal",
        key: "open-policy-finder",
      },
      { text: "; " },
      {
        text: "content teams need to update the main website and check changes before release",
        key: "digital-experience",
      },
      { text: "." },
    ],
    owned:
      "Led Open Policy Finder data and search work; later maintained the main site's publishing system and led its serverless AWS migration with the Digital Experience Team.",
    streams: [
      {
        label: "Open Policy Finder · Sherpa Team",
        key: "open-policy-finder",
        body: "Built search and help pages for policy, journal, and agreement discovery. Led data work with a feedback loop to data stewards. Retired Elasticsearch when PostgreSQL met the product's scale without a separate search synchronisation layer.",
      },
      {
        label: "Jisc website · Digital Experience Team",
        key: "digital-experience",
        body: "Maintained the Wagtail and Next.js publishing system. After scaling and downtime issues, led a move of the main site to serverless AWS ECS Fargate, and helped build Terraform-managed preview environments and release checks.",
      },
    ],
    signal: [
      {
        text: "Search changes and steward feedback connect source data to policy discovery",
        key: "open-policy-finder",
      },
      { text: ", while " },
      {
        text: "preview environments and release checks help the team inspect website changes",
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
        href: "/work/open-policy-finder/",
      },
      {
        label: "Jisc website: infrastructure and publishing",
        href: "/work/jisc-website/",
      },
    ],
    role: "Senior Software Developer",
  },
  {
    year: "2026",
    name: "Receipts",
    href: "https://receipts.beauty",
    detail:
      "A beauty discovery platform helping people judge providers using reviews, images, and the source of each claim.",
    featuredDetail:
      "A beauty discovery platform combining portfolios, reviews, and visual search to help people find a provider.",
    tension:
      "A provider claim, a client review, and a similar-looking image tell people different things. Search needs to make those differences visible.",
    owned:
      "Product architecture, search and evidence semantics, provider and review workflows, media and AI pipelines, generated API contracts, and release operations.",
    signal:
      "Results distinguish provider claims, reviews, and media evidence so people can see the basis for a recommendation.",
    links: [{ label: "receipts.beauty", href: "https://receipts.beauty" }],
    caseNotes: [
      {
        label: "Receipts: evidence, multimodal search, and ranking",
        href: "/work/receipts-discovery/",
      },
      {
        label: "Receipts: Go platform, media jobs, and operations",
        href: "/work/receipts-platform/",
      },
    ],
    role: "Lead Engineer",
  },
];

export const getCaseNotes = (item: WorkItem) => item.caseNotes;

export const getFeaturedWork = () =>
  work.map((item) => ({
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
