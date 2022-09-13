import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/logo-arbolitos-blanco.webp";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "visible";
  }, [loading]);

  return (
    <div
      className={`px-8 flex w-full z-40 transition-height duration-1000  ${
        loading ? "h-screen fixed " : "h-[90px] absolute "
      }`}
    >
      <div
        className={`w-full left-0 top-0 h-screen transition duration-1000 bg-black fixed  z-20 ${
          loading ? "opacity-100 " : "opacity-0"
        }`}
      />
      <di
        className={`top-6 z-10 p-2  flex flex-col right-4 bg-neutral-900 rounded-lg px-1 shadow-md fixed transition duration-1000 delay-300 ${
          loading ? "opacity-0 " : "opacity-100"
        }`}
      >
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
      </di>
      <div
        className={`h-[80px] flex justify-between m-auto transition duration-1000 z-[25] ${
          loading ? "animate-pulse scale-125" : ""
        }`}
      >
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
