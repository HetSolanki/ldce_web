import department from "../assets/department.png";
import excellence from "../assets/excellence.png";
import medal from "../assets/medal.png";

export default function AcademicUnit() {
    return (
        <div className='flex bg-blue-100 justify-center py-10'>
            <div className='bg-blue-100 w-11/12 md:w-4/5'>
                <h3 className='text-3xl font-semibold mb-5 text-center sm:text-start'>ACADEMIC UNITS</h3>

                <div className='flex flex-col items-center sm:flex-row justify-center sm:justify-between gap-10'>
                    <div className='border-2 border-black transition duration-200 ease-in hover:ease-in text-sky-950 hover:bg-sky-950 hover:text-white w-4/6 sm:w-1/4 h-48 flex flex-col justify-center items-center cursor-pointer mb-4 md:mb-0'>
                        <img className='w-3/12 sm:w-2/5' src={department} alt="" />
                        <p className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>DEPARTMENTS</p>
                    </div>
                    <div className='border-2 border-black transition duration-200 ease-in hover:ease-in text-sky-950 hover:bg-sky-950 hover:text-white w-4/6 sm:w-1/4 h-48 flex flex-col justify-center items-center cursor-pointer mb-4 md:mb-0'>
                        <img className='w-3/12 sm:w-2/5' src={excellence} alt="" />
                        <p className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>CENTER OF EXCELLENCE</p>
                    </div>
                    <div className='border-2 border-black transition duration-200 ease-in hover:ease-in text-sky-950 hover:bg-sky-950 hover:text-white w-4/6 sm:w-1/4 h-48 flex flex-col justify-center items-center cursor-pointer'>
                        <img className='w-3/12 sm:w-2/5' src={medal} alt="" />
                        <p className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>ACHIEVEMENTS</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
