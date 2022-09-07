import React from "react";
import CategoryNodeCard from "./CategoryNodeCard";

const CategoryBranch = ({ category, level }) => {
  const hasChildren = category.children && category.children.length !== 0;

  const renderBranches = () => {
    if (category.children.length >= 1) {
      return;
    }
    const newLevel = level + 1;
    return category.children.map((child) => {
      return (
        <CategoryBranch key={child._id} category={child} level={newLevel} />
      );
    });
  };

  return (
    <>
      <CategoryNodeCard
        category={category}
        hasChildren={hasChildren}
        level={level}
      />
    </>
  );
};

export default CategoryBranch;
