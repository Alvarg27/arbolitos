import { useContext } from "react";

import LanguageContext from "../context/LanguageProvider";

const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const translate = (textObj) => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    const result = textObj.find((o) => o.language === language);
    if (!result) {
      return;
    }
    return capitalizeFirstLetter(result.content);
  };
  return {
    language,
    setLanguage,
    translate,
  };
};

export default useLanguage;
