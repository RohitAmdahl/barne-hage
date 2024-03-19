import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container mx-auto max-w-5xl p-4">
      <header className="flex flex-wrap justify-between items-baseline">
        <Logo />
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
