"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { IoIosArrowForward } from "react-icons/io";
import ButtonMain from "./ButtonMain";

const NavBar = (): JSX.Element => {
  const [isClick, setIsClick] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activePath, setActivePath] = useState("");
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavBar = (): void => {
    setIsClick(!isClick);
  };

  const handleFocus = () => {
    setIsSearchOpen(true);
  };

  const handleBlur = () => {
    setIsSearchOpen(false);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    }
  };
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  const isActive = (path: string): string =>
    activePath === path ? "border-pink-500" : "border-transparent";

  return (
    <nav className={`sticky-nav bg-white ${show ? "show" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-black">
                <Image
                  src="/foodpanda_logo_2023.svg"
                  alt="logo"
                  width={176}
                  height={100}
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="menu-item ml-4 flex items-center space-x-4">
              <a
                href="/home"
                className={`text-sm py-5 border-t-2 rounded-none ${isActive(
                  "/"
                )} hover:border-pink-500 text-black hover:bg-white hover:text-black rounded-lg p-2 font-montserrat font-semibold`}
              >
                Home
              </a>
              <a
                href="/home/about"
                className={`text-sm py-5 border-t-2 rounded-none ${isActive(
                  "/about"
                )} hover:border-pink-500 text-black hover:bg-white hover:text-black rounded-lg p-2 font-montserrat font-semibold`}
              >
                About
              </a>
              <a
                href="/home/news"
                className={`text-sm py-5 border-t-2 rounded-none ${isActive(
                  "/newsroom"
                )} hover:border-pink-500 text-black hover:bg-white hover:text-black rounded-lg p-2 font-montserrat font-semibold`}
              >
                Newsroom
              </a>
              <a
                href="/home/panda-ads"
                className={`text-sm py-5 border-t-2 rounded-none ${isActive(
                  "/panda-ads"
                )} hover:border-pink-500 text-black hover:bg-white hover:text-black rounded-lg p-2 font-montserrat font-semibold`}
              >
                Panda Ads
              </a>
              <a
                href="/home/contact"
                className={`text-sm py-5 border-t-2 rounded-none ${isActive(
                  "/contact"
                )} hover:border-pink-500 text-black hover:bg-white hover:text-black rounded-lg p-2 font-montserrat font-semibold`}
              >
                Contact
              </a>
              <a
                href="/careers"
                className={`text-sm py-5 border-t-2 rounded-none ${isActive(
                  "/contact"
                )} hover:border-pink-500 text-black hover:bg-white hover:text-black rounded-lg p-2 font-montserrat font-semibold`}
              >
                Careers
              </a>
              {!isSearchOpen && (
                <div className="relative inline-block group">
                  <a href="#" className="">
                    <ButtonMain className="text-sm text-white bg-pink-500 rounded-full font-montserrat font-semibold">
                      Choose Location
                    </ButtonMain>
                  </a>
                  <div className="rounded-none text-sm absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <a
                      href="/kandy"
                      className="block border-b-2 border-gray-500 p-1 text-pink-500 hover:bg-gray-200 hover:text-black rounded-t-lg font-montserrat font-bold"
                    >
                      Kandy
                    </a>
                    <a
                      href="/colombo"
                      className="block border-gray-500 p-1 text-pink-500 hover:bg-gray-200 hover:text-black rounded-b-lg font-montserrat font-bold"
                    >
                      Colombo
                    </a>
                  </div>
                </div>
              )}
              <SearchBar handleFocus={handleFocus} handleBlur={handleBlur} />
            </div>
          </div>
          <div className="md:hidden flex items-center ">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-500 md:text-pink-500 focus:outline-none"
              onClick={toggleNavBar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="https://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6L18 18"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="https://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden bg-black h-[50vh] text-2xl ">
          <div className="px-8 pt-14 pb-3 space-y-1 sm:px-3">
            <a href="/home" className="text-white block bg-black rounded-lg">
              Home
            </a>
            <a
              href="/home/about"
              className="text-white block bg-black rounded-lg"
            >
              About
            </a>
            <a
              href="/home/newsroom"
              className="text-white block bg-black rounded-lg"
            >
              Newsroom
            </a>
            <a
              href="/home/panda-ads"
              className="text-white block bg-black rounded-lg"
            >
              Panda Ads
            </a>
            <a
              href="/home/contact"
              className="text-white block bg-black rounded-lg"
            >
              Contact
            </a>
            <div className="relative inline-block">
              <button
                onClick={handleToggleDropdown}
                className="text-white block bg-black rounded-lg flex items-center"
              >
                Choose Location
                <IoIosArrowForward
                  className={`ml-52 text-white text-lg transition-transform ${
                    isDropdownOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48  text-white shadow-lg rounded-lg z-10">
                  <a
                    href="/kandy"
                    className="block px-6 pb-2 hover:underline rounded-t-lg text-xl"
                  >
                    Kandy
                  </a>
                  <a
                    href="/colombo"
                    className="block px-6  hover:underline rounded-b-lg text-xl"
                  >
                    Colombo
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
