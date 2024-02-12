import { useNavigate } from "react-router-dom";
import Logo from "../images/shared/logo.svg";

export default function Header() {
  const navigate = useNavigate();

  const handleDestination = () => {
    navigate("/Destination");
  };

  const handleHome = () => {
    navigate("/home");
  };
  return (
    <header className="flex items-center justify-between w-full h-16 font-bellefair  pl-2">
      <img src={Logo} className="h-[2rem] w-[2rem] " />
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
          <li className="hover:cursor-pointer hover:scale-x-110 duration-300 ease-in">
            <span className="font-bold mx-2">02</span>CREW
          </li>
          <li className="hover:cursor-pointer hover:scale-x-110 duration-300 ease-in">
            <span className="font-bold mx-2">03</span>TECHNOLOGY
          </li>
        </ul>
      </section>
      <div className="tablet:hidden mobile:flex justify-center items-center mx-4 h-full">
        <button className="text-white text-2xl">&#9776;</button>
      </div>
    </header>
  );
}
