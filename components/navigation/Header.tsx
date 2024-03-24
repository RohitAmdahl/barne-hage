import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full px-4 fixed  backdrop-blur-xl bg-white/30   ">
      <div className=" p-2 max-w-5xl mx-auto container ">
        <div className=" flex flex-wrap justify-center items-center lg:justify-between md:justify-between ">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
