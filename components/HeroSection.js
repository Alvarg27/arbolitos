import Image from "next/image";
import React from "react";
import image1 from "../public/ensalada.webp";
import image2 from "../public/ajonjoli.webp";
import usePageOffset from "../hooks/usePageOffset";
import SpinningPlate from "./SpinningPlate";

const HeroSection = () => {
  const { offsetY } = usePageOffset();

  return (
    <div className="bg-black relative flex flex-col pt-[50px] lg:flex-row">
      <div className=" my-auto px-8 drop-shadow-lg text-center lg:w-1/2">
        <h2
          style={{ transform: `translateY(-${offsetY}px)` }}
          className="text-white text-medium text-6xl relative z-[0] font-serif"
        >
          Prueba la gastronomía mexicana
        </h2>
      </div>
      <div className="my-auto relative z-[1] lg:w-1/2">
        <SpinningPlate
          className="w-[800px]"
          mainImage={image1}
          background={image2}
        />
      </div>
    </div>
  );
};

export default HeroSection;
