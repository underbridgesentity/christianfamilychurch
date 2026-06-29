export type Group = {
  name: string;
  campus: string;
  day: string;
  time: string;
  category: string;
  descriptor: string;
};

export const groups: Group[] = [
  {
    name: "Young Adults Collective",
    campus: "CFC Johannesburg",
    day: "Wednesday",
    time: "Wednesdays 7:00 PM",
    category: "Young Adults",
    descriptor: "A vibrant group for 18-30s navigating faith, work and life.",
  },
  {
    name: "Marriage Builders",
    campus: "CFC Johannesburg",
    day: "Thursday",
    time: "Thursdays 7:30 PM",
    category: "Couples",
    descriptor: "Strengthen your marriage alongside other couples.",
  },
  {
    name: "Women of Worth",
    campus: "CFC South",
    day: "Tuesday",
    time: "Tuesdays 9:30 AM",
    category: "Women",
    descriptor: "A warm circle of women growing in faith and friendship.",
  },
  {
    name: "Men of Valour",
    campus: "CFC South",
    day: "Saturday",
    time: "Saturdays 7:00 AM",
    category: "Men",
    descriptor: "Iron sharpens iron - coffee, the Word and real talk.",
  },
  {
    name: "Family Life Group",
    campus: "CFC Johannesburg",
    day: "Sunday",
    time: "Sundays 4:00 PM",
    category: "Family",
    descriptor: "Families doing life together, kids welcome.",
  },
  {
    name: "Midweek Connect",
    campus: "CFC South",
    day: "Wednesday",
    time: "Wednesdays 6:30 PM",
    category: "Young Adults",
    descriptor: "An open group for anyone wanting midweek community.",
  },
  {
    name: "Couples & Coffee",
    campus: "CFC South",
    day: "Thursday",
    time: "Thursdays 7:00 PM",
    category: "Couples",
    descriptor: "Relaxed evenings building strong relationships.",
  },
  {
    name: "Ladies Brunch Group",
    campus: "CFC Johannesburg",
    day: "Saturday",
    time: "Saturdays 10:00 AM",
    category: "Women",
    descriptor: "Brunch, the Bible and belly laughs once a fortnight.",
  },
];

// Filter option lists (ordered to match the prototype).
export const campuses = ["All", "CFC Johannesburg", "CFC South"];
export const days = ["All", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"];
export const categories = ["All", "Men", "Women", "Couples", "Young Adults", "Family"];
