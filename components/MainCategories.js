import React from "react";
import useCategories from "../hooks/useCategories";
import MainCategoryCard from "./MainCategoryCard";

const MainCategories = () => {
  const { categories } = useCategories();

  return (
    <div className="flex justify-center ">
      {categories.map((category) => (
        <MainCategoryCard key={category._id} category={category} />
      ))}
    </div>
  );
};

export default MainCategories;
