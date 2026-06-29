export type Ministry = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  /** External CFC site reference, where one exists */
  sourceUrl?: string;
};

export const ministries: Ministry[] = [
  {
    slug: "childrens-world",
    title: "Children’s World",
    desc: "A safe, fun place where kids learn about Jesus at their level.",
    image: "/assets/img-baby-dedication.jpg",
    sourceUrl: "https://www.christianfamilychurch.co.za/childrens-world",
  },
  {
    slug: "youth",
    title: "Youth Ministry",
    desc: "A high-energy community where teenagers belong and grow.",
    image: "/assets/img-dreamteam.jpg",
    sourceUrl: "https://www.christianfamilychurch.co.za/youth",
  },
  {
    slug: "marriage",
    title: "Marriage",
    desc: "Building strong, healthy marriages and homes that last.",
    image: "/assets/img-host-welcome.jpg",
    sourceUrl: "https://www.christianfamilychurch.co.za/marriage",
  },
  {
    slug: "missions",
    title: "Missions",
    desc: "Taking the love of Jesus across the city and beyond.",
    image: "/assets/img-crowd-spotlights.jpg",
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
    image: "/assets/img-worship-band.jpg",
    sourceUrl: "https://www.christianfamilychurch.co.za/significance",
  },
];

export const getMinistry = (slug: string) => ministries.find((m) => m.slug === slug);
