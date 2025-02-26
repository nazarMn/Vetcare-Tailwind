import React from 'react'

export default function PricingPlanPage() {
  return (
    <div className='w-screen h-[900px] flex justify-center items-center '>
    <div className='w-[1290px] h-full bg-[#FFF8F5] flex justify-center items-center '>

        <div className='w-[470px] h-[743px] bg-[#FFFFFF] rounded-[20px] shadow-2xl mr-[-30px]'>


        <div className='w-full h-[25%] flex justify-center items-center flex-col gap-[5px] pt-[10px]'>
            <h2 className='text-[28px] font-["Nunito"] text-[#242851] font-extrabold'>Regular Pack</h2>
            <p className='text-[50px] font-["Nunito"] text-[#242851] font-extrabold'>3 Days</p>
            </div>


            <div className='w-full h-[35%] flex justify-center items-center gap-[25px] flex-col'>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Pet Shower</p>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Fitness Checkup</p>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Pet Grooming</p>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Hair and Nail Cut</p>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Control Hair Falling</p>
            </div>


            <div className='w-full h-[40%] flex justify-around items-center flex-col'>
            <h2 className=' font-["Nunito"] text-[#FF7751] font-extrabold'><span className='text-[50px]'>$150</span><samp className='text-[20px]'>Per Visit</samp></h2>
            <button className='w-[214px] h-[60px] bg-gradient-to-r from-[#FFA991]  to-[#FF7852] rounded-[30px] text-[20px] font-["Nunito"] text-[#FFFFFF] font-bold shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#FF7852] hover:to-[#FFA991]  '>Purchase Pack</button>
            </div>


        </div>



        <div className='w-[470px] h-[843px] bg-gradient-to-r from-[#FFA389]  to-[#FF6439]  rounded-[20px] shadow-2xl z-10'>

        <div className='w-full h-[25%] flex justify-center items-center flex-col gap-[5px] pt-[10px]'>
            <h2 className='text-[28px] font-["Nunito"] text-[#FFFFFF] font-extrabold'>Exclusive Pack</h2>
            <p className='text-[50px] font-["Nunito"] text-[#FFFFFF] font-extrabold'>10 Days</p>
            </div>


            <div className='w-full h-[35%] flex justify-center items-center gap-[25px] flex-col'>
            <p className='text-[20px] font-["Quicksand"] text-[#FFFFFF] font-bold'>Pet Shower</p>
            <p className='text-[20px] font-["Quicksand"] text-[#FFFFFF] font-bold'>Fitness Checkup</p>
            <p className='text-[20px] font-["Quicksand"] text-[#FFFFFF] font-bold'>Pet Grooming</p>
            <p className='text-[20px] font-["Quicksand"] text-[#FFFFFF] font-bold'>Hair and Nail Cut</p>
            <p className='text-[20px] font-["Quicksand"] text-[#FFFFFF] font-bold'>Control Hair Falling</p>
            <p className='text-[20px] font-["Quicksand"] text-[#FFFFFF] font-bold'>Brush & Blow Dry</p>
            <p className='text-[20px] font-["Quicksand"] text-[#FFFFFF] font-bold'>Pet Park And Games</p>
            </div>


            <div className='w-full h-[40%] flex justify-around items-center flex-col'>
            <h2 className=' font-["Nunito"] text-[#FFFFFF] font-extrabold'><span className='text-[50px]'>$350</span><samp className='text-[20px]'>Per Visit</samp></h2>
            <button className='w-[214px] h-[60px] bg-[#FFFFFF] rounded-[30px] text-[20px] font-["Nunito"] text-[#FF7751] font-bold shadow-lg cursor-pointer hover:bg-[#FF7751] hover:text-[#FFFFFF] transition-all duration-300 '>Purchase Pack</button>
            </div>


        </div>



        <div className='w-[470px] h-[743px] bg-[#FFFFFF] rounded-[20px] shadow-2xl ml-[-30px]'>

        <div className='w-full h-[25%] flex justify-center items-center flex-col gap-[5px] pt-[10px]'>
            <h2 className='text-[28px] font-["Nunito"] text-[#242851] font-extrabold'>Premium Pack</h2>
            <p className='text-[50px] font-["Nunito"] text-[#242851] font-extrabold'>30 Days</p>
            </div>


            <div className='w-full h-[35%] flex justify-center items-center gap-[25px] flex-col'>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Pet Shower</p>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Fitness Checkup</p>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Pet Grooming</p>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Hair and Nail Cut</p>
            <p className='text-[20px] font-["Quicksand"] text-[#707283] font-bold'>Control Hair Falling</p>
            
            </div>


            <div className='w-full h-[40%] flex justify-around items-center flex-col'>
            <h2 className=' font-["Nunito"] text-[#FF7751] font-extrabold'><span className='text-[50px]'>$550</span><samp className='text-[20px]'>Per Visit</samp></h2>
            <button className='w-[214px] h-[60px] bg-gradient-to-r from-[#FFA991]  to-[#FF7852] rounded-[30px] text-[20px] font-["Nunito"] text-[#FFFFFF] font-bold shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#FF7852] hover:to-[#FFA991]  '>Purchase Pack</button>
            </div>


        </div>

    </div>

    </div>
  )
}
