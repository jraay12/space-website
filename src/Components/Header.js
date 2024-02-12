import Logo from "../images/shared/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-16 font-bellefair  pl-2">
      <img src={Logo} className="h-[2rem] w-[2rem] " />
      <div className=" w-1/3 ml-20 z-20 desktop:border-[1px] border-white1 brightness-50 absolute left-16"></div>
      <section className="flex   max-w-1/2 h-full backdrop-blur-xl">
        <ul className="mobile:hidden tablet:flex text-sm gap-10 justify-center items-center text-white backdrop-blur-lg h-full backdrop-brightness-110 px-4 ">
          <li>
            <span className="font-bold mx-2">00</span>HOME
          </li>
          <li>
            <span className="font-bold mx-2">01</span>DESTINATION
          </li>
          <li>
            <span className="font-bold mx-2">02</span>CREW
          </li>
          <li>
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
