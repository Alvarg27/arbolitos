import React from "react";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ products }) => {
  return (
    <>
      {products?.length >= 1 && (
        <div>
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryProducts;
