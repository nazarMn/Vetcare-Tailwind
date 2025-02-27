import React from 'react'
import CallToActionDog from '/CallToActionDog.png'

export default function CallToActionPage() {
  return (
    <div className='w-full h-[800px] flex justify-center items-center'>
        <div className='w-[1490px] h-[521px] flex bg-[#FFECE4] rounded-[50px]'>   
        <div className='w-[60%] h-full'>
            <header className='w-full h-[60%] flex flex-col justify-end items-start gap-[30px] pl-[95px]'>
                <h2 className='text-[64px] font-["Nunito"] text-[#000000] font-extrabold'>Professional Pet Care</h2>
                <p className='font-["Quicksand"] text-[#707283] font-regular text-[18px]/[30px]'>Pet owners trust us to look after the needs of their beloved companions. <br /> We are specialists committed to delivering the very highest of veterinary <br /> care and affection.</p>
            </header>

            <div className='w-full h-[40%] flex justify-start items-center pl-[95px]'>
                <button className='w-[221px] h-[60px] bg-gradient-to-r from-[#FFA992]  to-[#FF7852]  rounded-[30px] font-["Nunito"] shadow-lg font-bold text-[20px] text-white cursor-pointer hover:bg-gradient-to-r hover:from-[#FF7852] hover:to-[#FFA992]'>Contact Us Now</button>
                </div>
        </div>

        <div className='w-[40%] h-full flex justify-center items-center relative'>
             <div className="absolute w-125 h-125 bg-[#FFCDB8] rounded-[50%] blur-xl opacity-80"></div>
                  <img className='w-auto relative' src={CallToActionDog} alt="DogHome" />
            </div>

            </div>

    </div>
  )
}
