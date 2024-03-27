import Advice from "@/components/advice/Advice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parents Advice page! Barnehage",
  description: "parents advice page barnehage",
};

const ParentsAdvice = () => {
  return (
    <div className="pt-8 container mx-auto max-w-4xl ">
      <Advice />
    </div>
  );
};

export default ParentsAdvice;
