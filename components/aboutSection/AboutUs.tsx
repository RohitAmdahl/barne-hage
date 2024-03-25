import schoolFont from "../../utils/fontStyle";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <div className="pt-32 md:pt-24 lg:pt-28 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h1
            className={`${schoolFont.variable} p-2 capitalize text-4xl font-school py-2`}
          >
            Magic of Our Barnehage
          </h1>
          <p className="p-2">
            Welcome to our kindergarten, where every child's journey begins with
            wonder and excitement! Our colorful classrooms and engaging outdoor
            spaces provide a safe and nurturing environment for exploration and
            discovery. With a dedicated team of educators, we encourage
            curiosity, creativity, and friendship. Together with families, we
            create a vibrant community where children thrive and grow. Join us
            on this adventure of learning and laughter at our kindergarten!
          </p>
        </div>
        <div className=" text-center">
          <div>
            <h2
              className={`${schoolFont.variable} capitalize text-4xl font-school py-2`}
            >
              Billing Address
            </h2>
            <p className="p-2">Brennagrennda 12147, 1279 Oslo</p>
            <p className="p-2">Alternative is you can send us an email</p>
            <div>
              <h2
                className={`${schoolFont.variable} capitalize text-4xl font-school py-2`}
              >
                Our Location
              </h2>
              <p className="p-2">Brennagrennda 1212, 1279 Oslo</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-9 py-4 grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto max-w-4xl gap-4 flex-wrap bg-orange-200 rounded-xl">
        <div className="p-8">
          <Image
            src={"/aboutBarenehage.jpg"}
            alt="barnehage picture "
            width={600}
            height={500}
            className="max-w-xl container mx-auto rounded-xl "
          />
        </div>
        <div className="p-8">
          <h3
            className={`${schoolFont.variable} capitalize text-2xl font-school py-2`}
          >
            About Our Barnehage
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
