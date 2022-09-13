import Image from "next/image";
import React from "react";
import VideoPlayer from "./VideoPlayer";

const AboutSections = () => {
  return (
    <div className="flex w-full py-10 px-8">
      <div className="bg-white max-w-[1000px] m-auto">
        <div className="flex flex-col p-8 lg:flex-row md:flex-row w-auto">
          <div className="lg:w-1/2 md:w-1/2 ">
            <VideoPlayer />
          </div>
          <div className="text-center  md:w-1/2  lg:w-1/2 flex ">
            <div className="m-auto max-w-[400px]">
              <p className="font-serif text-4xl mt-8 md:mt-0 lg:mt-0">
                Sobre nosotros
              </p>
              <p className="text-lg mt-4">Nuestra historía</p>
              <p className="text-md text-gray-500 mt-2">
                Serrano Gatronómico nace en 2001, con la apertura de la primera
                unidad de negocio, Los Arbolitos, tras años de esfuerzo y
                dedidación, hemos crecido y desarrollado diferentes conceptos
                que conforman nuestro grupo gastronómico
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
