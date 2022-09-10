import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col">
        <p className="font-serif text-2xl m-auto">Platillos destacados</p>
        <div className="mt-4 flex overflow-auto no-scrollbar m-auto">
          <div className="min-w-[300px] text-center py-4 px-2 shadow-lg">
            <Image
              src="/lengua.webp"
              layout="responsive"
              height={5}
              width={5}
              objectFit="cover"
            />
            <p className="text-md mt-4">Lengua de res en salsa de la casa</p>
            <p className="text-sm text-gray-500">Nuestra especialidad</p>
          </div>
          <div className="min-w-[300px] text-center py-4 px-2 shadow-lg">
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
  );
};

export default FeaturedProducts;
