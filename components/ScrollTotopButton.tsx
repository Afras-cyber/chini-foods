"use client";

import React from "react";
import ScrollToTop from "react-scroll-up";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTotopButton = () => {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={160}>
        <p className="font-bold text-white border-2 rounded border-pink-500 bg-pink-500 cursor-pointer text-2xl  p-2">
          <IoIosArrowUp />
        </p>
      </ScrollToTop>
    </div>
  );
};

export default ScrollTotopButton;
