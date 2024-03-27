import DaysInBarnehage from "@/components/dayRoutineInbarnehage/DaysInBarnehage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Day routine page! Barnehage",
  description: "Day routine page barnehage",
};
const NormalDaysRoutine = () => {
  return (
    <div className=" pt-8 container max-w-4xl mx-auto ">
      <DaysInBarnehage />
    </div>
  );
};

export default NormalDaysRoutine;
