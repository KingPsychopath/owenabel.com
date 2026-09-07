# Portfolio content review — 7 September 2026

The strongest direction is a portfolio about solving problems for people: finding a night out,
understanding a publishing policy, choosing a beauty provider, and taking part in an event.
Keep the ledger design and the humour. Make the writing more specific and more recognisably yours.

This review covers all eleven pages, shared copy, work data, social-card source, and the downloadable
CV's text. Milk & Henny recommendations also draw on its current local implementation and product
documents. This is an editorial review, not a production audit or verification of historical metrics.

## Implemented follow-up

The site recommendations were applied on 7 September 2026. The CV is explicitly excluded and remains
unchanged. The original review below is retained as the rationale, rather than an outstanding task list.

- Featured order: Fête Finder, Milk & Henny, Open Policy Finder at Jisc; Receipts follows on the work page.
- Milk & Henny now has events, games, and media case studies. The existing media and operations URLs remain.
- All case studies use shorter sections while retaining area toggles, highlighting, and keyboard navigation.
- Source-checked figures now use the June 2026 Fête Finder recap: 54,295 page views and 10,270 outbound clicks.
  This does not establish whether the previous visitor/registration claim described a different campaign.
- Open Policy Finder describes the data-quality work without the undefined percentage.
- Receipts is labelled in development, with its current Go/ConnectRPC/Postgres architecture retained.
- Contact, work labels, metadata, related links, and social cards have been updated.

Follow-up evidence: `../oooc-fete-finder/data/recap-2026.json` records the period and 3 July backup source.
In `../../work/receipts`, reviewed `backend/internal/media/upload/finalize.go`,
`backend/internal/jobs/queue/worker_process.go`, `backend/internal/db/queries/queues.sql`,
`backend/internal/media/assets/protobuf_projection.go`, and `backend/internal/search/projection/pb.go`.
These support the job lifecycle, private processing states, and distinct search explanations.
No attendance, revenue, or successful playtest outcome was inferred from implementation.

## Original opening change

The homepage now opens:

> I'm an engineer. That means I solve problems. What kind of problems?

The existing table answers with product systems, data work, and reliability, using concrete
descriptions. The work introduction becomes:

> A few problems I've worked on, and the systems I built to solve them.

London and the software-engineering role remain in the site header. The default social card uses
the revised table descriptions. Everything below is a recommendation or draft, not an applied rewrite.

## Project order

Recommend **Fête Finder → Milk & Henny → Jisc → Receipts** for the full work index, with the first
three featured on the homepage. This presents audience scale, personal initiative and hosting, and
professional team experience before the deeper Receipts architecture story. For an explicitly
backend-focused application, Receipts could move up.

The current `getFeaturedWork()` takes the first three entries in `src/data/work.ts`, so Milk & Henny
is excluded. When changing the order, make its leading case study the events story rather than media.
No new filtering or data abstraction is necessary for four projects.

## Milk & Henny: the largest change

“A personal archive” now undersells the work. Your account of hosting provides the personal context;
the repository supports a much broader product: events, tickets, attendee operations, scoring,
multiplayer games, a Pitch Night studio, galleries, writing, and private transfers.

Suggested project description:

> A platform I build around the events I host: tickets, games, and photos, with tools for the people
> running the night and the people coming along.

Suggested homepage description:

> Software for the events I host, from tickets and check-in to party games and the photos afterwards.

Suggested overview introduction:

> Milk & Henny started with a familiar request after a party: can you send me the photos? As I began
> hosting events, the problems grew with them. How do people get in? How do you get a room playing
> together? Where does everything live afterwards? I build the software around those moments.

Use **2025–26** for the project period. Describe the role as “Builder & host” if that is the title you
want to use publicly. Avoid inventing attendance, repeat participation, revenue, or adoption figures.

### Recommended three case studies

1. **Running the night** — rewrite the existing operations page, retaining its URL. Follow the guest
   journey through tickets, arrival, participation, and follow-up. Show the host/staff side alongside
   it. Choose two concrete engineering decisions and explain their practical consequences. Treat the
   old guest-list and best-dressed implementation as project history, not the current operating model.
2. **Games that bring the room together** — add one new case study. Focus on the split between the
   shared screen, host controls, and player phones; pacing, corrections, and reconnecting; and keeping
   match results separate from event points. Use one game, such as Family Feud, as the worked example.
   The catalogue alone is not evidence that every game has been used successfully at an event.
3. **Keeping the memories** — retain the media URL, update its architecture, and move private transfers
   here. Tell the original photography story once. Explain previews, originals, publishing, and access
   through what the recipient or photographer needs to do.

Pitch Night has enough substance for a later fourth case study: local editing, publishing a stable
edition, and presenting from a phone. For now, give it a short example/link in the events story.
Three focused stories are easier to navigate than four overlapping feature inventories.

### Confirmed technical drift

| Existing portfolio wording                                           | Current evidence                                                                                                                                                                             | Editorial correction                                                                                    |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Albums use JSON manifests in Git                                     | `features/media/album-repository.server.ts` reads and writes private object-storage manifests under `albums/_manifests/`                                                                     | Describe the current object-storage model; use Git only when explicitly discussing the earlier version. |
| Words metadata lives in KV                                           | `features/words/store.server.ts` uses Redis indexes and per-word metadata records                                                                                                            | Name Redis when the storage distinction matters.                                                        |
| Event tooling centres on guest-list check-in and best-dressed voting | The current events platform spans tickets, attendee access, admission, communications, scoring, and games; the guest-list postmortem explicitly identifies the old implementation as retired | Rewrite the operations narrative rather than appending another paragraph.                               |
| CV describes a Next.js content platform                              | Current repository describes and implements TanStack Start/Nitro, with events and multiplayer                                                                                                | Update the CV project summary and framework description together.                                       |

