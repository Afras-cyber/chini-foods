import Image from "next/image";
import React, { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const SingleNewsCard = () => {
  return (
    <section className="w-full mt-4 md:mt-16 bg-white ">
      <section className="w-full mt-8 md:mt-16 text-center ">
        <div className="swiper-container w-full h-90 sm:h-128 relative overflow-hidden mt-8 md:mt-16 ">
          <Swiper
            loop={true}
            speed={1000}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            pagination={{ clickable: true }}
          >
            {[
              {
                link: "https://www.foodpanda.com/newsroom/foodpanda-philippines-partners-with-jia-to-extend-support-to-partner-vendors/",
                imgSrc:
                  "https://www.foodpanda.com/wp-content/uploads/2024/07/IMG_5209-1-scaled.jpg",
                title:
                  "foodpanda Philippines partners with Jia to extend support to partner vendors",
                date: "30 Jul 2024",
                categories: ["Merchants", "Press Releases"],
              },
              {
                link: "https://www.foodpanda.com/newsroom/foodpanda-singapore-awards-10500-in-bursaries-to-delivery-partners-and-their-families/",
                imgSrc:
                  "https://www.foodpanda.com/wp-content/uploads/2024/07/Jonathan-Borenstein-Head-of-Logistics-foodpanda-Singapore-L-and-Toshit-Bharara-Managing-Director-foodpanda-Singapore-R-launching-panda-hearts-scaled.jpg",
                title:
                  "foodpanda Singapore awards $10,500 in bursaries to delivery partners and their families",
                date: "30 Jul 2024",
                categories: ["Press Releases", "Riders"],
              },
              {
                link: "https://www.foodpanda.com/newsroom/foodpanda-partners-with-cybersource-to-drive-business-growth-in-asia-pacific-through-enhanced-customer-checkout-experience/",
                imgSrc:
                  "https://www.foodpanda.com/wp-content/uploads/2024/05/02.jpg",
                title:
                  "foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced customer checkout experience",
                date: "25 Jul 2024",
                categories: ["Food delivery", "Press Releases", "Q-commerce"],
              },
              {
                link: "https://www.foodpanda.com/newsroom/foodpanda-launches-curated-meals-for-solo-diners-with-meal-for-one-across-asia/",
                imgSrc:
                  "https://www.foodpanda.com/wp-content/uploads/2024/07/mfo1.png",
                title:
                  "foodpanda launches curated meals for solo diners with ‘meal for one’ across Asia",
                date: "11 Jul 2024",
                categories: ["Food delivery", "Press Releases"],
              },
              {
                link: "https://www.foodpanda.com/newsroom/foodpanda-introduces-new-pandapro-perks-with-unlimited-free-delivery-and-surprise-deals/",
                imgSrc:
                  "https://www.foodpanda.com/wp-content/uploads/2024/07/pandapro.png",
                title:
                  "foodpanda introduces new pandapro perks with unlimited free delivery and surprise deals",
                date: "10 Jul 2024",
                categories: ["Food delivery", "pandago", "Press Releases"],
              },
              {
                link: "https://www.foodpanda.com/newsroom/foodpanda-and-carlsberg-join-hands-to-enhance-quick-commerce-experience-for-customers-in-asia/",
                imgSrc:
                  "https://www.foodpanda.com/wp-content/uploads/2024/07/foodpanda-x-Carlsberg.jpg",
                title:
                  "foodpanda and Carlsberg join hands to enhance quick-commerce experience for customers in Asia",
                date: "04 Jul 2024",
                categories: ["Merchants", "Press Releases", "Q-commerce"],
              },
            ].map((slide, index) => (
              <SwiperSlide
                key={index}
                className="text-left bg-white animate-slide-left "
              >
                <a href={slide.link} title={slide.title}>
                  <figure className="h-48 overflow-hidden mb-4">
                    <img
                      src={slide.imgSrc}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center hover:animate-zoom-cover"
                    />
                  </figure>
                </a>
                <aside className="z-10">
                  {slide.categories.map((category, catIndex) => (
                    <a
                      key={catIndex}
                      className="uppercase text-sm leading-3 font-bold mr-4  text-pink-500"
                      href={`https://www.foodpanda.com/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/`}
                    >
                      {category}
                    </a>
                  ))}
                  <a
                    href={slide.link}
                    title={slide.title}
                    className="hover:text-pink-500  "
                  >
                    <h5 className="newscard py-4 w-5/6 font-semibold font-montserrat ">
                      {slide.title}
                    </h5>
                    <p className="newscard_para text-sm my-0 py-0 font-Regular hover:text-pink-500 ">
                      {slide.date}
                    </p>
                  </a>
                </aside>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default SingleNewsCard;
