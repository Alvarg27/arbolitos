import React from "react";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ products }) => {
  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default CategoryProducts;