Source paths above are relative to `../milkandhenny.com`. Additional reviewed references:
`features/event-operations/event-page.server.ts`, `features/things/catalog.ts`,
`features/things/family-feud/family-feud-room-engine.server.ts`, `docs/events-platform.md`,
`docs/room-first-multiplayer.md`, `docs/pitch-night-platform.md`, and
`docs/postmortem-guestlist-kv-read-spike.md`.

The room-first standard is especially useful editorially: software should help people play with one
another. It explicitly distinguishes design intent from observed fun. Do the same in the case study.

## Copy across the rest of the site

| Surface                      | Recommendation                                                                                                                                                                                                                                                          |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Work page                    | Replace “Selected systems, kept deliberately brief.” with “Some problems I've worked on.” Replace “product sense meets technical ambiguity” with a concrete description of your contribution.                                                                           |
| Work detail labels           | Prefer “Problem”, “My contribution”, and “Result” to “Tension”, “Owned”, and “Signal”. If there is no observed result, label the passage “What it enables”.                                                                                                             |
| Fête Finder discovery        | Keep the finding/planning/sharing story. Shorten the opening to “I built search, maps, and saved routes to help people turn a city-wide programme into a night out.” Put launch figures in their own sentence with the campaign year.                                   |
| Fête Finder operations       | Replace repeated “calm” language with the actual pressures: changing listings, submissions, partner schedules, and recovery. Include one concrete example of an edit or recovery path.                                                                                  |
| Jisc / Open Policy Finder    | Start with the user's task: finding the journal or publisher policy relevant to their research. Replace “massaging records” with “correcting missing and malformed records”. Explain what the content editor could do instead of saying “patched in connection blocks”. |
| Jisc's second workstream     | The CMS/AWS migration deserves a short, clearly scoped account in the Jisc entry. A separate case study needs a rollout decision and result; another technology list would add little. Preserve the distinction between your work and the team's work.                  |
| Receipts discovery           | Replace “empty ranking theatre” with “A beauty discovery platform that helps people judge providers using reviews, images, and the source of each claim.” Introduce the consumer problem before taxonomy and ranking terminology.                                       |
| Receipts platform            | Lead with a failure someone can understand: an upload succeeds but analysis fails, so the work needs visible status and a recovery path. Confirm that example against the current project before using it as a factual before/after.                                    |
| Contact                      | Replace “A small door, deliberately left open.” with “Got a problem in mind?” Keep the informal invitation; it suits the new opening.                                                                                                                                   |
| Footer                       | “Available for software engineering work” is clearer than “thoughtful engineering work”, if availability is current. The tiny joke can stay; humour is not the problem with the site.                                                                                   |
| 404                          | Keep “This page is not in the ledger.” One metaphor is enough; simplify the following explanation to “Check the address, or head back to the work.”                                                                                                                     |
| Shared case-study navigation | Use “case studies” consistently instead of alternating with “notes”. Make keyboard guidance secondary to reading.                                                                                                                                                       |
| Metadata and social cards    | Revise the default “clearer, calmer” description alongside the next broader rewrite. Keep titles, project years, and social cards aligned. “Issued: May 2026” can remain an original issue date; use “Updated” if it is meant to indicate freshness.                    |

## Structure: edit before refactoring

The repeated sections currently make different projects sound alike. Keep the visual system, but
let each page have a shorter narrative: **problem → my contribution → decisions → result → lesson**.
Use the technical table where it adds information. Avoid explaining the same responsibility in the
intro, thread selector, ownership table, flow list, and reflection.

The section labels are supplied in each page; changing the layout alone will not rewrite them.
Do not add a generic content engine just to remove repeated Astro markup. First establish one strong
Milk & Henny page, then apply only the shared structure that proves useful.

Add one purposeful visual per major story when suitable material exists: a guest/host journey, a
game's display beside its controller, or an annotated search result. Use actual product screenshots
or a labelled diagram; do not manufacture event photographs or evidence of use.

## Data and CV checks before the broader rewrite

- **Fête Finder: 3,000+ registrations / 50,000+ unique visitors.** These are consistent between the
  site and CV, but those are two copies of the same claim. Add the campaign period and retain the
  analytics source privately. Do not imply every current feature existed at that launch.
- **Open Policy Finder: roughly 70% to zero.** The case study repeats this without identifying the
  denominator, checks, or sample. Define those, or use “Worked with the data team to identify and
  correct missing and malformed records before launch.” Zero observed failures in a defined check
  is different from a completely error-free dataset.
- **Receipts architecture.** The case study says Go/ConnectRPC and Postgres queues; the CV describes
  BullMQ/Redis workers and Better Auth. This may be version drift, not an error in the website. Check
  the current Receipts repository before choosing which description to update.
- **CV wording.** Milk & Henny needs the events/games update. Clarify the Hypixel/Dungeon Realms
  “>60% user satisfaction across 100,000+ concurrent players” claim: survey satisfaction, platform
  audience, and personal contribution need separate scope. Remove the duplicate separator in the
  frameworks line. Keep “First Class”; retain “4.0 GPA” only if it is an official or clearly labelled
  conversion. The CV and site's email addresses differ, which is fine if intentional.
- **Employment dates.** The Jisc year range is compatible with the CV's April 2023–February 2026.
  Do not turn it into a present-tense employment claim. Confirm current availability independently.
- **Milk & Henny outcomes.** The most useful missing material is one actual night: event/date,
  attendance if recorded, which tools were used, one problem encountered, and what changed for the
  next event. This would make the story stronger than adding more framework names.

No historical number, employment claim, or event outcome was silently changed in this pass.
