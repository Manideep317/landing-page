import React from 'react'
import homeimg from '../assets/images/mucover.jpeg';
export default function Mainhome() {
  return (
    <div className='flex justify-between h-[91vh] px-20 '>
        <div className="flex flex-col justify-between py-20 my-60 w-[45vh]">
            <h1 className='text-7xl'>Welcome to Eduhub</h1>
            <p className='text-2xl'>Connect, Learn,Succeed</p>
        </div>

      
        <div className="flex flex-col w-[800px]">
        <div class="h-[200px] w-[200px] rounded-full relative top-40 left-20 bg-[#9140E5]"></div>
            <div className="relative flex self-center  z-10">
                <img src={homeimg} className='w-[600px] h-[600px] rounded-full'/>
            </div>
            <div className="flex w-[500px] relative items-center bottom-40 self-center justify-between">
            <div className="w-[110px] h-[110px] rounded-full bg-[#9140E5]"></div>
            <div className="w-[200px] h-[200px] rounded-full bg-[#9140E5]"></div>
            </div>
        </div>
    </div>
  )
}
