"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  const [activeSearch, setActiveSearch] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;

    if (searchQuery === "") {
      setActiveSearch([]);
      return;
    }

    // You can add additional logic here to filter or update `activeSearch` based on `searchQuery`
  };

  return (
    <div className="career_hero bg-pink-900 h-[40rem]">
      <div className="">
        <div className="container-col w-full">
          <div className="text-content absolute mt-36 ml-36">
            <div className="header__text title-widget">
              <h1 className="header hero-header">
                <span className="header_text font-avenir">
                  Hungry to make an impact?
                </span>
              </h1>
            </div>

            <div className="summary-text-widget">
              <h2 className="summary-text">
                There’s always room at our table.
              </h2>
            </div>
            <form className="w-[500px] relative mt-28">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Start your job search here"
                  className="w-full p-4 rounded-full bg-white search_bar"
                  onChange={handleSearch}
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-pink-500 rounded-full">
                  <IoSearch className="text-white text-md" />
                </button>
              </div>

              {activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-white text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                  {activeSearch.map((s, index) => (
                    <span key={index}>{s}</span>
                  ))}
                </div>
              )}
            </form>
          </div>
          <div className="Banner-bear-widget">
            <div className="banner-wrapper">
              <div className="">
                <Image
                  src="/hero_career.png"
                  alt="Banner Image"
                  layout="fill"
                  objectFit="cover"
                  className="hero_banner_pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
