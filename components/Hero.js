import { Transition } from "@headlessui/react";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const [playing, setPlaying] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const videoRef = useRef(null);

  const startVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };

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

  return (
    <div className="w-full">
      <div className="mt-[50px]">
        <div className="w-full max-w-[800px] h-[300px] lg:h-[400px] m-auto bg-gray-200 relative">
          <Transition
            show={!playing}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute w-full h-full flex bg-black bg-opacity-30">
              <FaPlay className="m-auto text-6xl text-white opacity-50" />
            </div>
          </Transition>
          <Transition
            show={videoLoading}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute w-full h-full flex bg-black bg-opacity-30">
              Loading
            </div>
          </Transition>
          <video
            onClick={() => handleVideoPress()}
            poster="/poster.webp"
            className="m-auto cursor-pointer w-full h-full object-cover"
            playsInline={true}
            loop
            muted
            ref={videoRef}
            onLoadStart={() => setVideoLoading(true)}
            onLoadedData={() => setVideoLoading(false)}
            preload={true}
          >
            <source src="/arbolitos.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
