import AboutUs from "@/components/aboutSection/AboutUs";
import Team from "@/components/aboutSection/Team";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About page!",
  description: "complete information about barnehage",
};
const AboutSection = () => {
  return (
    <div className="pt-8 container mx-auto max-w-4xl ">
      <AboutUs />
      <div className="pt-8 container mx-auto max-w-4xl ">
        <Team />
      </div>
    </div>
  );
};

export default AboutSection;
