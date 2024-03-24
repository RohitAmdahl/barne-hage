import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-pink-200 px-4 ">
      <div className="container mx-auto max-w-5xlp-2">
        <header className="flex flex-wrap justify-between items-baseline">
          <Logo />
          <Navbar />
        </header>
      </div>
    </div>
  );
};

export default Header;
