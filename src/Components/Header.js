import { useNavigate } from "react-router-dom";
import Logo from "../images/shared/logo.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDestination = () => {
    navigate("/Destination");
  };

  const navigateToCrew = () => {
    navigate("/Crew");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const navigateToTechnology = () => {
    navigate("/Technology");
  };
  return (
    <header className="flex items-center justify-between w-full h-16 font-bellefair  pl-2 ">
      <button className="text-white text-2xl " onClick={handleOpen}>
        &#9776;
      </button>
      <img src={Logo} className="h-[2rem] w-[2rem] order-last -translate-x-3" />
      <div className=" flex-grow  ml-20 z-20 desktop:border-[1px] border-white1 brightness-50  "></div>
      <section className="mobile:hidden tablet:flex justify-end px-4 items-center  max-w-2xl h-full backdrop-blur-xl  ">
        <ul className="mobile:hidden tablet:flex text-[16px] gap-10 justify-center items-center text-white backdrop-blur-lg h-full backdrop-brightness-110  ">
          <li
            onClick={handleHome}
            className="hover:cursor-pointer hover:scale-x-110 duration-300 ease-in"
          >
            <span className="font-bold mx-2">00</span>HOME
          </li>
          <li
            onClick={handleDestination}
            className="hover:cursor-pointer hover:scale-x-110 duration-300 ease-in"
          >
            <span className="font-bold mx-2">01</span>DESTINATION
          </li>
          <li
            className="hover:cursor-pointer hover:scale-x-110 duration-300 ease-in"
            onClick={navigateToCrew}
          >
            <span className="font-bold mx-2">02</span>CREW
          </li>
          <li
            className="hover:cursor-pointer hover:scale-x-110 duration-300 ease-in"
            onClick={navigateToTechnology}
          >
            <span className="font-bold mx-2">03</span>TECHNOLOGY
          </li>
        </ul>
      </section>
      {open ? (
        <div className="inset-0 absolute tablet:hidden bg-transparent backdrop-blur-xl w-2/3 max-h-screen z-40 backdrop-brightness-50">
          <div className="flex justify-end w-full h-20 text-white text-2xl  pr-10">
            <button onClick={handleClose}>&#88;</button>
          </div>
          <ul className="flex flex-col text-white gap-4 m-4 mt-10 h-full text-start">
            <li onClick={handleHome}>00 HOME</li>
            <li onClick={handleDestination}>01 DESTINATION</li>
            <li onClick={navigateToCrew}>02 CREW</li>
            <li onClick={navigateToTechnology}>03 TECHNOLOGY</li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
