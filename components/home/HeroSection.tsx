import { Metadata } from "next";
import { Schoolbell } from "next/font/google";
export const metadata: Metadata = {
  title: "Home page!",
  description: "home page about barnehage",
};

const school = Schoolbell({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-school",
});

const HeroSection = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto container">
        <figure className="p-2">
          <img
            src="/barn.jpg"
            alt="logo barnehage"
            className=" max-w-3xl container mx-auto rounded-t-full bg-pink-200 p-4"
          />
        </figure>
      </div>
      <div className="font-bold p-2 container max-w-xs mx-auto text-center  ">
        <h1 className={`${school.variable} capitalize text-4xl font-school`}>
          we are the Future
        </h1>
      </div>

      <div className=" flex justify-center item-center container mx-auto max-w-4xl flex-wrap">
        <div className="p-4 flex justify-center items-center">
          <p className="p-4 max-w-xl ">
            "We will provide the tulip with such a favorable environment that it
            becomes as large, beautiful, and well-developed as it possibly can,
            but it shall not be forced to become a rose." - Frøbel
          </p>
        </div>

        <div className="shadow-2xl m-2 rounded-full bg-orange-300 ">
          <figure className="p-4">
            <img
              src="/CK_Purple_Blob_Transparent_3x.gif"
              alt=""
              width={200}
              height={200}
              className="drop-shadow-2xl"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
