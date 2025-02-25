import React from 'react'
import Card1 from '/Card1.png'
import Card2 from '/Card2.png'
import Card3 from '/Card3.png'
import Card4 from '/Card4.png'

export default function ServicesPage() {
  return (
    <div className='w-full h-[935px] flex justify-center items-center '>

<div className='w-[1490px] h-[758px] bg-[#FFECE4] rounded-[50px]'>

    <header className='w-full h-[30%] flex flex-col justify-end items-center gap-[10px]'>
        <p className='text-[20px] font-["Nunito"] text-[#FF7751] font-extrabold'>Care For Your Pet</p>
        <h2 className='text-[64px] font-["Nunito"] text-[#242851] font-extrabold'>What We Do</h2>


    </header>

    <div className='w-full h-[70%] flex justify-evenly items-center'>

    <div className='w-[292px] h-[374px] bg-[#FFFFFF] rounded-[30px] flex flex-col justify-center items-center shadow-lg'>

        <div className='w-full h-[40%] flex justify-center items-center '>
            <div className='w-[100px] h-[100px] rounded-[50%] bg-gradient-to-r from-[#B8DEFF]  to-[#1D97FF] shadow-lg flex justify-center items-center'>
            <img  src={Card1} alt="Card1" />
            </div>
            </div>

        <div className='w-full h-[60%] flex justify-center items-center flex-col text-center gap-[20px]'>
            <h2 className='text-[26px] font-["Nunito"] text-[#242851] font-extrabold'>Pet Grooming</h2>
            <p className='text-[18px] font-["Quicksand"] text-[#707283] font-regular'>There are many variatio <br /> of passage of Lorem for <br /> a Ipsum available</p>
            </div>

        </div>




        <div className='w-[292px] h-[374px] bg-gradient-to-r from-[#FFBBA9]  to-[#FF6236] rounded-[30px] flex flex-col justify-center items-center shadow-lg'>

<div className='w-full h-[40%] flex justify-center items-center '>
    <div className='w-[100px] h-[100px] rounded-[50%] bg-[#FFFFFF] shadow-lg flex justify-center items-center'>
    <img  src={Card2} alt="Card2" />
    </div>
    </div>

<div className='w-full h-[60%] flex justify-center items-center flex-col text-center gap-[20px]'>
    <h2 className='text-[26px] font-["Nunito"] text-[#242851] font-extrabold'>Veterinary</h2>
    <p className='text-[18px] font-["Quicksand"] text-[#FFFFFF] font-regular'>There are many variatio <br /> of passage of Lorem for <br /> a Ipsum available</p>
    </div>

</div>



<div className='w-[292px] h-[374px] bg-[#FFFFFF] rounded-[30px] flex flex-col justify-center items-center shadow-lg'>

<div className='w-full h-[40%] flex justify-center items-center '>
    <div className='w-[100px] h-[100px] rounded-[50%] bg-gradient-to-r from-[#FFE4AA]  to-[#FF9C07] shadow-lg flex justify-center items-center'>
    <img  src={Card3} alt="Card3" />
    </div>
    </div>

<div className='w-full h-[60%] flex justify-center items-center flex-col text-center gap-[20px]'>
    <h2 className='text-[26px] font-["Nunito"] text-[#242851] font-extrabold'>Dog Setting</h2>
    <p className='text-[18px] font-["Quicksand"] text-[#707283] font-regular'>There are many variatio <br /> of passage of Lorem for <br /> a Ipsum available</p>
    </div>

</div>



<div className='w-[292px] h-[374px] bg-[#FFFFFF] rounded-[30px] flex flex-col justify-center items-center shadow-lg'>

<div className='w-full h-[40%] flex justify-center items-center '>
    <div className='w-[100px] h-[100px] rounded-[50%] bg-gradient-to-r from-[#AFE6EB]  to-[#36BECB] shadow-lg flex justify-center items-center'>
    <img  src={Card4} alt="Card4" />
    </div>
    </div>

<div className='w-full h-[60%] flex justify-center items-center flex-col text-center gap-[20px]'>
    <h2 className='text-[26px] font-["Nunito"] text-[#242851] font-extrabold'>Healthy Meals</h2>
    <p className='text-[18px] font-["Quicksand"] text-[#707283] font-regular'>There are many variatio <br /> of passage of Lorem for <br /> a Ipsum available</p>
    </div>

</div>




    </div>

</div>

    </div>
  )
}
