import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import usePageOffset from "../hooks/usePageOffset";
import { FaPlay } from "react-icons/fa";
import Spinner from "./Spinner";

const KidsSections = () => {
  const [playing, setPlaying] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [elementOffsetY, setElementOffsetY] = useState();
  const { offsetY } = usePageOffset();
  const about = useRef();

  const videoRef = useRef(null);

  const pauseVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  };
  const handleVideoPress = () => {
    if (!playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };

  const startVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      ) &&
      !isShowing
    ) {
      return;
    }
    if (!isShowing) {
      pauseVideo();
    }
    startVideo();
  }, [isShowing]);

  useEffect(() => {
    setElementOffsetY(about.current.offsetTop);
  }, []);

  useEffect(() => {
    setIsShowing(
      offsetY > elementOffsetY - window.innerHeight &&
        offsetY < elementOffsetY + about.current.clientHeight
    );
  }, [offsetY]);

  return (
    <div ref={about} className="flex w-full py-20 px-4">
      <div className="bg-neutral-900 max-w-[1200px] m-auto rounded-lg">
        <div className="flex flex-col px-4 pt-4 pb-8 lg:flex-row-reverse md:flex-row-reverse w-auto">
          <div className="lg:w-1/2 md:w-1/2 ">
            <div className="w-full max-w-[800px] h-[300px] lg:h-[400px] m-auto bg-gray-200 relative rounded-lg overflow-hidden">
              <div className="absolute w-full h-full flex">
                <Spinner />
              </div>
              <Transition
                show={!playing}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  onClick={() => handleVideoPress()}
                  className="absolute w-full h-full flex bg-black bg-opacity-30"
                >
                  <FaPlay className="m-auto text-6xl text-white opacity-50" />
                </div>
              </Transition>
              <Transition
                show={false && playing}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  onClick={() => handleVideoPress()}
                  className="absolute w-full h-full flex bg-black bg-opacity-30"
                >
                  <Spinner />
                </div>
              </Transition>
              <video
                onClick={() => handleVideoPress()}
                poster="/poster.webp"
                className="m-auto cursor-pointer w-full h-full object-cover relative"
                playsInline
                loop
                muted
                ref={videoRef}
              >
                <source src="/arbolitos-kids.mp4" />
              </video>
            </div>
          </div>
          <div className="text-center  md:w-1/2  lg:w-1/2 flex ">
            <div className="m-auto max-w-[400px]">
              <p className="font-serif text-4xl mt-8 md:mt-0 lg:mt-0 text-white">
                Nuestra área de niños
              </p>
              <p className="text-lg mt-4 text-white">Disfruta en familia.</p>
              <p className="text-md text-gray-500 mt-2">
                Ven a Arbloitos y disfruta de nuestro carrito de juegos para
                niños. Contamos con juegos de mesa, Ipads, Nintendo Switchs,
                Legos , Colores y más.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsSections;
