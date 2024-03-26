import { navLinks } from "@/utils/navlinks";
import Link from "next/link";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <nav className="flex item-center justify-between flex-wrap container mx-auto items-center ">
      <Link className="" href={"/"}>
        <Logo />
      </Link>
      <ul className="flex justify-between item-center">
        {navLinks.map((headerLinks) => (
          <li
            key={headerLinks.id}
            className="p-2 font-serif text-md font-bold hover:underline hover:text-purple-950 "
          >
            <Link className="" href={headerLinks.path}>
              {headerLinks.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
