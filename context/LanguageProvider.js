import { createContext, useState, useEffect } from "react";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
