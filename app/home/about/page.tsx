"use client";

import CareerCard from "@/components/CareerCard";
import NavTabs from "@/components/Tabs";
import Slider from "@/components/Slider";

import React from "react";
import Tabs from "@/components/Tabs";
import Hero from "./components/Hero";
import Button from "@/components/Button";
import Image from "next/image";
import ButtonMain from "@/components/ButtonMain";

function page() {
  return (
    <>
      <Hero />

      <section className="pt-8 md:pt-0 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 md:pr-8 lg:pr-16 mt-8 md:mt-0 flex flex-col items-start justify-center">
            <aside className="p-4 md:p-0">
              <h2 className=" font-montserrat font-bold mb-4">
                From food delivery to your daily convenience companion.
              </h2>
              <p className="text-base font-normal mb-4">
                A subsidiary of Delivery Hero, foodpanda launched in Singapore
                in 2014 as a food delivery platform. Dedicated to helping
                customers get their tasty favourites fast, it quickly won the
                hearts and minds of customers in APAC.
              </p>
              <p className="text-base font-normal mb-4">
                Powered by tech and operational excellence, foodpanda has been
                growing its quick-commerce footprint in more than 400 cities
                across 11 markets in Asia – Singapore, Hong Kong, Thailand,
                Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos,
                Cambodia, and Myanmar.
              </p>
              <p className="text-base font-normal">
                Thanks to dedicated partners, riders, and a team united by
                shared values, foodpanda is now providing millions with a
                convenient way to get food and groceries in a few taps.
              </p>
            </aside>
          </div>
          <div className="md:w-1/3">
            <div className="w-full"></div>
          </div>
        </div>
      </section>

      <Slider />

      <Tabs />

      <section
        className=" lg:p-10 pt-10 pt-8 md:pt-0 md:my-0 w-full bg-gray-200 solid-bg in-view"
        id=""
      >
        <div className="content-width md:py-16 md:flex md:items-center justify-between">
          <div className="md:w-1/2 md:pr-8 lg:pr-16 mt-8 md:mt-0 order-1 flex flex-col items-end justify-center  md:order-1 md:pl-16 ">
            <aside className=" p-4 md:p-0">
              <h2 className="font-montserrat font-bold">
                Join the panda team!{" "}
              </h2>
              <p>
                Hungry for growth? There&#8217;s a seat at our table!
                We&#8217;re looking for the best in tech, marketing, sales,
                logistics, account management and more. Explore career
                opportunities at foodpanda now.
              </p>

              <div className="pt-4">
                <a href="https://careers.foodpanda.com">
                  <ButtonMain>view jobs</ButtonMain>
                </a>
              </div>
            </aside>
          </div>
          <div className="md:w-1/2 order-last md:order-0">
            <div className="w-full">
              <Image
                width="900"
                height="900"
                data-src="https://www.foodpanda.com/wp-content/uploads/2023/04/jason-goodman-Oalh2MojUuk-unsplash-1024x683.jpg"
                alt=""
                className="w-full h-full lazy-loaded"
                src="https://www.foodpanda.com/wp-content/uploads/2023/04/jason-goodman-Oalh2MojUuk-unsplash-1024x683.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
