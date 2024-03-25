import schoolFont from "../../utils/fontStyle";

const AboutUs = () => {
  return (
    <>
      <div className="pt-32 md:pt-24 lg:pt-28 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div className="  ">
          <h1
            className={`${schoolFont.variable} capitalize text-4xl font-school py-2`}
          >
            Magic of Our Barnehage
          </h1>
          <p className="py-2">
            Welcome to our kindergarten, where every child's journey begins with
            wonder and excitement! Our colorful classrooms and engaging outdoor
            spaces provide a safe and nurturing environment for exploration and
            discovery. With a dedicated team of educators, we encourage
            curiosity, creativity, and friendship. Together with families, we
            create a vibrant community where children thrive and grow. Join us
            on this adventure of learning and laughter at our kindergarten!
          </p>
        </div>
        <div className="pt-5">
          <div>
            <h2
              className={`${schoolFont.variable} capitalize text-4xl font-school py-2`}
            >
              Billing Address
            </h2>
            <p className="p-2">Brennagrennda 12147, 1279 Oslo</p>
            <p className="p-2">Alternative is you can send us an email</p>
          </div>
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
    </>
  );
};

export default AboutUs;
