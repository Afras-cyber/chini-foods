import Image from "next/image";
import React from "react";

const GetApp = () => {
  return (
    <section
      className="lg:p-10 pt-10 pt-8 md:pt-0 md:my-0 w-full bg-white in-view"
      id=""
    >
      <div className="content-width md:py-16 md:flex md:items-center justify-between">
        <div className="md:w-1/2 md:pr-8 lg:pr-16 mt-8 md:mt-0 order-1 flex flex-col items-start justify-center md:order-0">
          <aside className="p-4 md:p-0">
            <h2 className="font-montserrat font-bold">
              Taste the convenience.
            </h2>
            <p>
              Try us out! Delicious food and speedy groceries are at your
              fingertips. Go ahead, download foodpanda now.
            </p>
            <div className="pt-4">
              <a
                href="https://apps.apple.com/app/foodpanda-food-delivery/id758103884?l=en"
                className="inline-block mr-2"
              >
                <Image
                  src="/app-apple.png"
                  alt="Image Button"
                  width={130}
                  height={100}
                  className=" max-w-full h-auto hover:opacity-75 transition duration-200 mt-4"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.global.foodpanda.android"
                className="inline-block mr-2"
              >
                <Image
                  src="/app-google.png"
                  alt="Image Button"
                  width={150}
                  height={100}
                  className="max-w-full h-auto hover:opacity-75 transition duration-200 mt-4"
                />
              </a>
              <a
                href="https://appgallery.huawei.com/app/C101812091"
                className="inline-block mr-2"
              >
                <Image
                  src="/app-huawei.png"
                  alt="Image Button"
                  width={150}
                  height={100}
                  className="max-w-full h-auto hover:opacity-75 transition duration-200 mt-4"
                />
              </a>
            </div>
          </aside>
        </div>
        <div className="md:w-1/2 order-0 md:order-1">
          <div className="w-full">
            <Image
              width="900"
              height="900"
              src="/foodpanda-home-2-1024x576.jpg"
              alt=""
              className="w-full h-full lazy-loaded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
