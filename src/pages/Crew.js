import Header from "../Components/Header";
import sample from "../SampleData/sampleData";
import victor from "../images/crew/image-victor-glover.png";

export default function Crew() {
  return (
    <div className="min-w-full min-h-screen mobile:bg-CrewMobile tablet:bg-CrewTablet desktop:bg-CrewDesktop bg-no-repeat bg-cover overflow-hidden  select-none">
      <section className="desktop:pt-10 pl-10 ">
        <Header />
      </section>
      <section className="flex flex-col desktop:flex-row items-center  desktop:items-start mt-10 desktop:mt-20  desktop:justify-center">
        <div className="flex flex-col justify-evenly items-center desktop:items-start desktop:w-1/2 h-full gap-16 desktop:ml-10 text-center desktop:text-start ">
          <div className="flex justify-center tablet:justify-start tablet:px-20   w-full  desktop:px-0">
            <h1 className="text-2xl font-thin text-white  ">
              <span className="text-gray-700 font-bold mr-4">02</span>MEET YOUR
              CREW
            </h1>
          </div>
          <div className="w-3/4">
            <h2 className="text-lightWhite opacity-70 font-light text-lg mb-4">
              PILOT
            </h2>
            <h3 className="text-white font-bellefair text-4xl mb-4">
              VICTOR GLOVER
            </h3>
            <p className="text-lightWhite">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
          <div className="space-x-4 mb-4 desktop:mb-0">
            <input type="radio" name="crew" className="hover:cursor-pointer" />
            <input type="radio" name="crew" className="hover:cursor-pointer" />
            <input type="radio" name="crew" className="hover:cursor-pointer" />
            <input type="radio" name="crew" className="hover:cursor-pointer" />
          </div>
        </div>
        <img src={victor} className="max-w-xs" />
      </section>
    </div>
  );
}
