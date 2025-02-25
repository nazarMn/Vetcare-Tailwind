import React from 'react'

export default function MenuBar() {
  return (
    <div className="w-full h-[860px] flex ">

      <div className='w-[50%] h-full pl-[315px] flex flex-col justify-center space-y-[50px]'>
        <div className='w-full  gap-[30px] flex flex-col'>
        <h2 className='text-[100px] font-["Nunito"] text-[#242851] font-extrabold leading-[120px]'>For Your <br /> Pet’s Natural <br /> Life & Care</h2>
        <p className='text-[22px] font-["Quicksand"] text-[#707283] font-regular leading-[34px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
        sed do eiusmod tempor incididunt</p>
        </div>

        <div className='w-full flex justify-start space-x-[30px]'>
          <button className='rounded-[30px] w-[188px] h-[60px] bg-gradient-to-r from-[#FFA992]  to-[#FF7852] font-["Nunito"] font-bold text-[20px] text-white shadow-lg'>Our Services</button>
          <button className='rounded-[30px] w-[246px] h-[60px] bg-gradient-to-r from-[#C3E48F]  to-[#8EC637] font-["Nunito"] font-bold text-[20px] text-white shadow-lg'>Make Appointment</button>
        </div>
      </div>

      <div className='w-[50%] h-full'>

      </div>
      
        
    </div>
  )
}
