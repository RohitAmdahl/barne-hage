import { navLinks } from "@/utils/navlinks";
import Link from "next/link";

console.log(navLinks);
const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-4">
        {navLinks.map((headerLinks) => (
          <li
            key={headerLinks.path}
            className="flex justify-between items-center p-2"
          >
            <Link href={headerLinks.path}>{headerLinks.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
