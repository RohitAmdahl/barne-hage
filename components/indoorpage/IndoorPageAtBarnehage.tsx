import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sliderImg } from "@/utils/sliderImg";

const IndoorPageAtBarnehage = () => {
  return (
    <>
      {/* <div className="">
        <Link
          className="p-4 bg-orange-200  font-serif font-bold m-4 rounded-xl "
          href={"/"}
        >
          Go Back to home
        </Link>
      </div> */}

      <div className="pt-32 md:pt-24 lg:pt-24 ">
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
    </>
  );
};

export default IndoorPageAtBarnehage;
