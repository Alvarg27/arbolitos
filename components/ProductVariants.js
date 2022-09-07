import React from "react";
import ProductVariantCard from "./ProductVariantCard";

const ProductVariants = ({ variants }) => {
  return (
    <div className="mt-4">
      {variants.map((variant) => (
        <ProductVariantCard key={variant._id} variant={variant} />
      ))}
    </div>
  );
};

export default ProductVariants;
