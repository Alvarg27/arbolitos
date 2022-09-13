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
      <div className="flex flex-col  lg:flex-row-reverse mt-8">
        <div className="lg:w-1/2 my-4">
          <div className="max-w-[400px] mx-auto">
            <Image
              src={image}
              layout="responsive"
              height={3}
              width={5}
              objectFit="cover"
              className=" rounded-lg"
            />
          </div>
        </div>
        <div className="text-center lg:w-1/2 flex">
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
                  Como llegar
                </Button>
              </a>
            </Link>
            <p className="text-gray-500 mx-auto max-w-[200px] text-xs text-center mt-2">
              Carretera Tula-Refineria km 31.79, El Llano 2da Secc, 42803 Tula
              de Allende, Hgo.
            </p>

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
