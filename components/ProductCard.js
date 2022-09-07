import Image from "next/image";
import React from "react";
import useLanguage from "../hooks/useLanguage";
import ProductVariants from "./ProductVariants";

const ProductCard = ({ product }) => {
  const { translate } = useLanguage();
  return (
    <div className="bg-white m-2 rounded-lg py-4 shadow-md px-4">
      <div className="flex justify-between">
        <div className="flex">
          {product.images.length >= 1 && (
            <div className="h-[80px] min-w-[80px] bg-gray-100 rounded-lg mr-4">
              <Image
                className="w-full h-full rounded-lg relative z-10"
                layout="fixed"
                height={80}
                width={80}
                objectFit="cover"
                src={`https://cdn.restaurants.tectify.io/${product.images[0]}-thumbnail.webp`}
              />
            </div>
          )}

          <div>
            <p>{translate(product.title)}</p>
            {product.description.length >= 1 && (
              <p className="text-gray-500 text-sm">
                {translate(product.description)}
              </p>
            )}
          </div>
        </div>
        {product.variants.length < 1 && (
          <p className="font-medium">${product.price}</p>
        )}
      </div>
      {product.variants.length > 1 && (
        <ProductVariants variants={product.variants} />
      )}
    </div>
  );
};

export default ProductCard;
