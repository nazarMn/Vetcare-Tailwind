import React from 'react'

export default function FooterPage() {
  return (
    <div className="w-full h-[500px] flex justify-center items-end">

        <div className="w-[1290px] h-[415px] flex flex-col ">

            <div className="w-full h-[65%]   flex justify-between items-start">

            <div className="w-[30%] h-full   flex flex-col justify-center items-center gap-[30px]">
                <h2 className="text-[36px] font-['Nunito'] font-extrabold"><samp className='text-[#242851]'>Vet</samp><samp className='text-[#FF7852]'>care</samp></h2>
                <p className='font-["Quicksand"] text-[18px] text-[#707283] font-regular '>Quisque id leo non dolor tempor elementum quis <br /> ac urna. Nam pharetra, ligula eget finibus <br /> dignissim, turpis ipsum sollicitudin</p>
                <input type="text" />
            </div>

            </div>
            <div className="w-full h-[35%]   flex justify-center items-end pb-[8px]">
                <p></p>
            </div>

        </div>


    </div>
  )
}
