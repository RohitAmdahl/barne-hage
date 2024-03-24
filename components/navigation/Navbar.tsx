import { navLinks } from "@/utils/navlinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between ">
      <ul className="flex justify-between item-center p-4 ">
        {navLinks.map((headerLinks) => (
          <li
            key={headerLinks.path}
            className="p-2 font-serif text-md font-bold hover:underline hover:text-purple-950 "
          >
            <Link href={headerLinks.path}>{headerLinks.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
