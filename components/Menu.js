import React, { useEffect } from "react";
import useCategories from "../hooks/useCategories";
import CategoryTree from "./CategoryTree";
import MainCategories from "./MainCategories";
import MenuHeader from "./MenuHeader";

const Menu = () => {
  const {
    categories,
    categoriesLoaded,
    selectedMainCategory,
    setSelectedMainCategory,
    getCategoryContent,
    getMainCategories,
  } = useCategories();

  useEffect(() => {
    if (categoriesLoaded) {
      return;
    }
    getMainCategories();
    return;
  }, []);

  useEffect(() => {
    if (!categoriesLoaded) {
      return;
    }
    if (!selectedMainCategory) {
      return;
    }
    getCategoryContent(selectedMainCategory);
  }, [selectedMainCategory]);

  useEffect(() => {
    if (!categoriesLoaded) {
      return;
    }
    if (categories.length < 1) {
      return;
    }
    setSelectedMainCategory(categories[0]._id);
  }, [categoriesLoaded]);

  return (
    <div className="min-h-screen bg-slate-50 ">
      <div className=" shadow-lg sticky top-0 bg-gray-100 z-[20]">
        <MenuHeader />
        <div className="w-full h-[1px] bg-gray-200" />
        <MainCategories />
      </div>
      <div className="max-w-[600px] mx-auto flex">
        {categories.length >= 1 && <CategoryTree />}
      </div>
    </div>
  );
};

export default Menu;
