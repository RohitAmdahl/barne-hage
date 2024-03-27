import schoolFont from "@/utils/fontStyle";
import Image from "next/image";
import indoor from "@/public/slider2.jpg";
const TimingInBarnehage = () => {
  return (
    <div>
      <div className="py-8 container mx-auto max-w-4xl ">
        <h1
          className={`${schoolFont.variable} capitalize text-4xl font-school p-2 `}
        >
          Timing.
        </h1>
        <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 bg-orange-200 p-4 rounded-xl m-4">
          <div className="p-4">
            <figure>
              <Image
                className="rounded-xl"
                src={indoor}
                alt="barnehage indoor image "
              />
            </figure>
          </div>
          <div className="p-2 flex justify-center items-center">
            <p>
              At BarneHage, we believe in the power of friendship. We strive to
              create a nurturing environment where every child can flourish and
              develop well-rounded social skills.
            </p>
          </div>
        </div>
        <div className="p-5">
          <ul className="p-2 list-disc ">
            <li>Morning Drop-off: 7:00 AM - 8:30 AM</li>
            <li>Friendly and loving environment 8:30 AM - 9:00 AM.</li>
            <li>Morning Welcome 8:30 AM - 9:00 AM.</li>
            <li>Circle Time 9:00 AM - 10:00 AM </li>
            <li>Morning Food 10:00 AM - 10:30 AM</li>
            <li>Sleeping 10:30 AM - 12:30 AM</li>
            <li>Eating Time 12:30 PM - 1:00 PM </li>
            <li>
              Outdoor Play, Structured Learning Activities:1:30 PM - 2:30 PM
            </li>

            <li>Storyline, Activities 2:30 PM - 3:30 PM </li>
            <li>Closing Circle: 3:30 PM - 4:30 PM </li>
            <li>Departure 3:30 PM - 4:30 PM </li>
            <li>---5:00 PM ---</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimingInBarnehage;
