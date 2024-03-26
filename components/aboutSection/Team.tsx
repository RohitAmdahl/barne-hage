import { teamsCards } from "@/utils/cards";
import Image from "next/image";
import schoolFont from "@/utils/fontStyle";
const Team = () => {
  return (
    <div>
      <h2
        className={`${schoolFont.variable} p-2 capitalize text-4xl font-bold font-school py-2`}
      >
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl p-4 m-4">
        {teamsCards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center">
              <Image
                src={card.image}
                alt={card.name}
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold">{card.name}</p>
              <p className="text-md text-gray-600">{card.role}</p>
              <p className="text-md text-gray-600">{card.education}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
