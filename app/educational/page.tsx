import Learning from "@/components/education/Learning";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational page! Barnehage",
  description: "educational page barnehage",
};
const EducationalSection = () => {
  return (
    <div className=" pt-8 container mx-auto max-w-4xl">
      <Learning />
    </div>
  );
};

export default EducationalSection;
