import { NAV_ITEMS } from "../../data/Navbar";
import logo from "/Hero-Images/ldce-logo.png";
import "./navbar.css";
import { useEffect, useState } from "react";
// import "./nav.js";

export default function Navbar() {
  function handleClick() {
    const div = document.querySelector(".myClass");
    const div2 = document.querySelector(".myNavContainer");

    div.classList.toggle("hidden");
    div.classList.toggle("flex");
    div2.classList.remove("-left-[100%]");
    div2.classList.add("left-0");
  }

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    // dropdown.classList.toggle("mt-[.5rem]");
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 150
        ? setStickyClass(
            "fixed top-0 z-50 mt-[1rem] bg-gray-900/70 px-[10px] py-[15px] rounded-full pl-[2rem] pr-[2rem]"
          )
        : setStickyClass("relative");
    }
  };

  const handleAdd = (e) => {
    const dropdown = e.currentTarget.dataset.dropdown;
    const dropSelect = document.querySelector(`#dropdown${dropdown}`);
    dropSelect.classList.add("active");
  };

  const handleRemove = (e) => {
    const dropdown = e.currentTarget.dataset.dropdown;
    const dropSelect = document.querySelector(`#dropdown${dropdown}`);
    dropSelect.classList.remove("active");
  };
  return (
    <>
      <div
        className={`w-3/4 flex justify-center mx-auto mt-[1rem]`}
        id="NavBar"
      >
        <ul
          className={`hidden lg:flex flex-row gap-x-[2rem] justify-between ${stickyClass} transition-all`}
        >
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.id}
              className={`text-bold text-white`}
              onMouseEnter={(e) => handleAdd(e)}
              onMouseLeave={(e) => handleRemove(e)}
              data-dropdown={index}
            >
              <a
                href={item.link}
                data-index={index}
                className={
                  window.location.pathname === item.link
                    ? `text-orange-500 font-semibold text-[20px] hover:font-semibold transition-all border-solid border-b-2 border-orange-400/50 pb-[5px]`
                    : `text-white text-[20px] hover:text-orange-300 transition-all`
                }
              >
                {item.subMenu ? (
                  <>
                    <div className="flex gap-x-[10px] px-[5px] items-center">
                      <span>{item.name}</span>
                      <img
                        src="https://img.icons8.com/ios/50/expand-arrow--v1.png"
                        alt="expand-arrow--v1"
                        className="invert h-[20px] w-[20px]"
                      />
                    </div>
                    <div
                      id={`dropdown${index}`}
                      className="dropdown bg-white/90 mt-[1rem]"
                    >
                      {item.subItems.map((item) => (
                        <>
                          <div className="flex flex-col justify-center hover:border-[1px] transition-all hover:rounded-b-lg hover:border-orange-600">
                            <span className="dropdown-link-title text-white text-center w-full bg-black px-[1rem] py-1">
                              {item.heading}
                            </span>
                            <ul role="menu" className="mt-[1rem] p-[10px]">
                              {item.items.map((item) => (
                                <li role="menuitem" key="index" className="">
                                  <a
                                    className="dropdown-link text-black text-lg mt-0  hover:text-orange-600 "
                                    href={item.link}
                                  >
                                    {item.subname}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {item.name}
                    <i className="bx bx-chevron-down" aria-hidden="true"></i>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex mx-auto w-5/6 lg:hidden justify-between items-center myMain">
        <div className="flex gap-x-[2px] items-center">
          <img
            src={logo}
            alt="LDCE"
            width={"40px"}
            height={"40px"}
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
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="mt-[2rem] transition myNavContainer w-full absolute -left-[100%]">
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
    </>
  );
}
