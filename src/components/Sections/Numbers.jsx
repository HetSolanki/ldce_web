import React from 'react'
import ldce from "../../assets/ldce.webp";

export default function Numbers() {
    return (
        <div
            className='h-[450px] sm:h-[400px]'
            style={{
                position: 'relative',
                backgroundImage: `url(${ldce})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            >

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(5px)'
                }}
                className='flex flex-col sm:flex-row items-center justify-center text-white gap-20'
                >
                <div className=''>
                    <p className='text-5xl text-center mb-2'>10,000+</p>
                    <p className='text-l text-center'>STUDENTS</p>
                </div>
                <div>
                    <p className='text-5xl text-center mb-2'>1000+</p>
                    <p className='text-l text-center'>FACULTY</p>
                </div>
                <div>
                    <p className='text-5xl text-center mb-2'>14+</p>
                    <p className='text-l text-center'>DEPARTMENTS</p>
                </div>

            </div>
        </div>

    )
}
