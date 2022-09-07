import { createContext, useState, useEffect } from "react";

const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [selectedMainCategory, setSelectedMainCategory] = useState();
  const [loadingCategoryContent, setLoadingCategoryContent] = useState(false);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        categoriesLoaded,
        setCategoriesLoaded,
        selectedMainCategory,
        setSelectedMainCategory,
        loadingCategoryContent,
        setLoadingCategoryContent,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
