// Message + series catalogue. When Payload CMS is wired up these become the
// seed values; for now they mirror the Watch / Series / Message prototypes.

export type Message = {
  id: string;
  title: string;
  speaker: string;
  /** Human-readable date, e.g. "19 January 2026" */
  date: string;
  /** Short date used on cards, e.g. "19 Jan 2026" */
  shortDate: string;
  series: string;
  campus: string;
  thumbnail: string;
  /** Optional specific YouTube video id; falls back to the uploads playlist */
  youtubeId?: string;
};

export type Series = {
  name: string;
  /** Cover-art image */
  cover: string;
  /** Gradient tint laid over the cover art */
  tint: string;
  count: number;
};

export const series: Series[] = [
  { name: "21 Days of Prayer", cover: "/assets/img-pastor-preaching.jpg", tint: "rgba(46,107,230,.45)", count: 8 },
  { name: "All Things New", cover: "/assets/img-worship-band.jpg", tint: "rgba(231,76,60,.4)", count: 5 },
  { name: "No One Like You", cover: "/assets/img-worship-vocalist.jpg", tint: "rgba(20,33,63,.4)", count: 6 },
  { name: "So Much Power", cover: "/assets/img-dreamteam.jpg", tint: "rgba(124,58,200,.45)", count: 4 },
  { name: "Built Together", cover: "/assets/img-crowd-spotlights.jpg", tint: "rgba(20,90,120,.45)", count: 7 },
  { name: "God Will See You Through", cover: "/assets/img-congregation-wide.jpg", tint: "rgba(46,107,230,.4)", count: 5 },
];

export const messages: Message[] = [
  {
    id: "god-will-see-you-through",
    title: "God Will See You Through",
    speaker: "Apostle Theo Wolmarans",
    date: "19 January 2026",
    shortDate: "19 Jan 2026",
    series: "21 Days of Prayer",
    campus: "CFC Johannesburg",
    thumbnail: "/assets/img-pastor-preaching.jpg",
  },
  {
    id: "the-power-of-prayer",
    title: "The Power of Prayer",
    speaker: "Dr Beverley Wolmarans",
    date: "12 January 2026",
    shortDate: "12 Jan 2026",
    series: "21 Days of Prayer",
    campus: "CFC South",
    thumbnail: "/assets/img-worship-band.jpg",
  },
  {
    id: "when-you-dont-give-up",
    title: "When You Don’t Give Up",
    speaker: "Ps. Garth Byleveld",
    date: "10 January 2026",
    shortDate: "10 Jan 2026",
    series: "21 Days of Prayer",
    campus: "CFC Johannesburg",
    thumbnail: "/assets/img-crowd-spotlights.jpg",
  },
  {
    id: "faith-over-fear",
    title: "Faith Over Fear",
    speaker: "Apostle Theo Wolmarans",
    date: "08 January 2026",
    shortDate: "08 Jan 2026",
    series: "21 Days of Prayer",
    campus: "CFC South",
    thumbnail: "/assets/img-congregation-wide.jpg",
  },
  {
    id: "a-heart-that-worships",
    title: "A Heart That Worships",
    speaker: "Dr Beverley Wolmarans",
    date: "12 January 2026",
    shortDate: "12 Jan 2026",
    series: "No One Like You",
    campus: "CFC South",
    thumbnail: "/assets/img-worship-vocalist.jpg",
  },
  {
    id: "made-for-more",
    title: "Made for More",
    speaker: "Ps. Garth Byleveld",
    date: "05 January 2026",
    shortDate: "05 Jan 2026",
    series: "So Much Power",
    campus: "CFC Johannesburg",
    thumbnail: "/assets/img-host-welcome.jpg",
  },
  {
    id: "the-power-of-his-name",
    title: "The Power of His Name",
    speaker: "Apostle Theo Wolmarans",
    date: "29 December 2025",
    shortDate: "29 Dec 2025",
    series: "So Much Power",
    campus: "CFC South",
    thumbnail: "/assets/img-dreamteam.jpg",
  },
  {
    id: "together-we-build",
    title: "Together We Build",
    speaker: "Ps. Garth Byleveld",
    date: "22 December 2025",
    shortDate: "22 Dec 2025",
    series: "Built Together",
    campus: "CFC Johannesburg",
    thumbnail: "/assets/img-crowd-spotlights.jpg",
  },
  {
    id: "all-things-new",
    title: "All Things New",
    speaker: "Apostle Theo Wolmarans",
    date: "15 December 2025",
    shortDate: "15 Dec 2025",
    series: "All Things New",
    campus: "CFC South",
    thumbnail: "/assets/img-worship-band.jpg",
  },
];

export function getMessage(id: string): Message | undefined {
  return messages.find((m) => m.id === id);
}
