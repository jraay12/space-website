import Header from "../Components/Header";
import sample from "../SampleData/sampleData";
import first from "../images/technology/image-launch-vehicle-portrait.jpg";
import firstland from "../images/technology/image-launch-vehicle-landscape.jpg";
export default function Technology() {
  let currentIndex = 0;

  const changeContent = () => {
    let value = sample.technology[currentIndex];
    document.getElementById("portrait").src = value?.images?.portrait;
    document.getElementById("landscape").src = value?.images?.landscape;
    document.getElementById("body").textContent = value?.description;
    document.getElementById("position").textContent = value?.name;
  };

  const firstB = () => {
    currentIndex = 0;
    changeContent();
  };

  const secondB = () => {
    currentIndex = 1;
    changeContent();
  };

  const thirdB = () => {
    currentIndex = 2;
    changeContent();
  };
  return (
    <div className="h-screen  mobile:bg-TechnologyMobile   tablet:bg-TechnologyTablet desktop:bg-TechnologyDesktop bg-no-repeat bg-cover overflow-auto select-none  relative">
      <section className="desktop:pt-10 pl-10 ">
        <Header />
      </section>
      <section className="flex flex-col-reverse desktop:flex-row w-full h-full  desktop:px-20 justify-center items-center">
        <div className="desktop:w-1/2  h-96 ">
          <div className="flex flex-col  w-full h-full gap-20">
            <h1 className="text-2xl  text-white absolute top-20">
              <span className="text-gray-700 font-bold mx-4">03</span>SPACE
              LUNCH 101
            </h1>
            <div className="flex flex-col desktop:flex-row h-full w-full gap-10 ">
              <div className="flex items-center justify-center desktop:flex-col gap-6 ">
                <button
                  className="w-[3rem] h-[3rem]  rounded-full active:bg-white text-white outline focus:bg-white focus:text-black"
                  onClick={firstB}
                >
                  1
                </button>
                <button
                  className="w-[3rem] h-[3rem]  rounded-full active:bg-white text-white outline focus:bg-white focus:text-black bg-transparent"
                  onClick={secondB}
                >
                  2
                </button>
                <button
                  className="w-[3rem] h-[3rem]  rounded-full active:bg-white text-white outline focus:bg-white focus:text-black bg-transparent"
                  onClick={thirdB}
                >
                  3
                </button>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lightWhite text-xs font-light text-center desktop:text-start mb-4">
                  THE TERMINOLOGY...
                </h1>
                <h2
                  className="font-bellefair text-4xl text-white text-center desktop:text-start"
                  id="position"
                >
                  LAUNCH VEHICLE
                </h2>
                <p
                  className="text-lightWhite text-lg mt-5 font-bellefair text-center desktop:text-start px-5 desktop:px-0 desktop:w-2/3"
                  id="body"
                >
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center desktop:w-1/2  h-max relative mb-10 ">
          <img
            src={first}
            className="hidden desktop:inline-block aspect-square w-96"
            id="portrait"
          />
          <img
            src={firstland}
            className="w-full desktop:hidden  inline-block"
            id="landscape"
          />
        </div>
      </section>
    </div>
  );
}
