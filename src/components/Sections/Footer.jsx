import g8 from "../../assets/g8.jpeg"



export default function Footer() {
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${g8})` }} className='w-full bg-no-repeat bg-center bg-cover text-white'>
            <div className='w-4/5 flex flex-wrap justify-center gap-16 mx-auto pt-4'>
                <div className='w-56 h-5/6 flex flex-col gap-1'>
                    <p className='text-2xl font-semibold border-gray border-b-2 mb-4'>Quick Links</p>
                    <a href="#" className='text-gray-500 hover:text-white'>CAMPUS MAP</a>
                    <a href="#" className='text-gray-500 hover:text-white'>USEFUL LINKS</a>
                    <a href="#" className='text-gray-500 hover:text-white'>HDFC ONLINE PAYMENT</a>
                    <a href="#" className='text-gray-500 hover:text-white'>STUDENT INDUCTION</a>
                    <a href="#" className='text-gray-500 hover:text-white'>PROGRAM</a>
                    <a href="#" className='text-gray-500 hover:text-white'>TEAM</a>
                    <a href="#" className='text-gray-500 hover:text-white'>AICTE FEEDBACK</a>
                </div>
                <div className='w-56 h-5/6 flex flex-col gap-1'>
                    <p className='text-2xl font-semibold border-gray border-b-2 mb-4'>About</p>
                    <a href="#" className='text-gray-500 hover:text-white'>History</a>
                    <a href="#" className='text-gray-500 hover:text-white'>ADMISSION PROCEDURE</a>
                    <a href="#" className='text-gray-500 hover:text-white'>DIRECTIONS</a>
                    <a href="#" className='text-gray-500 hover:text-white'>FEES &amp; DESCRIPTION</a>
                    <a href="#" className='text-gray-500 hover:text-white'>COMMITIES</a>
                </div>
                <div className='w-56 h-5/6 flex flex-col gap-1'>
                    <p className='text-2xl font-semibold border-gray border-b-2 mb-4'>Important Info</p>
                    <a href="" className='text-gray-500 hover:text-white'>RIGHT TO INFO. ACT</a>
                    <a href="" className='text-gray-500 hover:text-white'>MOU</a>
                    <a href="" className='text-gray-500 hover:text-white'>TEQIP</a>
                    <a href="" className='text-gray-500 hover:text-white'>MANDATORY DISCLOSURE</a>
                    <a href="" className='text-gray-500 hover:text-white'>TENDER NOTICE</a>
                </div>
                <div className='w-56 h-5/6 flex flex-col'>
                    <p className='font-semibold mb-3'>L.D. College of Engineering Opp Gujarat University, Navrangpura, Ahmedabad - 380015. GUJARAT INDIA</p>
                    <div>
                        <p>Phone No: 079 2630 2887</p>
                        <p>Email:ldce-abad-dte@gujarat.gov.in</p>
                    </div>
                </div>
            </div>

            <div className='w-4/5 mx-auto text-center py-4'>
                2024 © LDCE. All rights Reserved | Design by LDCE Team
            </div>
        </div>
    )
}
