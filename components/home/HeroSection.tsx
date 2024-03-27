import TabsLinks from "./TabsLinks";
import Image from "next/image";
import schoolFont from "@/utils/fontStyle";
import heroImg2 from "@/public/barn.jpg";
import WhyChooseUs from "./WhyChooseUs";
const HeroSection = () => {
  return (
    <div className="pt-10 md:pt-7 lg:pt-5">
      <div>
        <WhyChooseUs />
      </div>
      <div className="font-bold p-2 container max-w-2xl mx-auto text-center">
        <h2
          className={`${schoolFont.variable} capitalize text-4xl font-school py-2`}
        >
          To be involved in a community
        </h2>
      </div>
      <div className="max-w-xl mx-auto container">
        <Image
          src={heroImg2}
          alt="logo barnehage"
          className="max-w-xl container mx-auto rounded-t-full bg-orange-50 p-8"
        />
      </div>

      <div className=" flex justify-center item-center container mx-auto max-w-4xl flex-wrap">
        <div className="p-4 flex justify-center items-center">
          <p className="p-4 max-w-xl ">
            We will provide the tulip with such a favorable environment that it
            becomes as large, beautiful, and well-developed as it possibly can,
            but it shall not be forced to become a rose.
          </p>
        </div>

        <div className="m-2">
          <Image
            src="/cloud.gif"
            alt="gif animation a purple cloud moving with the light orange background in the background"
            width={200}
            height={200}
            className="drop-shadow-2xl"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
