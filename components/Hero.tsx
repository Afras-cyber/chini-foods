import React from "react";

const Hero = () => {
  return (
    <div className="relative  w-full overflow-hidden xs:h-[30vh] lg:h-[60vh] ">
      <video
        className="absolute inset-0 w-full h-full object-cover object-center "
        autoPlay
        muted
        loop
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/887673049/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d2fb16e953bceb3394adfc2bdb6da0705e4fcfd9e7e60047193939fd2a7a7e46"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute  content-width h-full flex left-16 xs:left-6 md:p-16 xl:pb-20 justify-start items-end text-white">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-montserrat font-bold lg:pl-4  xs:pb-6 xs:pl-2 ">
          food and groceries
          <br /> in a tap
        </h1>
      </div>
    </div>
  );
};

export default Hero;
