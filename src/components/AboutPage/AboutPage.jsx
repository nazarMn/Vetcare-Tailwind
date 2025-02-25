import React from 'react'
import AboutPagePaw from '/AboutPagePaw.png'
import DogAbout from '/DogAbout.png'

export default function AboutPage() {
  return (
    <div className='w-full h-[840px] flex justify-center items-center pl-[300px] pr-[200px]'>

        <div className='w-[60%] h-full'>

            <header className='w-full h-[35%] flex flex-col justify-center items-start text-star'>
                <h2 className='text-[20px] font-["Nunito"] text-[#FF7751] font-extrabold'>Our Success Story</h2>
                <p className='text-[64px] font-["Nunito"] text-[#242851] font-extrabold'>Experience Vet Clinic <br />
                And Services</p>
            </header>

            <div className='w-full h-[15%] flex justify-start items-start'>
                <p className='text-[18px] font-["Quicksand"] text-[#707283] font-regular leading-[30px]'>Aliquam erat volutpat In id fermentum augue, ut pellentesque  Maecenas at <br /> arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hakso <br /> hendrerit id. In aliquet magna nec lobortis maximus.</p>
            </div>



            <div className='w-full h-[20%] flex flex-col justify-evenly'>
                <div className='w-full flex  gap-[20px]'>
            <img src={AboutPagePaw} alt="AboutPagePaw" /> <h2 className='flex text-[18px] font-["Nunito"] text-[#242851] font-semibold'> Donec commodo scelerisque laoreet nibh hendrerit </h2>
            </div>
            <div className='w-full flex  gap-[20px]'>
            <img src={AboutPagePaw} alt="AboutPagePaw" /> <h2 className='flex text-[18px] font-["Nunito"] text-[#242851] font-semibold'> In aliquet magna nec lobortis maximus. Etiam a dolor placerat </h2>
            </div>
            <div className='w-full flex  gap-[20px]'>
            <img src={AboutPagePaw} alt="AboutPagePaw" /> <h2 className='flex text-[18px] font-["Nunito"] text-[#242851] font-semibold'> Etiam dolor nec elementum ipsum convall Maecenas </h2>
            </div>

            </div>

            <div className='w-full h-[30%] flex justify-start items-start pt-[30px]'>
            <button className='rounded-[30px] w-[267px] h-[60px] bg-gradient-to-r from-[#FFA992]  to-[#FF7852] font-["Nunito"] font-bold text-[20px] text-white shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#FF7852] hover:to-[#FFA992]'>Know More About Us</button>
            </div>

        </div>

     <div className='w-[54%] h-full flex justify-center items-center relative'>
       <div className="absolute w-185 h-185 bg-[#FFCDB8] rounded-[50%] blur-2xl opacity-50"></div>
       <img className='w-auto relative' src={DogAbout} alt="DogHome" />
     </div>
        
    </div>
  )
}
