import Image from "next/image";
import React from "react";
import logo from "../public/logo-arbolitos-blanco.webp";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-8 flex w-full absolute z-40 ">
      <div className=" top-6 z-10 p-2  flex flex-col right-4 bg-neutral-900 rounded-lg px-1shadow-md fixed">
        <Link href="https://www.instagram.com/losarbolitosrestaurante/">
          <a target="_blank">
            <FaInstagram className="text-white text-3xl mb-3 my-auto" />
          </a>
        </Link>
        <Link href="https://es-la.facebook.com/losarbolitosrestaurante/">
          <a target="_blank">
            <FaFacebookSquare className="text-white text-3xl my-auto" />
          </a>
        </Link>
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
