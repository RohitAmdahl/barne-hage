import schoolFont from "@/utils/fontStyle";
import clothing from "@/public/advice-.png";
import Image from "next/image";
const Advice = () => {
  return (
    <div>
      <h1 className={schoolFont.variable + " text-4xl font-school py-4 px-2"}>
        Advice from BarneHage
      </h1>
      <p className="p-2">
        The kindergarten does many different activities, both indoors and
        outdoors. It is therefore important that the child has comfortable and
        reasonable clothes in kindergarten. In Norway we stay outside no matter
        the weather. Wool clothing, rainwear and warm outside clothing is
        essential.
      </p>
      <div>
        <Image
          src={clothing}
          alt="clothing"
          className="max-w-2xl p-2 container mx-auto"
        />
      </div>
    </div>
  );
};

export default Advice;
