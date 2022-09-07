import React, { useState } from "react";
import useCategories from "../hooks/useCategories";
import useLanguage from "../hooks/useLanguage";

const MainCategoryCard = ({ category }) => {
  const { translate } = useLanguage();
  const { setSelectedMainCategory } = useCategories();

  return (
    <div
      onClick={() => setSelectedMainCategory(category._id)}
      className="px-4 py-4 rounded-lg shadow-lg m-2 flex bg-white cursor-pointer "
    >
      <p className="m-auto font-medium">{translate(category.title)}</p>
    </div>
  );
};

export default MainCategoryCard;
