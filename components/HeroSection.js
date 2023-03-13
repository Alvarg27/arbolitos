import Image from "next/image";
import React, { useEffect } from "react";
import image1 from "../public/soup.webp";
import image2 from "../public/ajonjoli.webp";
import usePageOffset from "../hooks/usePageOffset";
import SpinningPlate from "./SpinningPlate";
import Button from "./Button";
import Link from "next/link";

const HeroSection = () => {
  const { offsetY } = usePageOffset();

  return (
    <div className="relative flex flex-col pt-[150px] lg:pt-0 lg:flex-row lg:min-h-screen overflow-hidden">
      <div
        style={{ transform: `translateY(-${offsetY}px)` }}
        className=" my-auto px-8 drop-shadow-lg text-center lg:w-1/2"
      >
        <h2 className="text-white text-medium text-4xl lg:text-6xl relative z-[0] font-serif">
          Prueba la gastronomía mexicana
        </h2>
        <div className="flex mt-10 justify-center">
          <Link href="https://www.opentable.com/r/los-arbolitos-restaurante-queretaro-juriquilla">
            <a target="_blank">
              <Button className="bg-white mx-auto  px-4 mr-2">
                Reservar Querétaro
              </Button>
            </a>
          </Link>
          <Link href="https://www.opentable.com.mx/r/los-arbolitos-el-llano">
            <a target="_blank">
              <Button className="bg-white mx-auto px-4">Reservar Tula</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="my-auto relative z-[1] lg:w-1/2 flex">
        <SpinningPlate
          className="w-[800px] m-auto"
          mainImage={image1}
          background={image2}
        />
      </div>
    </div>
  );
};

export default HeroSection;
