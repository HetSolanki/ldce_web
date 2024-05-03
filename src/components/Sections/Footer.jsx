import {
  g8,
  facebook,
  linked,
  youtube,
  twitter,
  instagram,
  logo,
} from "../../assets/supply";

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${g8})`,
      }}
      className="w-full bg-no-repeat bg-center bg-cover text-white mt-[1rem] p-[1rem]"
    >
      <div className="w-4/5 flex flex-wrap justify-center gap-16 mx-auto pt-[2rem]">
        <div className="w-56 h-5/6 flex flex-col gap-1">
          <p className="text-2xl font-semibold border-gray border-b-2 mb-4">
            Quick Links
          </p>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            CAMPUS MAP
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            USEFUL LINKS
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            HDFC ONLINE PAYMENT
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            STUDENT INDUCTION
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            PROGRAM
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            TEAM
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            AICTE FEEDBACK
          </a>
        </div>
        <div className="w-56 h-5/6 flex flex-col gap-1">
          <p className="text-2xl font-semibold border-gray border-b-2 mb-4">
            About
          </p>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            History
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            ADMISSION PROCEDURE
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            DIRECTIONS
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            FEES &amp; DESCRIPTION
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            COMMITIES
          </a>
        </div>
        <div className="w-56 h-5/6 flex flex-col gap-1">
          <p className="text-2xl font-semibold border-gray border-b-2 mb-4">
            Important Info
          </p>
          <a
            href=""
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            RIGHT TO INFO. ACT
          </a>
          <a
            href=""
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            MOU
          </a>
          <a
            href=""
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            TEQIP
          </a>
          <a
            href=""
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            MANDATORY DISCLOSURE
          </a>
          <a
            href=""
            className="text-gray-500 hover:text-white transition duration-200 ease-in-out"
          >
            TENDER NOTICE
          </a>
        </div>
        <div className="w-56 h-5/6 flex flex-col">
          <img src={logo} alt="" className="w-[50px] h-[50px] mb-[10px]" />
          <p className="font-semibold mb-3">
            L.D. College of Engineering Opp Gujarat University, Navrangpura,
            Ahmedabad - 380015. GUJARAT INDIA
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-full">
              <img className="w-full h-full" src={facebook} alt="youtube" />
            </a>
            <a href="#" className="w-10 h-full">
              <img className="w-full h-full" src={linked} alt="youtube" />
            </a>
            <a href="#" className="w-16 h-full">
              <img className="w-full h-full" src={youtube} alt="youtube" />
            </a>
            <a href="#" className="w-10 h-full">
              <img className="w-full h-full" src={instagram} alt="instagram" />
            </a>
            <a href="#" className="w-10 h-full">
              <img className="w-full h-full" src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto text-center py-4">
        2024 © LDCE. All rights Reserved | Design by LDCE Team
      </div>
    </div>
  );
}
