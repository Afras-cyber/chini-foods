import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("next"),
    onSwipedRight: () => handleSwipe("prev"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleSwipe = (direction) => {
    const tabs = ["tab1", "tab2", "tab3", "tab4", "tab5", "tab6"];
    const currentIndex = tabs.indexOf(activeTab);
    let newIndex;

    if (direction === "next") {
      newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    }

    setActiveTab(tabs[newIndex]);
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      <div className="text-center mb-4">
        <h2 className="font-montserrat font-bold">Our Values</h2>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="flex w-full flex-wrap justify-center  ">
          <ul className="flex flex-wrap text-sm font-medium text-center text-pink-500 dark:text-black ">
            <li className="me-2 list-tab ">
              <a
                href="#"
                className={`tab  font-montserrat inline-block px-4 py-3 rounded-full border-2 border-pink-500 ${
                  activeTab === "tab1"
                    ? "text-white bg-black"
                    : "hover:text-white hover:bg-pink-500 dark:hover:text-white"
                }`}
                onClick={(e) => handleTabClick(e, "tab1")}
              >
                start with customer, end with customer
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap text-sm font-medium text-center text-pink-500 dark:text-black ">
            <li className="me-2 list-tab-2">
              <a
                href="#"
                className={`tab font-montserrat inline-block px-4 py-3 rounded-full border-2 border-pink-500 ${
                  activeTab === "tab2"
                    ? "text-white bg-black"
                    : "hover:text-white hover:bg-pink-500 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={(e) => handleTabClick(e, "tab2")}
              >
                prioritise, decide, deliver
              </a>
            </li>
            <li className="me-2 list-tab-2">
              <a
                href="#"
                className={`tab font-montserrat inline-block px-4 py-3 rounded-full border-2 border-pink-500 ${
                  activeTab === "tab3"
                    ? "text-white bg-black"
                    : "hover:text-white hover:bg-pink-500 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={(e) => handleTabClick(e, "tab3")}
              >
                own it end-to-end
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-full flex-wrap justify-center">
          <ul className="flex flex-wrap text-sm font-medium text-center text-pink-500 dark:text-black">
            <li className="me-2 list-tab">
              <a
                href="#"
                className={`tab font-montserrat inline-block px-4 py-3 rounded-full border-2 border-pink-500 ${
                  activeTab === "tab4"
                    ? "text-white bg-black"
                    : "hover:text-white hover:bg-pink-500 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={(e) => handleTabClick(e, "tab4")}
              >
                challenge the status quo
              </a>
            </li>
            <li className="me-2 list-tab">
              <a
                href="#"
                className={`tab font-montserrat inline-block px-4 py-3 rounded-full border-2 border-pink-500 ${
                  activeTab === "tab5"
                    ? "text-white bg-black"
                    : "hover:text-white hover:bg-pink-500 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={(e) => handleTabClick(e, "tab5")}
              >
                we before me
              </a>
            </li>
            <li className="me-2 list-tab">
              <a
                href="#"
                className={`tab font-montserrat font-bold inline-block px-4 py-3 rounded-full border-2 border-pink-500 ${
                  activeTab === "tab6"
                    ? "text-white bg-black"
                    : "hover:text-white hover:bg-pink-500 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={(e) => handleTabClick(e, "tab6")}
              >
                plan for tomorrow, focus on today
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="tab-content flex flex-col items-center"
        {...swipeHandlers}
      >
        {activeTab === "tab1" && (
          <div className="flex flex-col md:flex-row items-center lg:pl-60">
            <img
              src="/1.webp"
              alt="Tab 1 Image"
              className="md:w-1/2 h-full min-h-64 md:min-h-96 h-full bg-cover md:mr-4 "
            />
            <div className="md:ml-4 text-center md:text-left lg:pr-80">
              <h2 className="font-montserrat font-bold mb-2 lg:w-3/4">
                start with customer, end with customer
              </h2>
              <p className="text-gray-700 lg:w-3/4">
                We want our consumers, vendors, riders, employees (including
                prospective ones) – the customers who make up our ecosystem – to
                keep coming back to the product, service, and experience we
                create. To achieve this, we keep them at the centre of every
                decision and action we take.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="flex flex-col md:flex-row items-center lg:pl-60">
            <img
              src="/2.webp"
              alt="Tab 2 Image"
              className="md:w-1/2 h-full min-h-64 md:min-h-96 h-full bg-cover md:mr-4"
            />
            <div className="md:ml-4 text-center md:text-left lg:pr-80">
              <h2 className="font-montserrat font-bold mb-2">
                prioritise, decide, deliver
              </h2>
              <p className="text-gray-700">
                We are disciplined about focusing on what matters. When we face
                uncertainty, we put considered thought behind our actions and
                continue to deliver because it is only through execution that we
                learn, iterate, and improve.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="flex flex-col md:flex-row items-center lg:pl-60">
            <img
              src="/3.webp"
              alt="Tab 3 Image"
              className="md:w-1/2 h-full min-h-64 md:min-h-96 h-full bg-cover md:mr-4"
            />
            <div className="md:ml-4 text-center md:text-left lg:pr-80">
              <h2 className="font-montserrat font-bold mb-2">
                own it end-to-end
              </h2>
              <p className="text-gray-700">
                We take pride in our work by delivering on our commitments. When
                a problem stretches past our areas of responsibility or
                expertise, we bridge the gap, we collaborate and seek out
                resources to get the job done.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab4" && (
          <div className="flex flex-col md:flex-row items-center lg:pl-60">
            <img
              src="/4.webp"
              alt="Tab 4 Image"
              className="md:w-1/2 h-full min-h-64 md:min-h-96 h-full bg-cover md:mr-4"
            />
            <div className="md:ml-4 text-center md:text-left lg:pr-80">
              <h2 className="font-montserrat font-bold mb-2">
                challenge the status quo
              </h2>
              <p className="text-gray-700">
                Our environment is ever-changing and we meet these changes
                head-on by adopting a progress-driven mindset. We value diverse
                inputs, we push the envelope to open up possibilities for
                innovation, growth and ultimately staying ahead – for our
                customers, for foodpanda, and ourselves.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab5" && (
          <div className="flex flex-col md:flex-row items-center lg:pl-60">
            <img
              src="/5.webp"
              alt="Tab 5 Image"
              className="md:w-1/2 h-full min-h-64 md:min-h-96 h-full bg-cover md:mr-4"
            />
            <div className="md:ml-4 text-center md:text-left lg:pr-80">
              <h2 className="font-montserrat font-bold mb-2">we before me</h2>
              <p className="text-gray-700">
                We put the needs of the team before our own because we
                understand that it is in creating a collective environment of
                support and inclusion, that we achieve true excellence.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab6" && (
          <div className="flex flex-col md:flex-row items-center lg:pl-60">
            <img
              src="/6.webp"
              alt="Tab 6 Image"
              className="md:w-1/2 h-full min-h-64 md:min-h-96 h-full bg-cover md:mr-4"
            />
            <div className="md:ml-4 text-center md:text-left lg:pr-80">
              <h2 className="font-montserrat font-bold mb-2">
                plan for tomorrow, focus on today
              </h2>
              <p className="text-gray-700">
                We take a balanced approach to work and life by planning for the
                future, while remaining focused on the present. This ensures
                sustainable growth and keeps us grounded in reality.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
