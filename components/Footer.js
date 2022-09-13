import Image from "next/image";
import React from "react";
import image from "../public/restaurant.webp";

const Footer = () => {
  return (
    <div className="relative bg-black">
      <div className="flex flex-col  lg:flex-row-reverse mt-8">
        <div className="lg:w-1/2 my-4">
          <div className="max-w-[400px] mx-auto">
            <Image
              src={image}
              layout="responsive"
              height={3}
              width={5}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-center lg:w-1/2 flex">
          <div className="m-auto">
            <p className="text-md mt-4 font-serif text-white">
              Horario de apertura
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Lunes - Viernes: 8:00 a.m. - 10:00 p.m.
            </p>
            <p className="text-sm text-gray-500">
              Sabado: 8:00 a.m. - 11:00 p.m.
            </p>
            <p className="text-sm text-gray-500">
              Domingo: 8:00 a.m. - 6:00 p.m.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
