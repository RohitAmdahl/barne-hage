import { navLinks } from "@/utils/navlinks";
import Link from "next/link";
console.log(navLinks);
const Navbar = () => {
  return (
    <nav className="flex item-center justify-between">
      <ul className="flex justify-between item-center ">
        {navLinks.map((headerLinks) => (
          <li key={headerLinks.path} className="p-2">
            <Link href={headerLinks.path}>{headerLinks.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
