import Image from "next/image";
import React from "react";

const AboutSections = () => {
  return (
    <div className="my-10 mx-8">
      <p className="font-serif text-3xl text-center">
        BIENVENIDO A LOS ARBOLITOS RESTAURANTE
      </p>

      <div className="flex flex-col  lg:flex-row-reverse mt-8">
        <div className="lg:w-1/2 my-4">
          <div className="w-[400px] mx-auto">
            <Image
              src="/pulpo.webp"
              layout="responsive"
              height={3}
              width={5}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-center lg:w-1/2 flex">
          <div className="m-auto">
            <p className="font-serif text-2xl">Sobre nosotros</p>
            <p className="text-md mt-4">Nuestra historía</p>
            <p className="text-sm text-gray-500">
              Serrano Gatronómico nace en 2001, con la apertura de la primera
              unidad de negocio, Los Arbolitos, tras años de esfuerzo y
              dedidación, hemos crecido y desarrollado diferentes conceptos que
              conforman nuestro grupo gastronómico
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
