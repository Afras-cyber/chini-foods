import CareerCard from "@/components/CareerCard";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import about from "./about/page";
import Button from "@/components/Button";
import ButtonMain from "@/components/ButtonMain";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="Top-text relative text-left  bg-white " id="">
        <div className="section-in md:w-full">
          <div className="p-4 md:p-0 w-full"></div>
          <div className=" m-4 md:m-0 grid-cols-1">
            <h2 className="pt-12 font-montserrat font-bold ">
              We’re here to help you live life the panda way.
              <br />
              Spend more time doing what you love &#8211;we &#8217;ll take
              <br />
              care of tasty meals, fresh groceries and new flavours.
            </h2>
          </div>
        </div>
      </section>

      <section
        className="Delivery lg:p-10 pt-10 md:pt-0 md:my-0 w-full bg-white in-view"
        id=""
      >
        <div className="content-width md:py-16 md:flex md:items-center justify-between">
          <div className="md:w-1/2 md:pr-8 lg:pr-16 mt-8 md:mt-0 order-1 flex flex-col items-start justify-center  md:order-1 md:pl-16 ">
            <aside className=" p-4 md:p-0">
              <h2 className="font-montserrat font-bold">
                Meet the next generation of delivery!{" "}
              </h2>
              <p>
                What makes quick commerce quick? We stand for swift personalised
                delivery solutions for our customers, partners and employees.
                Learn how we empower authentic lifestyles and drive innovation
                across the globe.
              </p>
              <div className="pt-4">
                <a href="#">
                  <ButtonMain>read our Story</ButtonMain>
                </a>
              </div>
            </aside>
          </div>
          <div className="md:w-1/2 order-0 md:order-0">
            <div className="w-full">
              <Image
                width="900"
                height="900"
                data-src="https://www.foodpanda.com/wp-content/uploads/2023/02/fp-home.jpg"
                alt=""
                className="w-full h-full lazy-loaded"
                src="https://www.foodpanda.com/wp-content/uploads/2023/02/fp-home.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <GetApp />
      <CareerCard />
      <NewsCard />

      <section className="w-full h-6 md:h-8 bg-white " id=""></section>

      <section
        className="Team lg:m-4 mt-10 lg:p-10 pt-10 md:pt-0 md:my-0 w-full bg-white in-view"
        id=""
      >
        <div className="content-width md:py-16 md:flex md:items-center justify-between">
          <div className="md:w-1/2 md:pr-8 lg:pr-16 mt-8 md:mt-0 order-1 flex flex-col items-start justify-center  md:order-0 ">
            <aside className=" p-4 md:p-0">
              <h2 className="font-montserrat font-bold">Feed your team. </h2>
              <p className=" ">
                Treat your talented team to their favourite meals. Let them
                pick! Explore flexible corporate food delivery options and tasty
                employee perks.
              </p>
              <div className="pt-4">
                <a href="https://www.foodpanda.sg/corporate">
                  <ButtonMain>learn more</ButtonMain>
                </a>
              </div>
            </aside>
          </div>
          <div className="md:w-1/2 sm:w-full order-0 md:order-1">
            <div className="w-full ">
              <Image
                width="100"
                height="100"
                data-src="https://www.foodpanda.com/wp-content/uploads/2023/02/foodpanda-home-3.jpg"
                alt=""
                className="w-full h-full lazy-loaded"
                src="https://www.foodpanda.com/wp-content/uploads/2023/02/foodpanda-home-3.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
