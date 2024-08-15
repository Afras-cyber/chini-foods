import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

const Slider = () => {
  return (
    <section className="w-full mt-4 md:mt-16 bg-gray-200 lg:pl-20 ">
      <div className="custom-navigation absolute left-44 right-50 pt-80 flex justify-between z-10  ">
        <div className="custom-prev cursor-pointer">
          <GrFormPreviousLink size={32} color="#C21760" />
        </div>
        <div className="custom-pagination m-1"></div>
        <div className="custom-next cursor-pointer">
          <GrFormNextLink size={32} color="#C21760" />
        </div>
      </div>

      <div className="slider--regular content-width">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="swiper-container"
        >
          <SwiperSlide className="flex transition duration-1000 md:min-h-96 overflow-hidden">
            <div className="flex flex-col justify-between md:flex-row md:min-h-96 w-full ">
              <div className="flex flex-col justify-end m-6 md:p-0 md:pb-24 md:w-1/2">
                <h3 className="font-montserrat font-bold">
                  Customers come first
                </h3>
                <p className="font-montserrat ">
                  We&apos;re far more than just swift food delivery. foodpanda
                  enables customers to pick up their takeaway meals, skip boring
                  grocery trips and send parcels. Customer needs are the core
                  and centre of our business. Download the app to experience
                  true convenience.
                </p>
              </div>
              <div
                className=" sm:w-full md:w-1/2 h-full min-h-64 md:min-h-96 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://www.foodpanda.com/wp-content/uploads/2023/02/fp-about-2-900x506.jpg')",
                }}
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex transition duration-1000 md:min-h-96 overflow-hidden">
            <div className="flex flex-col justify-between md:flex-row md:min-h-96 w-full">
              <div className="flex flex-col justify-end m-6 md:p-0 md:pb-24 md:w-1/2">
                <h3 className="font-montserrat font-bold">
                  Our riders are our heroes
                </h3>
                <p className="font-montserrat ">
                  We&apos;re here to provide exciting opportunities and empower
                  work flexibility. Learn more about our riders&apos; journey or
                  sign up to become one.
                </p>
              </div>

              <div
                className=" md:w-1/2 h-full min-h-64 md:min-h-96 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://www.foodpanda.com/wp-content/uploads/2022/11/Rider-Safety-900x619.jpeg')",
                }}
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex transition duration-1000 md:min-h-96 overflow-hidden">
            <div className="flex flex-col justify-between md:flex-row md:min-h-96 w-full">
              <div className=" flex flex-col justify-end m-6 md:p-0 md:pb-24 md:w-1/2">
                <h3 className="font-montserrat font-bold">
                  Growing with our partners
                </h3>
                <p className="font-montserrat ">
                  We work with the best restaurants and stores. We support our
                  partners every step of the way and empower their growth. Ready
                  to take your business to the next level?
                </p>
              </div>

              <div
                className=" md:w-1/2 lg:w-full h-full min-h-64 md:min-h-96 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://www.foodpanda.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-11-at-20.04.29-900x679.png')",
                }}
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
