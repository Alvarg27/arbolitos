import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [playing, setPlaying] = useState(false);
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
    startVideo();
  }, []);

  return (
    <div className="w-full">
      <div className="mt-[50px]">
        <video
          className="max-w-[800px] m-auto"
          playsInline
          loop
          muted
          ref={videoRef}
        >
          <source src="/arbolitos.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
