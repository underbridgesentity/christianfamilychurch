// Campuses are a first-class, scalable concept. Adding a campus here makes it
// appear on the Campuses listing, footer, contact selector and its own page.

export type Campus = {
  slug: string;
  name: string;
  suburb: string;
  times: string;
  address: string;
  addressLines: string[];
  postal?: string;
  phone: string;
  email: string;
  image: string;
  heroImage: string;
  blurb: string;
  mapQuery: string;
  pastor?: { name: string; role: string; welcome: string; image?: string };
};

export const campuses: Campus[] = [
  {
    slug: "johannesburg",
    name: "CFC Johannesburg",
    suburb: "Boksburg",
    times: "Sundays 08:30 & 10:30 AM",
    address: "Cnr. Atlas Rd. & Silver Wings Blvd., Parkhaven, Boksburg",
    addressLines: ["Cnr. Atlas Rd. & Silver Wings Blvd.", "Parkhaven, Boksburg, Gauteng"],
    postal: "P.O. Box 8141, Bonaero Park, 1622",
    phone: "011 230 9300",
    email: "info@cfcsa.co.za",
    image: "/assets/img-congregation-wide.jpg",
    heroImage: "/assets/img-congregation-screens.jpg",
    blurb: "Our home campus on Atlas Road - where the CFC family gathers each Sunday.",
    mapQuery: "Christian Family Church, Atlas Road, Parkhaven, Boksburg",
    pastor: {
      name: "Apostle Theo & Dr Beverley Wolmarans",
      role: "Founding & Senior Pastors",
      welcome: "We can't wait to welcome you to the family this Sunday.",
      image: "/assets/pastors-wolmarans.jpg",
    },
  },
  {
    slug: "south",
    name: "CFC South",
    suburb: "Alberton",
    times: "Sundays 08:30 & 10:30 AM",
    address: "21 Heidelberg Rd, Newmarket AH, Alberton, 1449",
    addressLines: ["21 Heidelberg Rd, Newmarket AH", "Alberton, 1449"],
    phone: "011 230 9300",
    email: "info@cfcsa.co.za",
    image: "/assets/img-crowd-spotlights.jpg",
    heroImage: "/assets/img-crowd-spotlights.jpg",
    blurb: "A growing family reaching the south of Johannesburg.",
    mapQuery: "21 Heidelberg Rd, Newmarket AH, Alberton, 1449",
    pastor: {
      name: "Apostle Theo & Dr Beverley Wolmarans",
      role: "Founding & Senior Pastors",
      welcome: "There's a place for you and your family in the south.",
      image: "/assets/pastors-wolmarans.jpg",
    },
  },
];

export const getCampus = (slug: string) => campuses.find((c) => c.slug === slug);
