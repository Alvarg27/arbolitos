import { createContext, useEffect, useState } from "react";

const Context = createContext({});

export const PageOffsetProvider = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function (event) {
      function debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

      var myEfficientFn = debounce(function () {
        console.log("HEY STOP MOVING ME AROUND!");
      }, 25);

      window.addEventListener("mousemove", myEfficientFn), false;
    });
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
