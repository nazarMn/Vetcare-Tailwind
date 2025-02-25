import React from 'react'
import DogHome from '/DogHome.png';

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
          <button className='rounded-[30px] w-[188px] h-[60px] bg-gradient-to-r from-[#FFA992]  to-[#FF7852] font-["Nunito"] font-bold text-[20px] text-white shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#FF7852] hover:to-[#FFA992]'>Our Services</button>
          <button className='rounded-[30px] w-[246px] h-[60px] bg-gradient-to-r from-[#C3E48F]  to-[#8EC637] font-["Nunito"] font-bold text-[20px] text-white shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#8EC637] hover:to-[#C3E48F]'>Make Appointment</button>
        </div>
      </div>
<div className='w-[50%] h-full flex justify-center items-center relative'>
  <div className="absolute w-185 h-185 bg-[#FFCDB8] rounded-[50%] blur-2xl opacity-50"></div>
  <img className='w-auto relative' src={DogHome} alt="DogHome" />
</div>

        
    </div>
  )
}
