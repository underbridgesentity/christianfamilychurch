// Real CFC leadership team, sourced from christianfamilychurch.co.za/leadership.

export type Leader = { name: string; role: string; initials: string };

export const seniorPastors = {
  name: "Apostle Theo & Dr Beverley Wolmarans",
  role: "Founding & Senior Pastors",
  image: "/assets/pastors-wolmarans.jpg",
  bio: "Apostle Theo and Dr Beverley Wolmarans founded Christian Family Church with a heart to reach people and build lives. They continue to lead the family with a passion to see people know God, find freedom and discover their purpose.",
};

export const leaders: Leader[] = [
  { name: "Dr Johnny Slabbert", role: "Chief Operations Officer", initials: "JS" },
  { name: "Ps Jenny Roche", role: "Financial Director", initials: "JR" },
  { name: "Dr Andre Wilmans", role: "Missions Director", initials: "AW" },
  { name: "Ps Clive Nyakudzi", role: "Weekend Service Director", initials: "CN" },
  { name: "Ps Greg Thomaz", role: "Campus Pastor, Johannesburg", initials: "GT" },
  { name: "Ps Nanica Nel", role: "Small Groups Manager, Johannesburg Campus", initials: "NN" },
  { name: "Ps Don-Ray Gaveni", role: "Small Groups Manager, South Campus", initials: "DG" },
  { name: "Ps Evert Boshoff", role: "Campus Pastor, South Campus", initials: "EB" },
  { name: "Ps Charl Wolmarans", role: "Children’s World Manager", initials: "CW" },
];
