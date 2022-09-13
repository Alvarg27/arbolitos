import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col ">
        <p className="font-serif m-auto text-white text-4xl">
          Platillos destacados
        </p>
        <div className="overflow-x-scroll no-scrollbar py-4 px-4">
          <div className=" flex w-fit mx-auto">
            <div className="min-w-[300px] text-center p-4 shadow-lg m-2 bg-white ">
              <Image
                src="/lengua.webp"
                layout="responsive"
                height={5}
                width={5}
                objectFit="cover"
              />
              <p className="text-lg font-serif mt-4">
                Lengua de res en salsa de la casa
              </p>
              <p className="text-sm text-gray-500">Nuestra especialidad</p>
            </div>
            <div className="min-w-[300px] text-center p-4 shadow-lg m-2 bg-white ">
              <Image
                src="/sopa-azteca.webp"
                layout="responsive"
                height={5}
                width={5}
                objectFit="cover"
              />
              <p className="text-md mt-4">Sopa azteca</p>
              <p className="text-sm text-gray-500">Recomendación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
