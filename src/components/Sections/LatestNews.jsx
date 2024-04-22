import React from 'react'
import news from "../assets/news.jpeg"

export default function LatestNews() {
    return (
        <div className='flex justify-center py-10'>
            <div className='w-4/5'>

                <div className='flex justify-center md:justify-normal items-end gap-5 mb-3'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold h-full mb-0'>LATEST NEWS</h3>
                    <button className='flex items-center justify-center text-center bg-red-600 hover:bg-red-800 w-16 text-sm sm:w-24 h-7 px-2 rounded text-white mb-1'>More 
                    <span class="material-symbols-outlined text-sm ps-1">
                        arrow_forward_ios
                    </span></button>
                </div>

                <div className='flex flex-wrap justify-center md:justify-between gap-10'>
                    <div className='w-60 transition duration-200 ease-out hover:ease-in hover:scale-105'>
                        <div className='h-60 overflow-hidden'>
                            <img src={news} alt="" className='h-full transition duration-200 ease-out hover:ease-in hover:scale-105' />
                        </div>
                        <p className='font-semibold text-gray-400'>16 Dec 2023</p>
                        <p className=''>Inauguration of upgraded Library Facilities on 15 December 2023</p>
                    </div>
                    <div className='w-60 transition duration-200 ease-out hover:ease-in hover:scale-105'>
                        <div className='h-60 overflow-hidden'>
                            <img src={news} alt="" className='h-full transition duration-200 ease-out hover:ease-in hover:scale-105' />
                        </div>
                        <p className='font-semibold text-gray-400'>16 Dec 2023</p>
                        <p className=''>Inauguration of upgraded Library Facilities on 15 December 2023</p>
                    </div>
                    <div className='w-60 transition duration-200 ease-out hover:ease-in hover:scale-105'>
                        <div className='h-60 overflow-hidden'>
                            <img src={news} alt="" className='h-full transition duration-200 ease-out hover:ease-in hover:scale-105' />
                        </div>
                        <p className='font-semibold text-gray-400'>16 Dec 2023</p>
                        <p className=''>Inauguration of upgraded Library Facilities on 15 December 2023</p>
                    </div>
                    <div className='w-60 transition duration-200 ease-out hover:ease-in hover:scale-105'>
                        <div className='h-60 overflow-hidden'>
                            <img src={news} alt="" className='h-full transition duration-200 ease-out hover:ease-in hover:scale-105' />
                        </div>
                        <p className='font-semibold text-gray-400'>16 Dec 2023</p>
                        <p className=''>Inauguration of upgraded Library Facilities on 15 December 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
