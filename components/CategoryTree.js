import React, { useEffect } from "react";
import useCategories from "../hooks/useCategories";
import CategoryBranch from "./CategoryBranch";
import Spinner from "./Spinner";

const CategoryTree = () => {
  const { categories, selectedMainCategory, getCategoryContent } =
    useCategories();
  const category = categories.find((c) => c._id === selectedMainCategory);

  return (
    <>
      {category?.loadedData ? (
        <div>
          {category?.children?.map((child) => (
            <CategoryBranch key={child._id} category={child} level={0} />
          ))}
        </div>
      ) : (
        <div className="flex w-full h-[400px]">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default CategoryTree;
