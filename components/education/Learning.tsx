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
      <div className="pt-32 md:pt-24 lg:pt-24 ">
        <h1 className={schoolFont.variable + " text-4xl font-school py-4"}>
          Playing with Learning
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 bg-orange-50 p-4 rounded-xl">
        <div className="flex justify-center items-center rounded-xl">
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
      <div className="py-4">
        <h2
          className={
            schoolFont.variable + " text-2xl font-bold py-4 font-school "
          }
        >
          Fostering Growth Through Play
        </h2>
        <p className="py-2">
          The pedagogical work with the children occurs through our daily care
          and interactions, both structured and in more open settings, from the
          moment we welcome them in the morning, during meals, and other daily
          activities. However, the children&apos;s play is central to their
          development and learning. Through play, children learn social rules,
          how to form friendships, and knowledge is mutually transferred between
          children and between adults and children.
        </p>
        <p>
          The adult role is to protect the delicate, fluid play, provide input
          and ideas when needed, prevent and help children solve conflicts
          constructively. Therefore, we emphasize having actively observing and
          participating adults, both in free play and in more structured
          activities. In the first part of the annual plan, you will find a more
          detailed explanation of our pedagogical work.
        </p>
      </div>
    </>
  );
};

export default Learning;
