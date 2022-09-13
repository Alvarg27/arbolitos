import Image from "next/image";
import React from "react";
import logo from "../public/logo-arbolitos-blanco.webp";
import Button from "./Button";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-8 flex w-full absolute z-40 ">
      <div className="flex top-6 z-10 right-4 bg-neutral-900 h-[40px] rounded-lg px-2 shadow-md fixed">
        <FaInstagram className="text-white text-3xl mr-3 my-auto" />

        <FaFacebookSquare className="text-white text-3xl my-auto" />
      </div>
      <div className=" h-[80px] flex justify-between m-auto">
        <Image
          src={logo}
          layout="fixed"
          height={90}
          width={200}
          objectFit="contain"
          className="my-auto"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Header;
