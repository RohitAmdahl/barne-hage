import schoolFont from "../../utils/fontStyle";
import Image from "next/image";
import { aboutText } from "@/utils/aboutPage";
const AboutUs = () => {
  return (
    <>
      <div className="pt-32 md:pt-24 lg:pt-28 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h1
            className={`${schoolFont.variable} p-2 capitalize text-4xl font-school py-2`}
          >
            Magic of Our Barnehage.
          </h1>
        </div>
      </div>

      <div>{}</div>
      <div className=" mt-9 py-4 grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto max-w-4xl gap-4 flex-wrap bg-orange-200 rounded-xl">
        <div className="p-8">
          <Image
            src="/aboutBarenehage.jpg"
            alt="barnehage picture"
            width={600}
            height={500}
            className="max-w-xl container mx-auto rounded-xl "
          />
        </div>
        <div className="p-8">
          <h3
            className={`${schoolFont.variable} capitalize text-2xl font-school py-2`}
          >
            About Our Barnehage.
          </h3>
          <p>
            Brennastubben Family Daycare is located in Brenna, Dal/Brenna in
            Oslo, specifically at Brennastubben 16. The surrounding area
            consists of villa housing and Østmarka Eastern Forest. Information
            about Brenna can be found on Brenna&apos;s Neighborhood Association
            website.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
