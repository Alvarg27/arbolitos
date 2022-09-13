import Image from "next/image";
import React from "react";
import image from "../public/restaurant.webp";
import logo from "../public/logo-arbolitos-blanco.webp";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="relative bg-black">
      <div className="flex flex-col  mt-8">
        <div className="text-center mx-auto flex">
          <div className="m-auto flex flex-col">
            <div className="m-auto">
              <Image
                src={logo}
                layout="fixed"
                height={90}
                width={200}
                objectFit="contain"
                className="m-auto"
                priority={true}
              />
            </div>
            <div className="flex mx-auto">
              <FaPhone className="text-white my-auto mr-2" />
              <p className="text-gray-500 my-auto">773 724 5263</p>
            </div>
            <Link href="https://g.page/losarbolitosrestaurante?share">
              <a target="_blank">
                <Button className="bg-white mx-auto mt-8 px-8 ">
                  ¿Cómo llegar?
                </Button>
              </a>
            </Link>

            <p className="text-md mt-4 font-serif text-white">
              Horario de apertura
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Lunes - Viernes: 8:00 a.m. - 10:00 p.m.
            </p>
            <p className="text-sm text-gray-500">
              Sabado: 8:00 a.m. - 11:00 p.m.
            </p>
            <p className="text-sm text-gray-500">
              Domingo: 8:00 a.m. - 6:00 p.m.
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-center pt-8 pb-4">
        Powered by <b>tectify</b>
      </p>
    </div>
  );
};

export default Footer;
