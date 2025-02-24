import React from 'react'


export default function HeroBanner() {
  return (
    <div className="w-full h-[64px] flex items-center">
      <div className="w-[25%]">
      <h2 className="text-[40px] font-['Nunito'] text-white font-black"><span className='text-[#FF7852]'>Vet</span><span className='text-[#8FC638]'>care</span></h2>
      </div>
      <div className="w-[50%]">
        <nav className="w-full h-full font-['Nunito'] text-[#242851] font-semibold text-[20px]">
          <ul className="w-full h-full flex justify-evenly" >
            <li className='cursor-pointer'>Start</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>News</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
        </nav>

      </div>
      <div className="w-[25%] flex justify-center">
        <button className="w-[228px] h-[60px] rounded-[30px] text-[20px] font-['Nunito'] font-bold text-white bg-gradient-to-r from-[#FFA992]  to-[#FF7852] shadow-lg">384-129-293-39</button>
</div>
        
    </div>
  )
}
