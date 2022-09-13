import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import usePageOffset from "../hooks/usePageOffset";
import steak from "../public/steak.webp";
import salt from "../public/salt.webp";
import veggies from "../public/veggies.webp";
import { Transition } from "@headlessui/react";

const IngredientsSections = () => {
  const [parallax, setParallax] = useState();
  const [isShowing, setIsShowing] = useState(false);
  const [elementOffsetY, setElementOffsetY] = useState();
  const { offsetY } = usePageOffset();
  const ref = useRef();

  useEffect(() => {
    setElementOffsetY(ref.current.offsetTop);
  }, []);

  useEffect(() => {
    if (offsetY < elementOffsetY + ref.current.clientHeight / 2) {
      setParallax(offsetY - elementOffsetY);
    }
    setIsShowing(
      offsetY > elementOffsetY - window.innerHeight + 100 &&
        offsetY < elementOffsetY + ref.current.clientHeight
    );
  }, [offsetY]);

  return (
    <div ref={ref} className="py-10 px-4">
      <div className={`relative max-w-[800px] overflow-visible m-auto`}>
        <div className="">
          <p className="font-serif m-auto text-center text-white text-4xl">
            Los mejores ingredientes
          </p>
          <p className="text-gray-500 text-center">
            Seleccionamos cuidadosament cada uno de ellos para brindarte la
            mejor experiencia en cada uno de nuestros platillos.
          </p>
        </div>
        <div className="relative mt-10">
          <div
            style={{
              transform: `translateY(-${parallax / 2}px)`,
            }}
            className="relative z-[2]"
          >
            <Image
              style={{
                transitionDelay: "1s",
                transform: `scale(${isShowing ? 100 : 120}%)`,
                transition: "1s",
              }}
              src={steak}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div className="absolute h-full  w-full top-0 left-0 z-[1]">
            <Image
              style={{
                transitionDelay: "0.3s",
                transform: `scale(${isShowing ? 100 : 120}%)`,
                transition: "1s",
              }}
              src={salt}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div
            style={{
              transform: `translateY(-${parallax / 8}px)`,
            }}
            className="absolute h-full w-full top-0 left-0 z-[1]"
          >
            <Image
              style={{
                transitionDelay: "0.5s",
                transform: `scale(${isShowing ? 100 : 120}%)`,
                transition: "1s",
              }}
              src={veggies}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSections;
