import Link from "next/link";
// import WhyChooseUs from "./WhyChooseUs";

const TabsLinks = () => {
  return (
    <div>
      <div className=" p-2  grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4  ">
        <div className="bg-green-50 text-center p-5 rounded-lg hover:ring-2 hover:bg-green-200 ">
          <Link
            href={"/dayrutine"}
            className="p-2  text-lg font-bold hover:underline hover:text-purple-950  "
          >
            Day Routine at BarneHage
          </Link>
        </div>
        <div className=" bg-fuchsia-50 text-center p-5 rounded-lg hover:ring-2 hover:bg-fuchsia-200 ">
          <Link
            href={"/indoor"}
            className="p-2  text-lg font-bold hover:underline hover:text-purple-950 "
          >
            Indoor at BarneHage
          </Link>
        </div>
        <div className=" bg-pink-50 text-center p-5 rounded-lg hover:ring-2 hover:bg-pink-300">
          <Link
            href={"/parentsadvice"}
            className="p-2  text-lg font-bold hover:underline hover:text-purple-950 "
          >
            Parents Advice
          </Link>
        </div>
        <div className=" bg-orange-50 text-center p-5 rounded-lg hover:ring-2 hover:bg-orange-200 ">
          <Link
            href={"/timing"}
            className="p-2  text-lg font-bold hover:underline hover:text-purple-950  "
          >
            BarneHage Timing
          </Link>
        </div>
      </div>
      {/* <WhyChooseUs /> */}
    </div>
  );
};

export default TabsLinks;
