# Christian Family Church

The website for **Christian Family Church (CFC)** — a multi-campus church across
Johannesburg, South Africa. *Living Life Together. Know God. Find Freedom.
Discover Purpose. Make a Difference.*

Built with **Next.js (App Router) + TypeScript + React**, recreating the design
system from the Claude Design prototypes. Content lives in typed data files under
`lib/` so it is structured and ready to be migrated to a CMS (e.g. Payload).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Design system

- **Type:** Archivo (heavy display) + Hanken Grotesk (body), via `next/font`.
- **Colour:** deep navy structure (`#0B1830` / `#081226`), royal-blue accent
  (`#2E6BE6`), white / light-grey content sections that alternate for rhythm.
- **Components:** image-led overlay cards (Church of the Highlands style), a
  liquid-glass fixed nav with dropdowns, pill CTAs, scroll-reveal sections, and a
  silent looping hero video.
- Tokens and reusable hover/reveal/grid classes live in `app/globals.css`.

## Project structure

```
app/                 # routes (App Router)
  page.tsx           # Home
  about/ ...         # Who We Are, Our Story, Leadership, Statement of Faith
  campuses/[slug]    # scalable campus template
  ministries/[slug]  # ministry template
  events/[slug]      # event template
  messages/[id]      # individual message
  watch, connect, small-groups, growth-track, dream-team,
  giving, contact, new, sign-in, register, privacy, terms
components/          # Nav, Footer, ui/* shared primitives
lib/                 # content as typed data (site, campuses, ministries,
                     # leadership, navigation, groups, messages, events, ...)
public/assets        # photography, logo marks, hero video, QR
```

## Campuses & content

Campuses are a first-class concept: add a campus to `lib/campuses.ts` and it
appears on the Campuses listing, the footer, the contact selector, and gets its
own `/campuses/<slug>` page. Ministries, events and messages work the same way.

Current campuses:
- **CFC Johannesburg** — Cnr. Atlas Rd. & Silver Wings Blvd., Parkhaven, Boksburg
- **CFC South** — 21 Heidelberg Rd, Newmarket AH, Alberton, 1449

Services: Sundays 08:30 & 10:30 AM.

## Notes for future work

- Wire `lib/*` data into Payload CMS collections/globals when the backend lands.
- Online giving "Give Now" should initiate the real PayFast checkout.
- Replace representative small-group / event / message data with live feeds
  (Church Center, YouTube Data API for per-video thumbnails).
- Leadership headshots are monogram avatars until real photos are supplied.

---

_The original Claude Design handoff bundle (chat transcripts and HTML prototypes)
is kept under `project/` and `chats/` for reference._
