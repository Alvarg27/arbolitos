import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import LanguageSelector from "./LanguageSelector";

const MenuHeader = () => {
  return (
    <div className="flex relative">
      <div className="absolute top-1/2 -translate-y-1/2 right-2">
        <LanguageSelector />
      </div>
      <div className="w-[180px] m-auto">
        <Image src={logo} objectFit="contain" priority={true} />
      </div>
    </div>
  );
};

export default MenuHeader;
