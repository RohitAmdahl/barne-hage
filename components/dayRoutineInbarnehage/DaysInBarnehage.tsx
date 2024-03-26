import schoolFont from "@/utils/fontStyle";
const DaysInBarnehage = () => {
  return (
    <div className="pt-32 md:pt-24 lg:pt-24 ">
      <div className="py-8 container mx-auto max-w-4xl ">
        <h1
          className={`${schoolFont.variable} capitalize text-4xl font-school p-2 `}
        >
          friendship.
        </h1>
        <p>
          In kindergarten, fostering friendships holds paramount importance as
          it plays a pivotal role in a child&apos;s emotional, social, and
          cognitive development. Friendships provide a sense of belonging and
          security, helping children feel supported and accepted within their
          peer group. Through interactions with friends, children learn valuable
          social skills such as sharing, cooperation, and empathy, which are
          crucial for building positive relationships later in life. Moreover,
          friendships in kindergarten create opportunities for language
          development as children communicate, negotiate, and problem-solve
          together.
        </p>
        <p>
          At BarneHage, we believe in the power of friendship. We strive to
          create a nurturing environment where every child can flourish and
          develop well-rounded social skills.
        </p>
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
  );
};

export default DaysInBarnehage;
