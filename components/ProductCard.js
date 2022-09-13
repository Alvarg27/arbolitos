import Image from "next/image";
import React from "react";

const ProductCard = ({ label, image, description }) => {
  return (
    <div className="min-w-[300px] text-center px-4 pt-4 pb-8 shadow-lg m-2 bg-neutral-900 rounded-lg ">
      <Image
        className="rounded-lg bg-neutral-800"
        src={image}
        layout="responsive"
        height={5}
        width={5}
        objectFit="cover"
      />
      <p className="text-lg font-serif mt-4 text-white">{label}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ProductCard;
