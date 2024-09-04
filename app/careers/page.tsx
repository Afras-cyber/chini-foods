import React from "react";
import Hero from "./components/Hero";
import WhatWeDoSec from "./components/WhatWeDoSec";

const page = () => {
  return (
    <div>
      <Hero />

      <div className="">
        <div className="spacer min-h-[4rem] max-h-[4rem]"></div>

        <div className="">
          <section className="paragraph-block">
            <div className="paragraph-block_text ">
              <h3 className="font-semibold pl-72 font-avenir para-header">
                &quot;To be the most loved everyday food and groceries
                destination&quot;
              </h3>
              <p className="paragraph-hero-text mt-2 pl-40 pr-80 font-avenir mr-12 font-Regular">
                ...that’s our mission at foodpanda. Whether it’s by delivering
                food on our signature pink bikes, providing insights into the
                newest food trends, or showcasing local favorite restaurants,
                we’re on a mission to redefine how food, people, culture, and
                tech are connected.
              </p>
              <p className="paragraph-hero-text mt-2 pl-40 pr-80 font-avenir font-Regular">
                Our parent company, Delivery Hero, is a global leader in the
                food delivery industry processing over 3 million orders every
                day and operating in 40+ markets in the world, with 18,000
                employees and approximately 500,000+ restaurant partners.
              </p>
            </div>
          </section>
        </div>
      </div>

      <WhatWeDoSec />
    </div>
  );
};

export default page;
