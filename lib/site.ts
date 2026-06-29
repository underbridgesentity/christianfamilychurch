// Central site configuration. When Payload CMS is wired up, these become
// the seed values / globals. Keeping them here keeps content out of components.

export const site = {
  name: "Christian Family Church",
  shortName: "CFC",
  tagline: "Living Life Together",
  purpose: "Know God. Find Freedom. Discover Purpose. Make a Difference.",
  serviceTimes: "Sundays 08:30 & 10:30 AM",
  phone: "011 230 9300",
  email: "info@cfcsa.co.za",
  youtube: {
    channel: "https://www.youtube.com/@CFCIJohannesburg",
    live: "https://www.youtube.com/@CFCIJohannesburg/live",
    uploadsPlaylist: "UUfwesgT53QzX3rK7me6w_yg",
  },
  social: {
    facebook: "https://www.facebook.com/CFCIJohannesburg",
    instagram: "https://www.instagram.com/cfcijohannesburg",
    youtube: "https://www.youtube.com/@CFCIJohannesburg",
  },
  copyrightYear: 2026,
} as const;
