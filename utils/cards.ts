interface TeamsCards {
  id: number;
  name: string;
  role?: string;
  image: string;
  education: string;
}

export const teamsCards: TeamsCards[] = [
  {
    id: 1,
    name: "Merve Kavak",
    image: "/lady.jpg",
    role: "Kids Teacher & Coordinator",
    education: "Barnehage Teacher",
  },
  {
    id: 2,
    name: "Nina Karlson",
    image: "/ladyred.jpg",
    role: "Kids Teacher & Coordinator",
    education: "Assistent Teacher",
  },
  {
    id: 3,
    name: "Marcus Olsen",
    image: "/man.jpg",
    education: "Barnehage Teacher",
  },
  {
    id: 4,
    name: "Jessica smith Olsen",
    image: "/owner.jpg",
    role: "Co-Founder/ Owner ",
    education: "Barnehage Teacher",
  },
  {
    id: 5,
    name: "Jessica smith Olsen",
    image: "/assistent.jpg",
    role: "Assistant ",
    education: "Barnehage Teacher",
  },
  {
    id: 6,
    name: "Anne Cathrine",
    image: "/assistent1.jpg",
    role: "Assistant",
    education: "Assistent Teacher",
  },
];
