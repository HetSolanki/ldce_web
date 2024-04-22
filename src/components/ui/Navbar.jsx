import { NAV_ITEMS } from "../../data/Navbar";
import logo from "/Hero-Images/ldce-logo.png";

export default function Navbar() {
  function handleClick() {
    const div = document.querySelector(".myClass");
    div.classList.toggle("hidden");
    div.classList.toggle("flex");
  }
  return (
    <div className="w-3/4 mx-auto mt-[1rem]">
      <ul className="hidden lg:flex flex-row gap-x-[2rem] justify-between">
        {NAV_ITEMS.map((item, index) => (
          <li key={item.id} className={`text-bold text-white`}>
            <a
              href={item.link}
              data-index={index}
              className={
                window.location.pathname === item.link
                  ? `text-orange-400 text-[20px]`
                  : `text-white text-[20px]`
              }
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="flex lg:hidden justify-between items-center myMain"
        onClick={handleClick}
      >
        <div className="flex gap-x-[2px] items-center">
          <img
            src={logo}
            alt="LDCE"
            width={"40px"}
            height={"40px"}
            onClick={handleClick}
            className="text-center sm:w-[50px] sm:h-[50px]"
          />
          <h1 className="font-semibold max-[320px]:text-sm sm:text-3xl text-white">
            L.D. College of Engineering
          </h1>
        </div>
        <div className="flex justify-self-end">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/menu--v1.png"
            alt="menu--v1"
            className="invert"
          />
        </div>
      </div>
      <div className="mt-[2rem] transition-all myNavContainer">
        <ul className="flex-col gap-x-[2rem] justify-center hidden lg:hidden myClass text-center">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.id} className={`text-bold text-white`}>
              <a
                href={item.link}
                data-index={index}
                className={
                  window.location.pathname === item.link
                    ? `text-orange-400 text-[20px]`
                    : `text-white text-[20px]`
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
