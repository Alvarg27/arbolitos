import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import usePageOffset from "../hooks/usePageOffset";
import background from "../public/soup-banner.webp";
import Button from "./Button";

const BannerSection = () => {
  const [parallax, setParallax] = useState();

  const [scale, setScale] = useState(125);
  const { offsetY } = usePageOffset();
  const ref = useRef();

  useEffect(() => {
    if (offsetY > ref.current.offsetTop) {
      setParallax(offsetY - ref.current.offsetTop);
    }
    const value =
      offsetY - ref.current.offsetTop < -100 &&
      offsetY - ref.current.offsetTop < 0
        ? (Math.abs(offsetY - ref.current.offsetTop) - 125) / 10 + 125
        : 125;

    setScale(value);
  }, [offsetY]);

  return (
    <div
      ref={ref}
      className="w-full h-[400px] overflow-hidden relative my-20 flex"
    >
      <div className=" text-white m-auto z-[15]">
        <p className="font-serif text-4xl">Conoce nuestro menú</p>
        <Link href="https://los-arbolitos.tectify.app/">
          <a target="_blank">
            <Button className="bg-white mx-auto mt-8 px-8 text-black ">
              Ver menú
            </Button>
          </a>
        </Link>
      </div>
      <div className="bg-black absolute z-[11] w-full h-full opacity-60" />
      <div
        style={{ transform: `scale(${scale}%) translateY(-${parallax / 8}px)` }}
        className="absolute z-10 w-full h-full"
      >
        <Image
          layout="fill"
          objectFit="cover"
          priority={true}
          src={background}
        />
      </div>
    </div>
  );
};

export default BannerSection;
