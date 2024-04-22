import logo from "/Hero-Images/ldce-logo.png";

export default function Header() {
  return (
    <>
      <div className="justify-center text-white text-[8px] md:text-base bg-red-600 top-0 absolute w-full left-0 flex gap-x-[5px] items-center font-semibold lg:justify-end md:pr-[1rem] py-[2px]">
        <a href="#">STUDY IN GUJARAT |</a>
        <a href="#">GRIEVANCE |</a>
        <a href="#">SITEMAP |</a>
        <a href="#">STUDENT SECTION |</a>
        <a href="#">CONTACT</a>
      </div>
      <div className="hidden lg:flex gap-x-[1rem] justify-center lg:justify-start items-center w-3/4 mx-auto mt-[2rem]">
        <img src={logo} alt="LDCE" width={"70px"} height={"70px"} />
        <h1 className="font-semibold text-xl sm:text-3xl mt-[5px] text-white">
          L.D. College of Engineering
        </h1>
      </div>
    </>
  );
}
