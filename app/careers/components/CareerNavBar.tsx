"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

const CareerNavBar = (): JSX.Element => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-white career-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-black">
                <Image
                  src="/foodpanda_logo_2023.svg"
                  alt="logo"
                  width={120}
                  height={90}
                />
              </a>
            </div>
          </div>
          <div className="container ml-52 flex items-center space-x-8 font-avenir font-Regular">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("aboutUs")}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span>About us</span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openDropdown === "aboutUs" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "aboutUs" && (
                <div className="absolute left-0 mt-2 w-48 p-4 bg-white text-black rounded-lg shadow-lg z-50 rounded-md">
                  <a
                    href="/about/about-me"
                    className="block px-0 py-2 hover:bg-gray-200 border-b-2"
                  >
                    About Me
                  </a>
                  <a
                    href="/about/about-company"
                    className="block px-0 py-2 hover:bg-gray-200"
                  >
                    About Company
                  </a>
                </div>
              )}
            </div>

            <div className="relative ">
              <button
                onClick={() => toggleDropdown("whyFoodpanda")}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span>Why foodpanda</span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openDropdown === "whyFoodpanda" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "whyFoodpanda" && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                  <a
                    href="/why-foodpanda/mission"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Our Mission
                  </a>
                  <a
                    href="/why-foodpanda/vision"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Our Vision
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("jobs")}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span>Jobs</span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openDropdown === "jobs" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "jobs" && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                  <a
                    href="/jobs/open-positions"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Open Positions
                  </a>
                  <a
                    href="/jobs/careers"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Careers
                  </a>
                </div>
              )}
            </div>

            <a href="/" className="">
              Location
            </a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("stories")}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span>pandaStories</span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openDropdown === "stories" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "stories" && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                  <a
                    href="/stories/customer"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Customer Stories
                  </a>
                  <a
                    href="/stories/business"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Business Stories
                  </a>
                </div>
              )}
            </div>

            <div className="">
              <div className="ml-20">
                <a href="/saved-jobs" className="flex space-x-2 text-pink-500">
                  <span>Saved jobs</span>
                  <FaRegStar className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CareerNavBar;
