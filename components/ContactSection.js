import Image from "next/image";
import React from "react";
import background from "../public/mil-hojas.webp";
import Button from "./Button";

const ContactSection = () => {
  return (
    <div className="w-full bg-black relative">
      <div className="absolute h-full w-full z-0">
        <Image layout="fill" src={background} objectFit="cover" />
      </div>
      <div className="bg-black w-full h-full absolute bg-opacity-50" />
      <div className="flex">
        <div className="lg:w-1/2 flex relative">
          <p className="font-serif text-2xl m-auto text-white">Contacto</p>
        </div>
        <div className="relative p-8 lg:w-1/2">
          <div className="flex flex-col mb-4">
            <label className="text-white">Nombre</label>
            <input
              placeholder="Ingresa tu nombre"
              className="border-[1px] px-2 h-[40px] mt-1 border-white bg-transparent"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white">Email</label>
            <input
              placeholder="ingresa tu mail"
              className="border-[1px] px-2 h-[40px] mt-1 border-white bg-transparent"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white">Asunto</label>
            <input
              placeholder="Escribe el asunto"
              className="border-[1px] px-2 h-[40px] mt-1 border-white bg-transparent"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white">Asunto</label>
            <textarea
              placeholder="Escribe el asunto"
              className="border-[1px] p-2 h-[80px] mt-1 border-white bg-transparent"
            />
          </div>
          <div className="flex justify-between">
            <Button className="bg-white px-8 my-auto">Enviar</Button>
            <p className="text-white my-auto">!Gracias por tu mensaje!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
