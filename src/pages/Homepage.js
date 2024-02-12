import Header from "../Components/Header";

export default function Homepage() {
  return (
    <div className="min-w-full min-h-screen mobile:bg-mobile  tablet:bg-tablet desktop:bg-desktop bg-no-repeat bg-cover">
      <section className="desktop:pt-10 pl-10 ">
        <Header />
      </section>
    </div>
  );
}
