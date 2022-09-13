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
    if (offsetY > elementOffsetY) {
      setParallax(offsetY - elementOffsetY);
    }
    setIsShowing(offsetY > elementOffsetY - window.innerHeight + 300);
  }, [offsetY]);

  return (
    <div ref={ref} className="pt-20">
      <div className={`relative max-w-[800px] overflow-visible m-auto`}>
        <div className="px-8">
          <p className="font-serif m-auto text-center text-white text-4xl">
            Los mejores ingredientes
          </p>
          <p className="text-gray-500 text-center mt-4">
            Seleccionamos cuidadosamente cada uno de nuestros ingredientes para
            brindarte la mejor experiencia y calidad en todos nuestros platillos
          </p>
        </div>
        <div className="relative ">
          <div className="relative z-[5]">
            <Image
              className="pointer-events-none"
              style={{
                transitionDelay: "1s",
                transform: `scale(${isShowing ? 100 : 120}%)`,
                transition: "1s",
              }}
              src={steak}
              layout="responsive"
              objectFit="cover"
              priority={true}
            />
          </div>

          <div
            style={{
              transform: `translateY(-${parallax / 8}px)`,
            }}
            className="absolute h-full  w-full top-0 left-0"
          >
            <Image
              style={{
                transitionDelay: "0.3s",
                transform: `scale(${isShowing ? 100 : 120}%)`,
                transition: "1s",
              }}
              src={salt}
              layout="responsive"
              objectFit="cover"
              priority={true}
            />
          </div>

          <div
            style={{
              transform: `translateY(-${parallax / 4}px)`,
            }}
            className="absolute h-full w-full top-0 left-0"
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
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSections;
