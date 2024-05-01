import { useRef, useState } from "react";
import { g1, g2, g3, g4, g5, g6, g7, g8, g9 } from "../../assets/supply";

export default function PlacementAndGallery() {
  const [imgurl, setImgUrl] = useState(g1);

  const modal = useRef(null);

  const handleClose = () => {
    if (modal.current) {
      modal.current.classList.add("hidden");
    }
  };

  const handleImg = (g1) => {
    setImgUrl(() => g1);

    if (modal.current) {
      modal.current.classList.remove("hidden");
    }
  };

  return (
    <div className="w-full px-5 py-[1rem]">
      <div className="flex flex-col lg:flex-row justify-between gap-4 w-full mx-auto">
        <div className="w-full lg:w-2/4 sm:p-4">
          <h3 className="text-3xl text-red-600 font-semibold mb-4">
            PLACEMENTS
          </h3>
          <div className="w-full mb-5">
            <p className="flex items-center mb-2 py-3 transition duration-300 ease-in-out hover:bg-red-300 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer">
              &rarr; Placement Cell Brochure
            </p>
            <p className="flex items-center mb-2 py-3 transition duration-300 ease-in-out hover:bg-red-300 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer">
              &rarr; Placement Cell Activities
            </p>
            <p className="flex items-center mb-2 py-3 transition duration-300 ease-in-out hover:bg-red-300 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer">
              &rarr; Facilities For Placement Drive at LDCE
            </p>
          </div>
          <button className="flex items-center bg-red-600 hover:bg-red-800 py-1 px-5 rounded float-end text-white">
            More &gt;
          </button>
        </div>

        <div className="w-full flex flex-col item-center sm:items-start lg:w-2/4 sm:p-4">
          <h3 className="text-3xl font-semibold mb-4 text-red-600 self-center sm:self-start">
            GALLERY
          </h3>

          <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-4">
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g1} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g1)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g2} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g2)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g3} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g3)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g4} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g4)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g5} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g5)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g6} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g6)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g7} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g7)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g8} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g8)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>
            <div className="relative bg-blue-500 w-full h-36 sm:h-44 lg:h-32 md:h-56 overflow-hidden cursor-pointer">
              <img src={g9} className="object-cover w-full h-full" />
              <div onClick={() => handleImg(g9)} style={{ background: 'rgba(0,0,0,0.6)' }} className="absolute inset-0 opacity-100 sm:opacity-0 transition-opacity duration-200 ease-out hover:opacity-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  zoom_in
                </span>
              </div>
            </div>

            {/* Modal */}
            <div
              ref={modal}
              className="relative z-10 hidden"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex h-full flex-col w-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <div
                    className="h-3/4 w-4/5"
                    style={{
                      backgroundImage: `url(${imgurl})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleClose}
                      className="relative float-end text-3xl font-bold text-white"
                    >
                      <span class="material-symbols-outlined text-3xl">
                        close
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
