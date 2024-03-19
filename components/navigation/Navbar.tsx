import { navLinks } from "@/utils/navlinks";
import Link from "next/link";

console.log(navLinks);
const Navbar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((headerLinks) => (
          <li key={headerLinks.path}>
            <Link href={headerLinks.path}>{headerLinks.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
