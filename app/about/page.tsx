import AboutUs from "@/components/aboutSection/AboutUs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About page!",
  description: "complete information about barnehage",
};
const AboutSection = () => {
  return (
    <div className=" container mx-auto max-w-4xl ">
      <AboutUs />
    </div>
  );
};

export default AboutSection;
