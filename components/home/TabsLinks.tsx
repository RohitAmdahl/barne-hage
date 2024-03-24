import Link from "next/link";

const TabsLinks = () => {
  return (
    <div className=" p-2  grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 ">
      <div className="bg-green-300 text-center p-5 rounded-lg hover:ring-2">
        <Link
          href={"/dayrutine"}
          className="p-2  text-lg font-bold hover:underline hover:text-purple-950  "
        >
          Day Routine at BarneHage
        </Link>
      </div>
      <div className=" bg-fuchsia-300 text-center p-5 rounded-lg hover:ring-2 ">
        <Link
          href={"/indoor"}
          className="p-2  text-lg font-bold hover:underline hover:text-purple-950 "
        >
          Indoor at BarneHage
        </Link>
      </div>
      <div className=" bg-pink-400 text-center p-5 rounded-lg hover:ring-2">
        <Link
          href={"/parentsadvice"}
          className="p-2  text-lg font-bold hover:underline hover:text-purple-950 "
        >
          Parents Advice
        </Link>
      </div>
      <div className=" bg-orange-300 text-center p-5 rounded-lg hover:ring-2 ">
        <Link
          href={"/timing"}
          className="p-2  text-lg font-bold hover:underline hover:text-purple-950  "
        >
          BarneHage Timing
        </Link>
      </div>
    </div>
  );
};

export default TabsLinks;
