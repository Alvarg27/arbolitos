import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";
import lengua from "../public/lengua.webp";
import ceviche from "../public/ceviche.webp";
import pulpo from "../public/pulpo.webp";
import sopaAzteca from "../public/sopa-azteca.webp";

const FeaturedProducts = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col ">
        <p className="font-serif m-auto text-white text-4xl">
          Platillos destacados
        </p>
        <div className="overflow-x-scroll no-scrollbar py-4 px-4">
          <div className=" flex w-fit mx-auto">
            <ProductCard
              image={lengua}
              label="Lengua de res en salsa de la casa"
              description="Nuestra especialidad"
            />
            <ProductCard
              image={sopaAzteca}
              label="Sopa azteca"
              description="Recomendación"
            />
            <ProductCard
              image={ceviche}
              label="Ceviche rojo"
              description="Recomendación"
            />
            <ProductCard
              image={pulpo}
              label="Pulpo"
              description="Recomendación"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
