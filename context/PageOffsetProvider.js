import { createContext, useEffect, useState } from "react";

const Context = createContext({});

export const PageOffsetProvider = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Context.Provider value={{ offsetY, setOffsetY }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
