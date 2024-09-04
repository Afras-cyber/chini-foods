import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative lg:h-[60vh] w-full overflow-hidden xs:h-[30vh]  ">
      <Image
        src="/about-foodpanda.jpeg"
        width={7000}
        height={150}
        className="absolute inset-0 w-full h-full object-cover object-center "
        alt="About Foodpanda"
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 flex justify-start items-end text-white px-4 md:px-16 xl:px-20 py-4 md:py-8 xl:py-12">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-montserrat font-bold lg:pl-12 lg:pb-16 xs:pl-4">
          About
          <br /> foodpanda
        </h1>
      </div>
    </div>
  );
};

export default Hero;
