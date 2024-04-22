import event from "../../assets/event.jpg"

export default function Events() {
    return (
        <div className='flex bg-blue-100 justify-center py-10'>
            <div className='w-4/5'>

                <div className='flex justify-center md:justify-normal items-end gap-5 mb-3'>
                    <h3 className='text-3xl md:text-4xl text-red-600 font-semibold h-full mb-0'>EVENTS</h3>
                    <button className='flex items-center justify-center bg-red-600 hover:bg-red-800 w-24 text-sm md:w-24 px-1 h-7 rounded text-white mb-1'>
                        All Events &gt;</button>
                </div>

                <div className='flex flex-wrap justify-center md:justify-between gap-10'>
                    <div className='w-60 rounded-md overflow-hidden bg-white transition duration-200 ease-out hover:ease-in hover:scale-105'>
                        <div className='h-60 overflow-hidden'>
                            <img src={event} alt="" className='h-full transition duration-200 ease-out hover:ease-in hover:scale-105' />
                        </div>
                        <div className='p-3'>
                            <p className='font-semibold text-gray-400'>16 Dec 2023</p>
                            <p className=''>LDCE NSS and NCC in collaboration with CEE is organising Cycling Expedition 2024</p>
                        </div>
                    </div>
                    <div className='w-60 rounded-md bg-white transition duration-200 ease-out hover:ease-in hover:scale-105'>
                        <div className='h-60 overflow-hidden'>
                            <img src={event} alt="" className='h-full transition duration-200 ease-out hover:ease-in hover:scale-105' />
                        </div>
                        <div className='p-3'>
                            <p className='font-semibold text-gray-400'>16 Dec 2023</p>
                            <p className=''>LDCE NSS and NCC in collaboration with CEE is organising Cycling Expedition 2024</p>
                        </div>
                    </div>
                    <div className='w-60 rounded-md bg-white transition duration-200 ease-out hover:ease-in hover:scale-105'>
                        <div className='h-60 overflow-hidden'>
                            <img src={event} alt="" className='h-full transition duration-200 ease-out hover:ease-in hover:scale-105' />
                        </div>
                        <div className='p-3'>
                            <p className='font-semibold text-gray-400'>16 Dec 2023</p>
                            <p className=''>LDCE NSS and NCC in collaboration with CEE is organising Cycling Expedition 2024</p>
                        </div>
                    </div>
                    <div className='w-60 rounded-md bg-white transition duration-200 ease-out hover:ease-in hover:scale-105'>
                        <div className='h-60 overflow-hidden'>
                            <img src={event} alt="" className='h-full transition duration-200 ease-out hover:ease-in hover:scale-105' />
                        </div>
                        <div className='p-3'>
                            <p className='font-semibold text-gray-400'>16 Dec 2023</p>
                            <p className=''>LDCE NSS and NCC in collaboration with CEE is organising Cycling Expedition 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
