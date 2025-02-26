import React from 'react'
import Team1 from '/Team1.png'
import Team2 from '/Team2.png'
import Team3 from '/Team3.png'
import Team4 from '/Team4.png'

export default function TeamPage() {
  return (
  <div className='w-full h-[935px] flex justify-center items-center'>
  
  <div className='w-[1490px] h-[758px] bg-[#FFECE4] rounded-[50px]'>
  
      <header className='w-full h-[30%] flex flex-col justify-end items-center gap-[10px]'>
          <p className='text-[20px] font-["Nunito"] text-[#FF7751] font-extrabold'>Our Team</p>
          <h2 className='text-[64px] font-["Nunito"] text-[#242851] font-extrabold'>Meet Our Groomers</h2>
  
  
      </header>
  
      <div className='w-full h-[70%] flex justify-evenly items-center'>
  
<div className='w-[292px] h-[405px] bg-[#FFFFFF] rounded-[146px] flex flex-col justify-center items-center shadow-lg  hover:shadow-2xl hover:shadow-[#FF7751] cursor-pointer'>

<div className='w-full h-[60%] flex justify-center items-end '>
    <div className='w-[192px] h-[192px] rounded-[50%] bg-gradient-to-r from-[#FFE8BA]  to-[#F3B73D] shadow-lg flex justify-center items-center'>
    <img  src={Team1} alt="Team1" />
    </div>
    </div>

<div className='w-full h-[40%] flex justify-center items-center flex-col text-center gap-[20px]'>
    <h2 className='text-[26px] font-["Nunito"] text-[#242851] font-extrabold'>Rosalina Wiliam</h2>
    <p className='text-[18px] font-["Quicksand"] text-[#707283] font-regular'>CEO & Founder</p>
    </div>

</div>





<div className='w-[292px] h-[405px] bg-[#FFFFFF] rounded-[146px] flex flex-col justify-center items-center shadow-lg  hover:shadow-2xl hover:shadow-[#FF7751] cursor-pointer'>

<div className='w-full h-[60%] flex justify-center items-end '>
    <div className='w-[192px] h-[192px] rounded-[50%] bg-gradient-to-r from-[#D5D1FF]  to-[#837BDB] shadow-lg flex justify-center items-center'>
    <img  src={Team2} alt="Team2" />
    </div>
    </div>

<div className='w-full h-[40%] flex justify-center items-center flex-col text-center gap-[20px]'>
    <h2 className='text-[26px] font-["Nunito"] text-[#242851] font-extrabold'>Rosalina Wiliam</h2>
    <p className='text-[18px] font-["Quicksand"] text-[#707283] font-regular'>CEO & Founder</p>
    </div>

</div>





<div className='w-[292px] h-[405px] bg-[#FFFFFF] rounded-[146px] flex flex-col justify-center items-center shadow-lg  hover:shadow-2xl hover:shadow-[#FF7751] cursor-pointer'>

<div className='w-full h-[60%] flex justify-center items-end '>
    <div className='w-[192px] h-[192px] rounded-[50%] bg-gradient-to-r from-[#FFCCBC]  to-[#FFBA7B] shadow-lg flex justify-center items-center'>
    <img  src={Team3} alt="Team3" />
    </div>
    </div>

<div className='w-full h-[40%] flex justify-center items-center flex-col text-center gap-[20px]'>
    <h2 className='text-[26px] font-["Nunito"] text-[#242851] font-extrabold'>Rosalina Wiliam</h2>
    <p className='text-[18px] font-["Quicksand"] text-[#707283] font-regular'>CEO & Founder</p>
    </div>

</div>






<div className='w-[292px] h-[405px] bg-[#FFFFFF] rounded-[146px] flex flex-col justify-center items-center shadow-lg hover:shadow-2xl hover:shadow-[#FF7751] cursor-pointer'>

<div className='w-full h-[60%] flex justify-center items-end '>
    <div className='w-[192px] h-[192px] rounded-[50%] bg-gradient-to-r from-[#E1F5FC]  to-[#97D2F2] shadow-lg flex justify-center items-center'>
    <img  src={Team4} alt="Team4" />
    </div>
    </div>

<div className='w-full h-[40%] flex justify-center items-center flex-col text-center gap-[20px]'>
    <h2 className='text-[26px] font-["Nunito"] text-[#242851] font-extrabold'>Rosalina Wiliam</h2>
    <p className='text-[18px] font-["Quicksand"] text-[#707283] font-regular'>CEO & Founder</p>
    </div>

</div>
  
  
  
  
      </div>
  
  </div>
  
      </div>
  )
}
