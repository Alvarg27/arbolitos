import React from "react";
import useLanguage from "../hooks/useLanguage";

const ProductVariantCard = ({ variant }) => {
  const { translate } = useLanguage();
  return (
    <div className="flex justify-between ml-4">
      <p>{translate(variant.description)}</p>
      <p className="font-medium">${variant.price}</p>
    </div>
  );
};

export default ProductVariantCard;
