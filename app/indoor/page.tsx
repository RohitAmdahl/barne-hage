import IndoorPageAtBarnehage from "@/components/indoorpage/IndoorPageAtBarnehage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Indoor page! Barnehage",
  description: "indoor page barnehage",
};
const Indoor = () => {
  return (
    <div className="pt-8 container mx-auto max-w-4xl ">
      <IndoorPageAtBarnehage />
    </div>
  );
};

export default Indoor;
