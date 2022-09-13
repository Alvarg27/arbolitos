import Image from "next/image";
import React from "react";
import usePageOffset from "../hooks/usePageOffset";
import steak from "../public/steak.webp";
import salt from "../public/salt.webp";
import veggies from "../public/veggies.webp";

const IngredientsSections = () => {
  const { offsetY } = usePageOffset();
  return (
    <div className="py-10">
      <div className={`relative max-w-fill max-w-[800px] m-auto`}>
        <div className="flex">
          <p className="font-serif m-auto text-white text-4xl">
            Los mejores ingredientes
          </p>
        </div>
        <div className="relative z-[2]" style={{ transform: `` }}>
          <Image src={steak} layout="responsive" objectFit="cover" />
        </div>
        <div
          style={{ transform: `` }}
          className="absolute h-full w-full top-0 left-0 z-[1]"
        >
          <Image src={salt} layout="responsive" objectFit="cover" />
        </div>
        <div
          style={{ transform: `` }}
          className="absolute h-full w-full top-0 left-0 z-[1]"
        >
          <Image src={veggies} layout="responsive" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default IngredientsSections;
