import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sliderImg } from "@/utils/sliderImg";

const IndoorPageAtBarnehage = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 items-center">
        {sliderImg.map((slider) => (
          <div className="p-4  gap-4" key={slider.id}>
            <Image
              src={slider.image}
              alt={slider.alt}
              width={520}
              height={500}
              className="rounded-md max-w4xl container mx-auto "
            />
            <p className="capitalize text-thin text-sm text-center py-3 bg-red-50 ">
              {slider.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndoorPageAtBarnehage;
