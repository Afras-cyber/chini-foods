import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="footer bg-footer bg-black h-full text-white ">
      <div className="section-in xs:p-4 lg:p-24">
        <div className="footer__logo w-full">
          <Image
            width="180"
            height="100"
            src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg"
            alt="foodpanda logo"
          />
        </div>
        <div className="md:flex mt-4 md:mt-12">
          <div className="menu-footer-container">
            <ul className="footer__navigation w-full text-inverted grid grid-cols-2 mm:grid-cols-3 gap-2 md:gap-12 mb-8">
              <li className="font-montserrat font-bold ">
                <a href="#">Navigate</a>
                <ul className="sub-menu font-sans font-semibold">
                  <li className="text-sm-footer pt-4 ">
                    <a href="https://www.foodpanda.com/" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li className="text-sm-footer ">
                    <a href="https://www.foodpanda.com/about-foodpanda/">
                      About
                    </a>
                  </li>
                  <li className="text-sm-footer ">
                    <a href="https://www.foodpanda.com/contact/">Contact</a>
                  </li>
                  <li className="text-sm-footer ">
                    <a href="https://www.foodpanda.com/newsroom/">Newsroom</a>
                  </li>
                </ul>
              </li>
              <li className=" ">
                <a href="#" className="pb-4 font-bold font-montserrat ">
                  Collaborate
                </a>
                <ul className="sub-menu font-sans font-semibold">
                  <li className=" text-sm-footer pt-4 ">
                    <a href="https://careers.foodpanda.com/">Explore careers</a>
                  </li>
                  <li className="text-sm-footer ">
                    <a href="https://www.foodpanda.com/careers/riders/">
                      Become a rider
                    </a>
                  </li>
                  <li className="text-sm-footer ">
                    <a href="https://www.foodpanda.com/panda-ads/">
                      Try panda ads
                    </a>
                  </li>
                  <li className="text-sm-footer ">
                    <a
                      title="Feed your team with foodpanda corporate"
                      href="https://www.foodpanda.sg/corporate"
                    >
                      Feed your team
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:ml-12"></div>
        </div>

        <div className="footer__bottom md:flex md:justify-between mt-4 md:mt-12">
          <ul className="mt-4 md:mt-12 text-inverted text-sm-footer font-sans ">
            <li>
              Copyright &copy; 2024{" "}
              <a
                href="https://https://foodpanda.com"
                target="_blank"
                className="no-underline"
              >
                foodpanda
              </a>
            </li>
          </ul>{" "}
          <div className="menu-footer ">
            <ul className="text-sm-footer font-sans  mt-4 md:mt-12 flex md:justify-end md:text-right text-inverted">
              <li className="privacy">
                <a href="https://www.foodpanda.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
