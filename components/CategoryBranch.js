import React from "react";
import CategoryNodeCard from "./CategoryNodeCard";

const CategoryBranch = ({ category, level }) => {
  const hasChildren = category.children && category.children.length !== 0;

  const renderBranches = () => {
    if (hasChildren) {
      const newLevel = level + 1;
      return category.children.map((child) => {
        console.log(child);
        return (
          <CategoryBranch key={child._id} category={child} level={newLevel} />
        );
      });
    }
    return null;
  };
  return (
    <>
      <CategoryNodeCard
        category={category}
        hasChildren={hasChildren}
        level={level}
      >
        {hasChildren && <div className="mb-8"> {renderBranches()}</div>}
      </CategoryNodeCard>
    </>
  );
};

export default CategoryBranch;
