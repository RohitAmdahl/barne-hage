import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="container mx-auto max-w-5xl">
      <div className="container mx-auto max-w-5xl p-2 m-2 ">
        <Logo />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
