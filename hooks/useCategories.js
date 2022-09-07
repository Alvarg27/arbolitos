import { useContext, useEffect } from "react";
import { axiosPrivate } from "../api/axios";

import CategoriesContext from "../context/CategoriesProvider";

const useCategories = () => {
  const {
    categories,
    setCategories,
    categoriesLoaded,
    setCategoriesLoaded,
    selectedMainCategory,
    setSelectedMainCategory,
    loadingCategoryContent,
    setLoadingCategoryContent,
  } = useContext(CategoriesContext);

  const getMainCategories = async () => {
    try {
      const result = await axiosPrivate.get("/main-categories");
      setCategories(result.data);
      setCategoriesLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryContent = async (categoryId) => {
    try {
      if (loadingCategoryContent) {
        return;
      }
      setLoadingCategoryContent(true);
      const result = await axiosPrivate.get(`/category/${categoryId}`);
      const index = categories
        .map((c) => {
          return c._id;
        })
        .indexOf(categoryId);
      categories[index] = { ...result.data, loadedData: true };
      setCategories([...categories]);
    } catch (error) {
      console.log(error);
    }
    setLoadingCategoryContent(false);
  };

  return {
    getMainCategories,
    getCategoryContent,
    categories,
    setCategories,
    selectedMainCategory,
    setSelectedMainCategory,
    categoriesLoaded,
  };
};

export default useCategories;
