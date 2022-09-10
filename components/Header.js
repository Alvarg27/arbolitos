import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import Button from "./Button";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-8">
      <div className="w-full h-[80px] flex justify-between">
        <Image
          src={logo}
          layout="fixed"
          height={80}
          width={200}
          objectFit="contain"
          className="my-auto"
        />
        <Button className="bg-black text-white my-auto px-8 text-sm">
          Contacto
        </Button>
      </div>

      <div className="h-[1px] bg-gray-300 w-full" />
      <div className="flex justify-between mt-4">
        <div className="flex text-center text-sm font-medium">
          <p className="mr-4">Inicio</p>
          <p className="mr-4">Acerca de</p>
          <p className="mr-4">Menús</p>
        </div>
        <div className="flex">
          <FaInstagram className="mr-2 text-2xl" />
          <FaFacebookSquare className=" text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
