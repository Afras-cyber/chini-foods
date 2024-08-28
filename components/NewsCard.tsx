"use client";

import Image from "next/image";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SingleNewsCard from "./SingleNewsCard";

const NewsCard = () => {
  return (
    <section className="w-full mt-4 mb-17 md:mt-16 bg-white">
      <section className="w-full mt-8 mb-10 md:mt-16 text-center">
        <div className="px-4 md:px-0">
          <h2 className="font-montserrat font-bold">Have you heard?</h2>
          <p>
            The industry is changing fast! Stay up to date with foodpanda press.
            Catch up on the latest news, updates, and reports here.
          </p>
        </div>
        <SingleNewsCard />
      </section>
    </section>
  );
};

export default NewsCard;
