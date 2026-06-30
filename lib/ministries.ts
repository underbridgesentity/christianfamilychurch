export type Ministry = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  /** Real photo gallery for this ministry (hero + "what we do" cards) */
  gallery?: string[];
  /** External CFC site reference, where one exists */
  sourceUrl?: string;
};

// Helper to build a numbered gallery path list.
const g = (dir: string, prefix: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/assets/ministries/${dir}/${prefix}-${i + 1}.jpg`);

const childrens = g("childrens-world", "childrens", 11);
const youth = g("youth", "youth", 6);
const marriage = g("marriage", "marriage", 8);
const missions = g("missions", "missions", 5);
const significance = g("significance", "significance", 7);

export const ministries: Ministry[] = [
  {
    slug: "childrens-world",
    title: "Children’s World",
    desc: "A safe, fun place where kids learn about Jesus at their level.",
    image: childrens[0],
    gallery: childrens,
    sourceUrl: "https://www.christianfamilychurch.co.za/childrens-world",
  },
  {
    slug: "youth",
    title: "Youth Ministry",
    desc: "A high-energy community where teenagers belong and grow.",
    image: youth[0],
    gallery: youth,
    sourceUrl: "https://www.christianfamilychurch.co.za/youth",
  },
  {
    slug: "marriage",
    title: "Marriage",
    desc: "Building strong, healthy marriages and homes that last.",
    image: marriage[0],
    gallery: marriage,
    sourceUrl: "https://www.christianfamilychurch.co.za/marriage",
  },
  {
    slug: "missions",
    title: "Missions",
    desc: "Taking the love of Jesus across the city and beyond.",
    image: missions[0],
    gallery: missions,
    sourceUrl: "https://www.christianfamilychurch.co.za/missions",
  },
  {
    slug: "bible-college",
    title: "Bible College",
    desc: "Train, grow and be equipped for a lifetime of ministry.",
    image: "/assets/img-congregation-screens.jpg",
    sourceUrl: "https://www.christianfamilychurch.co.za/copy-of-welfare",
  },
  {
    slug: "significance",
    title: "Significance",
    desc: "Honouring and connecting our senior generation.",
    image: significance[0],
    gallery: significance,
    sourceUrl: "https://www.christianfamilychurch.co.za/significance",
  },
];

export const getMinistry = (slug: string) => ministries.find((m) => m.slug === slug);
