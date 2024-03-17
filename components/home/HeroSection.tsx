import { Metadata } from "next";

export const metadata = {
  title: "Home page!",
  description: "home page about barnehage",
};

const HeroSection = () => {
  return (
    <div className=" text-2xl font-mono font-bold container max-w-5xl mx-auto text-center ">
      <h1>HeroSection</h1>
    </div>
  );
};

export default HeroSection;
