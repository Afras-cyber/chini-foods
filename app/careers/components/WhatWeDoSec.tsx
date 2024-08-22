import Image from "next/image";
import React from "react";
import Button from "./Button";

const WhatWeDoSec = () => {
  return (
    <div className="">
      <div className="spacer  min-h-[4rem] max-h-[4rem]"></div>
      <section className="flex flex-col md:flex-row items-center justify-between my-8 bg-gray-600 image_container">
        <div className="md:w-1/2 pl-40 items-center ">
          <h2 className="text-3xl font-bold  mb-4 font-avenir text-pink-500">
            We love what we do
          </h2>
          <p className="font-Regular font-avenir mb-6">
            foodpanda is the largest food and grocery delivery platform in Asia,
            outside of China. Operating in more than 400 cities across 11
            markets, we continue to expand and grow in our core food delivery
            business, as well as in new verticals like grocery deliveries, with
            a strong tech infrastructure at our core. From our
            restaurants-partners, cloud kitchens and cloud grocery stores —
            foodpanda is just one tap away, getting everything you need into
            your hands quickly and conveniently!
          </p>
          <div className="flex items-center">
            <Image
              src="/pau-pau-button.png"
              alt="Pau pau the panda"
              width={80}
              height={100}
              className="mr-4"
            />
            <a
              href="/pandapurpose"
              className="text-pink-500 font-bold text-lg underline"
              aria-label="Find Out More"
            >
              <Button> FIND OUT MORE</Button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 p-4 pl-8">
          <figure>
            <Image
              src="/whatwedo.jpeg"
              alt="Excited Foodpanda staff gathered around a Pau Pau the panda mascot"
              width={609}
              height={524}
              className="rounded"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoSec;
