import { useEffect } from "react";
import Header from "../Components/Header";
import moon from "../images/destination/image-moon.png";
import AOS from "aos";
import data from "../SampleData/sampleData";
import "aos/dist/aos.css";

export default function Destination() {
  useEffect(() => {
    AOS.init();
  }, []);

  let currentIndex = 0;

  const changeContent = () => {
    let value = data.destinations[currentIndex];
    console.log(value);
    document.getElementById("picture").src = value?.images?.png;
    document.getElementById("title").textContent = value?.name;
    document.getElementById("body").textContent = value?.description;
    document.getElementById("distance").textContent = value?.distance;
    document.getElementById("travel").textContent = value?.travel;
  };

  const handleMoon = () => {
    currentIndex = 0;
    changeContent();
  };
  const mars = () => {
    currentIndex = 1;
    changeContent();
  };

  const europa = () => {
    currentIndex = 2;
    changeContent();
  };

  const titan = () => {
    currentIndex = 3;
    changeContent();
  };

  return (
    <div className="min-w-full min-h-screen mobile:bg-destinationMobile tablet:bg-destinationTablet desktop:bg-destinationDesktop bg-no-repeat bg-cover overflow-hidden  select-none">
      <section className="desktop:pt-10 pl-10 ">
        <Header />
      </section>
      <section className="flex flex-col desktop:flex-row min-h-full mt-10 ">
        <section className="desktop:w-1/2 min-h-full text-white ">
          <div className="flex flex-col desktop:ml-10">
            <h1 className="text-md desktop:text-2xl font-thin text-center desktop:text-start">
              <span className="text-gray-700 font-bold mx-4">01</span>PICK YOUR
              DESTINATION
            </h1>
            <div
              className="flex items-center justify-center w-full h-full "
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
            >
              <img
                src={moon}
                className="w-1/2 mt-20 object-cover "
                id="picture"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col desktop:w-1/2 min-h-full">
          <div className="flex flex-col justify-center  text-center desktop:text-start w-full h-full  font-bellefair text-white pt-20">
            <ul className="flex justify-center desktop:justify-start text-[16px] gap-10 font-thin text-lightWhite ">
              <li
                className="hover:text-white hover:cursor-pointer"
                onClick={handleMoon}
              >
                MOON
              </li>
              <li
                className="hover:text-white hover:cursor-pointer "
                onClick={mars}
              >
                MARS
              </li>
              <li
                className="hover:text-white hover:cursor-pointer"
                onClick={europa}
              >
                EUROPA
              </li>
              <li
                className="hover:text-white hover:cursor-pointer"
                onClick={titan}
              >
                TITAN
              </li>
            </ul>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
            >
              <h2 className="text-[100px]" id="title">
                MOON
              </h2>
              <div className="w-full h-full flex justify-center desktop:justify-start">
                {" "}
                <p
                  className="text-lightWhite  tablet:max-w-lg   desktop:text-start mx-10 desktop:mx-0 "
                  id="body"
                >
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
              </div>
            </div>
            <div className="text-center border opacity-15 border-lightWhite mt-6"></div>
            <div className="flex flex-col tablet:flex-row tablet:justify-center desktop:justify-start mt-7 desktop:mt-4 gap-8 desktop:gap-16 mb-10 desktop:mb-0">
              <div className="flex flex-col">
                <h3 className="text-lightWhite text-[14px]">AVG. DISTANCE</h3>
                <h4 className="text-white font-thin text-[28px]" id="distance">
                  384,400KM
                </h4>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lightWhite text-[14px]">
                  EST. TRAVEL TIME
                </h1>
                <h2 className="text-white font-thin text-[28px]" id="travel">
                  3 DAYS
                </h2>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
