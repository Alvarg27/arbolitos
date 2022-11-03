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
          <div className="m-auto flex flex-col w-full relative">
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
            <div>
              <div className="flex flex-col bg-neutral-900 rounded-xl p-4 flex-1 m-4">
                <p className="text-white font-serif text-lg">Tula, Hgo.</p>
                <p className="text-xs mb-4 text-gray-500 text-center max-w-[80%]  mx-auto ">
                  Carretera Tula-Refineria km 31.79, El Llano 2da Secc, 42803
                  Tula de Allende, Hgo.
                </p>
                <Link href="https://g.page/losarbolitosrestaurante?share">
                  <a target="_blank">
                    <Button className="bg-white mx-auto mb-2 px-8 text-sm ">
                      ¿Cómo llegar?
                    </Button>
                  </a>
                </Link>
                <div className="flex mx-auto">
                  <FaPhone className="text-white my-auto mr-2 text-sm" />
                  <p className="text-gray-500 my-auto text-sm">773 724 5263</p>
                </div>
              </div>
              <div className="flex flex-col bg-neutral-900 rounded-xl p-4 flex-1 m-4">
                <p className="text-white font-serif text-lg">
                  Juriquilla, Qro.
                </p>
                <p className="text-xs mb-4 text-gray-500 text-center max-w-[80%]  mx-auto ">
                  San Luis Potosí - Santiago de Querétaro 61, Nuevo Juriquilla,
                  76230 Juriquilla, Qro.
                </p>
                <Link href="https://goo.gl/maps/uhpPwcwdaD7AxGMB9">
                  <a target="_blank">
                    <Button className="bg-white mx-auto mb-2 px-8 text-sm ">
                      ¿Cómo llegar?
                    </Button>
                  </a>
                </Link>
                <div className="flex mx-auto">
                  <FaPhone className="text-white my-auto mr-2 text-sm" />
                  <p className="text-gray-500 my-auto text-sm">446 131 0811</p>
                </div>
              </div>
            </div>
            <p className="text-md mt-4 font-serif text-white">
              Horario de apertura
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Lunes - Jueves: 8:30 a.m. - 10:00 p.m.
            </p>
            <p className="text-sm text-gray-500">
              Viernes - Sabado: 8:30 a.m. - 12:00 p.m.
            </p>
            <p className="text-sm text-gray-500">
              Domingo: 8:30 a.m. - 8:00 p.m.
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
