import event from "../../assets/event.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Card from "./cardnew";
import EventCard from "../ui/EventCard";

export default function Events() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex bg-blue-100 justify-center pt-[2.5rem] pb-[5rem]">
      <div className="w-4/5">
        <div className="flex justify-center items-center gap-5 mb-10">
          <h3 className="text-3xl md:text-4xl text-red-600 font-semibold h-full mb-0">
            EVENTS
          </h3>
          <button className="flex items-center justify-center bg-red-600 hover:bg-red-800 w-24 text-sm md:w-24 px-1 h-7 rounded text-white font-medium">
            All Events &rarr;
          </button>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between">
          <div style={{ width: "100%", marginInline: "auto" }}>
            <Slider {...settings} className="">
              <div style={{ marginInline: "2px" }}>
                <EventCard
                  imageUrl={event}
                  date={"16 Dec 2023"}
                  text={
                    "Inauguration of upgraded Library Facilities on 15 December 2023"
                  }
                />
              </div>
              <div style={{ marginInline: "2px" }}>
                <EventCard
                  imageUrl={event}
                  date={"16 Dec 2023"}
                  text={
                    "Inauguration of upgraded Library Facilities on 15 December 2023"
                  }
                />
              </div>
              <div style={{ marginInline: "2px" }}>
                <EventCard
                  imageUrl={event}
                  date={"16 Dec 2023"}
                  text={
                    "Inauguration of upgraded Library Facilities on 15 December 2023"
                  }
                />
              </div>{" "}
              <div>
                <EventCard
                  imageUrl={event}
                  date={"16 Dec 2023"}
                  text={
                    "Inauguration of upgraded Library Facilities on 15 December 2023"
                  }
                />
              </div>{" "}
              <div>
                <EventCard
                  imageUrl={event}
                  date={"16 Dec 2023"}
                  text={
                    "Inauguration of upgraded Library Facilities on 15 December 2023"
                  }
                />
              </div>{" "}
              <div>
                <EventCard
                  imageUrl={event}
                  date={"16 Dec 2023"}
                  text={
                    "Inauguration of upgraded Library Facilities on 15 December 2023"
                  }
                />
              </div>{" "}
              <div>
                <EventCard
                  imageUrl={event}
                  date={"16 Dec 2023"}
                  text={
                    "Inauguration of upgraded Library Facilities on 15 December 2023"
                  }
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
