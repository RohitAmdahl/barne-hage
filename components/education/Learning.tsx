import schoolFont from "@/utils/fontStyle";
import { Metadata } from "next";
import Image from "next/image";
import learning from "@/public/slider3.jpg";
export const metadata: Metadata = {
  title: "Education page! Barnehage",
  description: "Learning page barnehage",
};
const Learning = () => {
  return (
    <>
      <div className="pt-32 md:pt-24 lg:pt-28 ">
        <h1 className={schoolFont.variable + " text-4xl font-school py-4"}>
          Playing with Learning
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 bg-orange-200 p-4 rounded-xl">
        <div className="flex justify-center items-center">
          <Image
            src={learning}
            alt="learning"
            className="container mx-auto max-w-xl rounded-2xl"
          />
        </div>
        <div className="p-4">
          <h2
            className={
              schoolFont.variable + " text-2xl font-bold py-2 font-school "
            }
          >
            Dedicated to creating.
          </h2>
          <p>
            At BarneHage, we are dedicated to creating a nurturing environment
            where every child can flourish. Through engaging activities and
            personalized attention, we ignite a lifelong love for learning while
            fostering social, emotional, and cognitive growth. Our curriculum
            blends structured lessons with playful exploration, ensuring that
            each day is filled with excitement and discovery. With experienced
            educators guiding them, children embark on a journey of exploration,
            creativity, and friendship.
          </p>
        </div>
      </div>
    </>
  );
};

export default Learning;
