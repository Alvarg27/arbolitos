import Image from "next/image";
import React from "react";
import usePageOffset from "../hooks/usePageOffset";

const SpinningPlate = ({ mainImage, background, className }) => {
  const { offsetY } = usePageOffset();
  return (
    <div className={`${className} relative  w-screen lg:w-full  md:w-full`}>
      <div
        className="relative z-[2]"
        style={{ transform: `rotate(${offsetY / 8}deg)` }}
      >
        <Image
          src={mainImage}
          layout="responsive"
          height={1}
          width={1}
          priority={true}
          objectFit="cover"
        />
      </div>
      <div
        style={{ transform: `translateY(-${offsetY / 6}px)` }}
        className="absolute h-full w-full top-0 left-0 z-[1]"
      >
        <Image
          src={background}
          layout="responsive"
          height={1}
          width={1}
          priority={true}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default SpinningPlate;
