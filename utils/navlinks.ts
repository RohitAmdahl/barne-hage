interface Nav {
  id: number;
  name: string;
  path: string;
}

export const navLinks: Nav[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Educational",
    path: "/educational",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];
