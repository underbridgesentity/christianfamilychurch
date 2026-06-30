// Real CFC leadership team, sourced from christianfamilychurch.co.za/leadership.

export type Leader = { name: string; role: string; initials: string; image?: string };

export const seniorPastors = {
  name: "Apostle Theo & Dr Beverley Wolmarans",
  role: "Founding & Senior Pastors",
  image: "/assets/pastors-wolmarans.jpg",
  bio: "Apostle Theo and Dr Beverley Wolmarans founded Christian Family Church with a heart to reach people and build lives. They continue to lead the family with a passion to see people know God, find freedom and discover their purpose.",
};

export const leaders: Leader[] = [
  { name: "Dr Johnny Slabbert", role: "Chief Operations Officer", initials: "JS", image: "/assets/leadership/johnny-slabbert.jpg" },
  { name: "Ps Jenny Roche", role: "Financial Director", initials: "JR", image: "/assets/leadership/jenny-roche.jpg" },
  { name: "Dr Andre Wilmans", role: "Missions Director", initials: "AW", image: "/assets/leadership/andre-wilmans.jpg" },
  { name: "Ps Clive Nyakudzi", role: "Weekend Service Director", initials: "CN", image: "/assets/leadership/clive-nyakudzi.jpg" },
  { name: "Ps Greg Thomaz", role: "Campus Pastor, Johannesburg", initials: "GT", image: "/assets/leadership/greg-thomaz.jpg" },
  { name: "Ps Nanica Nel", role: "Small Groups Manager, Johannesburg Campus", initials: "NN", image: "/assets/leadership/nanica-nel.jpg" },
  { name: "Ps Don-Ray Gaveni", role: "Small Groups Manager, South Campus", initials: "DG", image: "/assets/leadership/don-ray-gaveni.jpg" },
  { name: "Ps Evert Boshoff", role: "Campus Pastor, South Campus", initials: "EB", image: "/assets/leadership/evert-boshoff.jpg" },
  { name: "Ps Charl Wolmarans", role: "Children’s World Manager", initials: "CW", image: "/assets/leadership/charl-wolmarans.jpg" },
];
