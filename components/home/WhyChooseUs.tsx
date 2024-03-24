import { Schoolbell } from "next/font/google";
const school = Schoolbell({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-school",
});
const WhyChooseUs = () => {
  return (
    <section className=" grid grid-cols-1 gap-2 container mx-auto max-w-5xl align-middle p-4 m-2 md:grid-cols-2 lg:grid-cols-2">
      <div className="p-2">
        <img
          src="/group.png"
          alt="picture of a group of children together with a grown up women crossing the  road"
          className=" max-w-2xl container mx-auto "
        />
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <h1
          className={`${school.variable} font-bold capitalize text-4xl font-school`}
        >
          Why Choose Us
        </h1>
        <p className="p-2">
          What is most important to you, when choosing BarneHage?{" "}
        </p>
        <p className="p-2">
          Nothing is more important than your child at Barnehage your child is
          safe and healthy. We are with your child all the time and always. We
          will provide the tulip with such a favorable environment that it
          becomes as large, beautiful, and well-developed as it possibly can,
          but it shall not be forced to become a rose.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
