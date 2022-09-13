import { Transition } from "@headlessui/react";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Spinner from "./Spinner";

const VideoPlayer = () => {
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
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return;
    }
    startVideo();
  }, []);
  return (
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
        <div
          onClick={() => handleVideoPress()}
          className="absolute w-full h-full flex bg-black bg-opacity-30"
        >
          <FaPlay className="m-auto text-6xl text-white opacity-50" />
        </div>
      </Transition>
      <Transition
        show={videoLoading && playing}
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
        className="m-auto cursor-pointer w-full h-full object-cover"
        playsInline
        loop
        muted
        ref={videoRef}
      >
        <source src="/arbolitos.mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;