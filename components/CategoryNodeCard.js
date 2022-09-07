import React, { useEffect } from "react";
import useLanguage from "../hooks/useLanguage";
import CategoryBranch from "./CategoryBranch";
import CategoryProducts from "./CategoryProducts";

const CategoryNodeCard = ({ category }) => {
  const { translate } = useLanguage();

  return (
    <div>
      <div className="w-full flex border-b-[1px] py-6">
        <div className="m-auto flex flex-col">
          <p className="mx-auto text-lg font-medium">
            {translate(category.title)}
          </p>
          <p className="mx-auto text-gray-500">
            {translate(category.description)}
          </p>
        </div>
      </div>
      <CategoryProducts products={category.products} />
    </div>
  );
};

export default CategoryNodeCard;
