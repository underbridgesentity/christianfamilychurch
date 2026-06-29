// Events are simple, datable happenings across our campuses. Adding an event
// here makes it appear on the Events listing and gives it its own detail page.

export type Event = {
  slug: string;
  name: string;
  /** Human-readable date, e.g. "05 - 24 January" or "Sun 09 Feb". */
  date: string;
  /** Short day number + month for the calendar badge on cards. */
  day: string;
  mon: string;
  time?: string;
  /** "CFC Johannesburg", "CFC South" or "All Campuses". */
  campus: string;
  venue?: string;
  image: string;
  description: string;
  cta?: string;
};

export const events: Event[] = [
  {
    slug: "21-days-of-prayer",
    name: "21 Days of Prayer",
    date: "05 - 24 January",
    day: "05",
    mon: "Jan",
    time: "5:30 AM daily",
    campus: "All Campuses",
    venue: "Main Auditorium",
    image: "/assets/img-pastor-preaching.jpg",
    description:
      "We're starting the year on our knees. Join us every morning for 21 days as we pray together as a church family and believe God for a fresh start. Everyone is welcome - come for one day or all twenty-one.",
    cta: "Register Now",
  },
  {
    slug: "baby-dedication",
    name: "Baby Dedication",
    date: "Sun 09 Feb",
    day: "09",
    mon: "Feb",
    time: "10:30 AM",
    campus: "CFC Johannesburg",
    venue: "Main Auditorium",
    image: "/assets/img-baby-dedication.jpg",
    description:
      "A special Sunday set aside to dedicate your little one to the Lord. Surrounded by our church family, we'll pray over your child and stand with you as parents. Register your family ahead of time so we can prepare for the day.",
    cta: "Register Now",
  },
  {
    slug: "worship-night",
    name: "Worship Night",
    date: "Fri 21 Feb",
    day: "21",
    mon: "Feb",
    time: "7:00 PM",
    campus: "CFC South",
    venue: "CFC South Auditorium",
    image: "/assets/img-worship-band.jpg",
    description:
      "An evening with no agenda but to encounter God together. Bring your friends and family as we lift our voices in worship and make room for His presence. Doors open at 6:30 PM.",
    cta: "RSVP",
  },
  {
    slug: "water-baptism",
    name: "Water Baptism",
    date: "Sun 01 Mar",
    day: "01",
    mon: "Mar",
    time: "10:30 AM",
    campus: "CFC Johannesburg",
    venue: "Main Auditorium",
    image: "/assets/img-congregation-wide.jpg",
    description:
      "Baptism is a powerful step of obedience and a public declaration of your faith. If you've given your life to Jesus, this is your moment to go public. Sign up and our team will walk you through everything you need to know.",
    cta: "Register Now",
  },
  {
    slug: "family-fun-day",
    name: "Family Fun Day",
    date: "Sun 08 Mar",
    day: "08",
    mon: "Mar",
    time: "11:00 AM - 3:00 PM",
    campus: "CFC South",
    venue: "CFC South Grounds",
    image: "/assets/img-dreamteam.jpg",
    description:
      "A day packed with food, games and good company for the whole family. Bring the kids, bring your neighbours and let's make memories together. Entry is free and everyone is welcome.",
    cta: "RSVP",
  },
  {
    slug: "easter-services",
    name: "Easter Services",
    date: "Sun 05 Apr",
    day: "05",
    mon: "Apr",
    time: "08:30 & 10:30 AM",
    campus: "All Campuses",
    venue: "All Campuses",
    image: "/assets/img-congregation-screens.jpg",
    description:
      "Celebrate the resurrection of Jesus with us this Easter. It's our favourite Sunday of the year, full of life, worship and hope. Invite someone along - there's a place for everyone at the table.",
    cta: "Register Now",
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
