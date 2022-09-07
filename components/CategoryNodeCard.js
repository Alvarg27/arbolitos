import React, { useEffect } from "react";
import useLanguage from "../hooks/useLanguage";
import CategoryBranch from "./CategoryBranch";
import CategoryProducts from "./CategoryProducts";

const CategoryNodeCard = ({ category, level, children }) => {
  const height = 80 - level * 25;
  const fontSize = 20 - level * 3;
  const SmallFontSize = 16 - level * 3;
  const { translate } = useLanguage();

  return (
    <div style={{ padding: `0 ${level * 30}px` }}>
      <div
        style={{ height: `${height}px` }}
        className={`w-full flex border-b-[1px]`}
      >
        <div className="m-auto flex flex-col">
          <p
            style={{ fontSize: `${fontSize}px` }}
            className="mx-auto  font-medium"
          >
            {translate(category.title)}
          </p>
          <p
            style={{ fontSize: `${SmallFontSize}px` }}
            className="mx-auto text-gray-500"
          >
            {translate(category.description)}
          </p>
        </div>
      </div>
      {children}
      <CategoryProducts products={category.products} />
    </div>
  );
};

export default CategoryNodeCard;
