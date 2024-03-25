import TabsLinks from "./TabsLinks";
import Image from "next/image";
import schoolFont from "@/utils/fontStyle";

const HeroSection = () => {
  return (
    <>
      <section className="pt-10 md:pt-7 lg:pt-5">
        <div className="pt-32 md:pt-20 lg:pt-15">
          <TabsLinks />
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
            src="/barn.jpg"
            alt="logo barnehage"
            width={250}
            height={250}
            className="max-w-xl container mx-auto rounded-t-full bg-pink-200 p-4"
          />
        </div>

        <div className=" flex justify-center item-center container mx-auto max-w-4xl flex-wrap">
          <div className="p-4 flex justify-center items-center">
            <p className="p-4 max-w-xl ">
              We will provide the tulip with such a favorable environment that
              it becomes as large, beautiful, and well-developed as it possibly
              can, but it shall not be forced to become a rose.
            </p>
          </div>

          <div className="shadow-2xl m-2 rounded-full bg-orange-300 ">
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
      </section>
    </>
  );
};

export default HeroSection;
