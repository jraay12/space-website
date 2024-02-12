import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function Homepage() {
  return (
    <div className="flex flex-col min-w-full min-h-screen mobile:bg-mobile  tablet:bg-tablet desktop:bg-desktop bg-no-repeat bg-cover overflow-hidden font-bellefair">
      <section className="desktop:pt-10 pl-10 ">
        <Header />
      </section>
      <section className="flex mobile:flex-col desktop:flex-row justify-center items-center max-h-full mt-10">
        <div className="flex justify-center items-start desktop:items-end w-1/2 h-96  text-lightWhite ">
          <div className="flex flex-col max-w-md ">
            <h1 className="tablet:text-[28px] mobile:text-[20px] text-center desktop:text-start">
              SO, YOU WANT TO TRAVEL TO
              <br></br>
              <span className="text-[110px] tablet:text-[150px] text-white1">
                SPACE
              </span>
            </h1>
            <p className="w-full text-center desktop:text-start">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center desktop:items-end w-1/2 h-96 bg-transparent ">
          <div className="group relative">
            <button className="w-40 h-40 rounded-full bg-white outline-none relative z-20 transition duration-300 ease-in-out hover:bg-gray-100">
              EXPLORE
            </button>
            <button className="hidden bg-white opacity-50 rounded-full group-hover:block w-60 h-60 border-2 absolute -inset-10 z-10 outline-none transition duration-300 ease-in-out"></button>
          </div>
        </div>
        <Outlet />
      </section>
    </div>
  );
}
