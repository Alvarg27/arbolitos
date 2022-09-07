import React from "react";
import useLanguage from "../hooks/useLanguage";
import { FaChevronDown } from "react-icons/fa";

const LanguageSelector = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className={`relative bg-white rounded-lg`}>
      <FaChevronDown className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-300 text-xs" />
      <select
        value={language}
        className="appearance-none rounded-lg h-[40px] shadow-lg border-gray-300 cursor-pointer pr-6 pl-2 bg-transparent relative  text-sm text-gray-500"
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
