import { g1, g2, g3, g4, g5, g6, g7, g8, g9 } from "../assets/supply";


export default function PlacementAndGallery() {
    return (
        <div className='w-full px-5'>
            <div className='flex flex-col sm:flex-row justify-between gap-4 w-full mx-auto'>

                <div className='w-full md:w-4/6 p-4'>
                    <h3 className='text-3xl text-red-600 font-semibold mb-4'>PLACEMENTS</h3>
                    <div className='w-full'>
                        <p className='flex items-center mb-2 border-b-2 border-red-600 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer'>
                            <span className="material-symbols-outlined mb-0">
                                arrow_forward
                            </span> Placement Cell Brochure
                        </p>
                        <p className='flex items-center mb-2 border-b-2 border-red-600 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer'>
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span> Placement Cell Activities
                        </p>
                        <p className='flex items-center mb-2 border-b-2 border-red-600 text-lg sm:text-xl md:text-2xl font-medium cursor-pointer'>
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span> Facilities For Placement Drive at LDCE
                        </p>
                    </div>
                    <button className='flex items-center bg-red-600 hover:bg-red-800 py-1 px-5 rounded float-end text-white'>More   
                    <span className="material-symbols-outlined ps-2 text-sm">
                        arrow_forward_ios
                    </span></button>
                </div>

                <div className='w-full md:w-2/6 p-4'>
                    <h3 className='text-3xl font-semibold mb-4 text-red-600'>GALLERY</h3>

                    <div className='w-full flex flex-col items-center gap-4 p-4'>
                        <div className='flex justify-center gap-4'>
                            <img src={g1} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                            <img src={g2} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                            <img src={g3} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                        </div>
                        <div className='flex justify-center gap-4'>
                            <img src={g4} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                            <img src={g5} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                            <img src={g6} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                        </div>
                        <div className='flex justify-center gap-4'>
                            <img src={g7} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                            <img src={g8} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                            <img src={g9} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
