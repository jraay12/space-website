import Header from "../Components/Header";
import sample from "../SampleData/sampleData";
import douglas from "../images/crew/image-douglas-hurley.png";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
export default function Crew() {
  useEffect(() => {
    AOS.init();
  }, []);

  let currentIndex = 0;

  const changeContent = () => {
    let value = sample.crew[currentIndex];

    document.getElementById("picture").src = value?.images?.png;
    document.getElementById("name").textContent = value?.name;
    document.getElementById("role").textContent = value?.role;
    document.getElementById("description").textContent = value?.bio;
  };

  const handleFirstCrew = () => {
    currentIndex = 0;
    changeContent();
  };
  const handleSecondCrew = () => {
    currentIndex = 1;
    changeContent();
  };
  const handleThirdCrew = () => {
    currentIndex = 2;
    changeContent();
  };
  const handleFourthCrew = () => {
    currentIndex = 3;
    changeContent();
  };
  return (
    <div className="min-w-full min-h-screen mobile:bg-CrewMobile tablet:bg-CrewTablet desktop:bg-CrewDesktop bg-no-repeat bg-cover overflow-hidden  select-none relative">
      <section className="desktop:pt-10 pl-10 ">
        <Header />
      </section>
      <section className="flex flex-col desktop:flex-row items-center  desktop:items-start mt-10 desktop:mt-18 desktop:justify-start desktop:ml-20">
        <div className="flex flex-col justify-evenly items-center desktop:items-start desktop:w-1/2 h-full gap-16 desktop:ml-10 text-center desktop:text-start ">
          <div
            className="flex justify-center tablet:justify-start tablet:px-20   w-full  desktop:px-0"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
          >
            <h1
              className="text-2xl font-thin text-white  "
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
            >
              <span className="text-gray-700 font-bold mr-4">02</span>MEET YOUR
              CREW
            </h1>
          </div>
          <div
            className="w-4/5"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
          >
            <h2
              className="text-lightWhite opacity-70 font-light text-lg mb-4"
              id="role"
            >
              PILOT
            </h2>
            <h3 className="text-white font-bellefair text-4xl mb-4" id="name">
              VICTOR GLOVER
            </h3>
            <p className="text-lightWhite " id="description">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className="space-x-4 mb-4 desktop:mb-0 mt-2 ">
            <input
              type="radio"
              name="crew"
              className="hover:cursor-pointer active:bg-red-300"
              onClick={handleFirstCrew}
            />
            <input
              type="radio"
              name="crew"
              className="hover:cursor-pointer"
              onClick={handleSecondCrew}
            />
            <input
              type="radio"
              name="crew"
              className="hover:cursor-pointer"
              onClick={handleThirdCrew}
            />
            <input
              type="radio"
              name="crew"
              className="hover:cursor-pointer"
              onClick={handleFourthCrew}
            />
          </div>
        </div>
        <img
          src={douglas}
          className="max-w-xs xldesktop:max-w-lg desktop:absolute right-40 bottom-0 bg-transparent"
          id="picture"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
      </section>
    </div>
  );
}
