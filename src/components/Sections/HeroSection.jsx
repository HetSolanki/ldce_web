import { useState } from "react";
import "../../styles/HeroSection.css";
import Navbar from "../ui/Navbar";
import Header from "./Header";
import HomeCard from "../ui/HomeCard";

export default function HeroSection() {
  const images = ["/Hero-Images/LDCE3.png", "/Hero-Images/student.jpg"];
  const [bg, setBg] = useState(0);

  setTimeout(() => {
    if (bg == images.length - 1) {
      setBg(0);
    } else {
      setBg(bg + 1);
    }
  }, 5000);

  function handleNext() {
    if (bg == images.length - 1) {
      setBg(0);
    } else {
      setBg(bg + 1);
    }
  }
  function handlePrev() {
    if (bg == 0) {
      setBg(images.length - 1);
    } else {
      setBg(bg - 1);
    }
  }
  return (
    <>
      <div
        className="transition-all duration-[800ms]"
        style={{
          backgroundImage: `url(${images[bg]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="h-screen bg-black/50 p-10 sm:p-[2rem]">
          <Header />
          <Navbar />
          <button
            className="absolute h-full top-0 left-3 text-white text-[5rem]"
            onClick={handlePrev}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/less-than.png"
              alt="more-than"
              className="invert"
            />
          </button>
          <button
            className="absolute h-full right-3 top-0 text-white text-[5rem]"
            onClick={handleNext}
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/more-than.png"
              alt="more-than"
              className="invert"
            />
          </button>

          {/* <div className="grid grid-cols-2 lg:grid-cols-4 absolute -bottom-[5.5rem] sm:-bottom-[15rem] md:-bottom-[12rem] lg:bottom-0 mx-auto w-3/4 md:w-11/12 justify-center">
            <HomeCard imgUrl={"/Hero-Images/news.png"} title={"News"} />
            <HomeCard
              imgUrl={"/Hero-Images/startup.png"}
              title={"Startup"}
              bgColor={true}
            />
            <HomeCard
              imgUrl={"/Hero-Images/placement.png"}
              title={"Placement"}
            />
            <HomeCard
              imgUrl={"/Hero-Images/event.png"}
              title={"Event"}
              bgColor={true}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
