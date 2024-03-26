import schoolFont from "@/utils/fontStyle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education page! Barnehage",
  description: "Learning page barnehage",
};
const Learning = () => {
  return (
    <div className="pt-32 md:pt-20 lg:pt-15">
      <h1 className={schoolFont.variable + " text-4xl font-school"}>
        Learning
      </h1>
    </div>
  );
};

export default Learning;
