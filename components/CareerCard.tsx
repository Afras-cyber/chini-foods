import Image from "next/image";
import React from "react";
import Button from "./Button";

const CareerCard = () => {
  return (
    <section
      className="lg:p-10 pt-10 pt-8 md:pt-0 md:my-0 w-full bg-white solid-bg in-view"
      id=""
    >
      <div className="content-width md:py-16 md:flex md:items-center justify-between">
        <div className="md:w-1/2 md:pr-8 lg:pr-16 mt-8 md:mt-0 order-1 flex flex-col items-start justify-center  md:order-1 md:pl-16 ">
          <aside className=" p-4 md:p-0">
            <h2 className="font-montserrat font-bold">
              Find the job you&apos;d love
            </h2>
            <p>Hungry to make a difference? There’s a seat at our table!</p>
            <p>
              Find out how we connect tech, passions, projects and people –
              explore international career opportunities at foodpanda.
            </p>
            <div className="pt-4">
              <a href="https://careers.foodpanda.com">
                <Button>Join us!</Button>
              </a>
            </div>
          </aside>
        </div>
        <div className="md:w-1/2 order-0 md:order-0">
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
  );
};

export default CareerCard;
