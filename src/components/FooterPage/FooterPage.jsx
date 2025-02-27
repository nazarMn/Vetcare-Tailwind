import React from 'react'

export default function FooterPage() {
  return (
    <div className="w-full h-[500px] flex justify-center items-end">

        <div className="w-[1440px] h-[415px] flex flex-col ">

            <div className="w-full h-[65%]   flex justify-between items-start">

            <div className="w-[30%] h-full flex flex-col justify-start items-start gap-[30px]">
                <h2 className="text-[36px]"><samp className='text-[#242851] font-["Nunito"] font-extrabold'>Vet</samp><samp className='text-[#FF7852] font-["Nunito"] font-extrabold'>care</samp></h2>
                <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Quisque id leo non dolor tempor elementum quis <br /> ac urna. Nam pharetra, ligula eget finibus <br /> dignissim, turpis ipsum sollicitudin</p>

                <div class="relative w-full max-w-md">
  <input
    type="text"
    placeholder="Email address"
    class="w-full h-[60px] rounded-[30px] focus:outline-none pl-4 bg-[#FFFFFF] shadow-2xl text-[18px] font-['Quicksand'] font-regular"
  />
  <button
    class="absolute right-2 top-1 bottom-1 px-4 bg-gradient-to-r w-[143px] h-[50px] from-[#FFA992]  to-[#FF7852] rounded-[30px] shadow-lg text-[18px] font-['Nunito'] font-bold text-white cursor-pointer hover:bg-gradient-to-r hover:from-[#FF7852] hover:to-[#FFA992]"
  >
    Subscribe
  </button>
</div>

            </div>



            <div className="w-[23.33%] h-full flex flex-col justify-start items-start gap-[25px] pl-[100px]">
             <h2 className="text-[28px] font-['Nunito'] font-extrabold text-[#242851]">Address</h2>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>+23 384 485 29 </p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>vet@shamim.com </p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>123 king street, Melbrown <br /> Victoria 3000, Australia </p>



                </div>






                <div className="w-[23.33%] h-full flex flex-col justify-start items-start gap-[15px]  pl-[100px]">
             <h2 className="text-[28px] font-['Nunito'] font-extrabold text-[#242851]">Links</h2>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>About Us </p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Groomers </p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Contact Us</p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Privacy Policy</p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Tearms</p>



                </div>





                <div className="w-[23.33%] h-full flex flex-col justify-start items-start gap-[15px]  pl-[100px]">
             <h2 className="text-[28px] font-['Nunito'] font-extrabold text-[#242851]">Opening Hours</h2>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Monday-Tuesday 09:00-18:00 </p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Wednesday 09:00-18:00 </p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Thrusday-Friday 09:00-18:00 </p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Saturday 10:00-17:00 </p>
             <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Sunday 10:30-16:00 </p>



                </div>

            </div>
            <div className="w-full h-[35%]   flex justify-center items-end pb-[24px]">
                <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>© Copyright 2021 - 2024 | Pet Theme by Md Shamim Hossain | All Rights Reserved</p>
            </div>

        </div>


    </div>
  )
}
