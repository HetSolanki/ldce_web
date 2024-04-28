import { useRef, useState } from "react";
import { g1, g2, g3, g4, g5, g6, g7, g8, g9 } from "../../assets/supply";



export default function PlacementAndGallery() {
    const [imgurl, setImgUrl] = useState(g1);;

    const modal = useRef(null);

    const handleClose = () => {
        if (modal.current) {
            modal.current.classList.add('hidden');
        }
    }

    const handleImg = (g1) => {
        setImgUrl(old => g1);

        if (modal.current) {
            modal.current.classList.remove('hidden');
        }
    }

    return (
        <div className='w-full px-5 py-10'>
            <div className='flex flex-col lg:flex-row justify-between gap-4 w-full mx-auto'>

                <div className='w-full lg:w-4/6 sm:p-4'>
                    <h3 className='text-3xl text-red-600 font-semibold mb-4'>PLACEMENTS</h3>
                    <div className='w-full mb-5'>
                        <p className='flex items-center mb-2 border-b-2 border-red-600 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer'>
                            &rarr; Placement Cell Brochure
                        </p>
                        <p className='flex items-center mb-2 border-b-2 border-red-600 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer'>
                            &rarr; Placement Cell Activities
                        </p>
                        <p className='flex items-center mb-2 border-b-2 border-red-600 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer'>
                            &rarr; Facilities For Placement Drive at LDCE
                        </p>
                    </div>
                    <button className='flex items-center bg-red-600 hover:bg-red-800 py-1 px-5 rounded float-end text-white'>More &gt;</button>
                </div>

                <div className='w-full lg:w-2/6 sm:p-4'>
                    <h3 className='text-3xl font-semibold mb-4 text-red-600'>GALLERY</h3>

                    <div className='w-full flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <img src={g1} alt="" onClick={() => handleImg(g1)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                            <img src={g2} alt="" onClick={() => handleImg(g2)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                            <img src={g3} alt="" onClick={() => handleImg(g3)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                        </div>
                        <div className='flex gap-4'>
                            <img src={g4} alt="" onClick={() => handleImg(g4)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                            <img src={g5} alt="" onClick={() => handleImg(g5)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                            <img src={g6} alt="" onClick={() => handleImg(g6)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                        </div>
                        <div className='flex gap-4'>
                            <img src={g7} alt="" onClick={() => handleImg(g7)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                            <img src={g8} alt="" onClick={() => handleImg(g8)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                            <img src={g9} alt="" onClick={() => handleImg(g9)} className='w-20 h-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-24 lg:h-24 object-cover transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-zoom-in' />
                        </div>

                        {/* Modal */}
                        <div ref={modal} className="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity"></div>
                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex h-full flex-col w-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div className="h-3/4 w-4/5" style={{
                                        backgroundImage: `url(${imgurl})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain'
                                    }}>
                                        <button type="button" onClick={handleClose} className="relative float-end text-3xl font-bold text-white">X</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
