import Image from "next/image";
import React from "react";
import background from "../public/mil-hojas.webp";
import Button from "./Button";

const ContactSection = () => {
  return (
    <div className="w-full bg-black h-[600px] sticky top-0">
      <div className="absolute h-full w-full z-0">
        <Image
          priority={true}
          layout="fill"
          src={background}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ContactSection;
