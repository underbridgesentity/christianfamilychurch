// Single source of truth for nav + footer structure and active-key matching.

export type NavLink = { label: string; href: string; live?: boolean };
export type NavItem = { label: string; href: string; key: string; children?: NavLink[] };

export const primaryNav: NavItem[] = [
  { label: "New to CFC", href: "/new", key: "new" },
  {
    label: "About",
    href: "/about",
    key: "about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Statement of Faith", href: "/about/statement-of-faith" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  { label: "Campuses", href: "/campuses", key: "campuses" },
  {
    label: "Next Steps",
    href: "/connect",
    key: "next",
    children: [
      { label: "Get Connected", href: "/connect" },
      { label: "Growth Track", href: "/growth-track" },
      { label: "Small Groups", href: "/small-groups" },
      { label: "Dream Team", href: "/dream-team" },
      { label: "Ministries", href: "/ministries" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    label: "Watch",
    href: "/watch",
    key: "watch",
    children: [
      { label: "Messages", href: "/watch" },
      { label: "Series", href: "/watch/series" },
      { label: "Watch Live", href: "https://www.youtube.com/@CFCIJohannesburg/live", live: true },
    ],
  },
  { label: "Give", href: "/giving", key: "give" },
];

export const mobileNav: NavLink[] = [
  { label: "New to CFC", href: "/new" },
  { label: "About", href: "/about" },
  { label: "Campuses", href: "/campuses" },
  { label: "Get Connected", href: "/connect" },
  { label: "Growth Track", href: "/growth-track" },
  { label: "Small Groups", href: "/small-groups" },
  { label: "Dream Team", href: "/dream-team" },
  { label: "Ministries", href: "/ministries" },
  { label: "Watch", href: "/watch" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  About: [
    { label: "Who We Are", href: "/about" },
    { label: "Our Story", href: "/about/our-story" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Statement of Faith", href: "/about/statement-of-faith" },
    { label: "Contact", href: "/contact" },
  ],
  Connect: [
    { label: "New to CFC", href: "/new" },
    { label: "Get Connected", href: "/connect" },
    { label: "Small Groups", href: "/small-groups" },
    { label: "Growth Track", href: "/growth-track" },
    { label: "Dream Team", href: "/dream-team" },
    { label: "Events", href: "/events" },
  ],
  Watch: [
    { label: "Messages", href: "/watch" },
    { label: "Series", href: "/watch/series" },
    { label: "Watch Live", href: "https://www.youtube.com/@CFCIJohannesburg/live" },
  ],
  Ministries: [
    { label: "Children’s World", href: "/ministries/childrens-world" },
    { label: "Youth Ministry", href: "/ministries/youth" },
    { label: "Young Adults", href: "/ministries/young-adults" },
    { label: "Marriage", href: "/ministries/marriage" },
    { label: "Significance", href: "/ministries/significance" },
    { label: "Missions", href: "/ministries/missions" },
    { label: "All Ministries", href: "/ministries" },
  ],
};
