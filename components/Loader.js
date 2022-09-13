import Image from "next/image";
import React from "react";
import logo from "../public/logo-arbolitos-blanco.webp";

const Loader = () => {
  return (
    <div className="bg-black absolute w-full h-screen z-[1000] top-0  flex">
      <div className="flex flex-col text-center animate-pulse m-auto">
        <div className=" h-[80px] flex justify-between m-auto">
          <Image
            priority={true}
            src={logo}
            layout="fixed"
            height={80}
            width={150}
            objectFit="contain"
            className="my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
