import Image from "next/image";
import React from "react";
import logo from "../public/logo-arbolitos-blanco.webp";
import Button from "./Button";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-8 bg-black flex w-full">
      <div className=" h-[80px] flex justify-between m-auto">
        <Image
          src={logo}
          layout="fixed"
          height={80}
          width={150}
          objectFit="contain"
          className="my-auto"
        />
      </div>
    </div>
  );
};

export default Header;
