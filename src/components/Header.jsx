import React from 'react'

export default function Header() {
  return (
    <div className='flex w-full sticky left-0 top-0 z-50 bg-white h-[90px] px-20 py-4 justify-between shadow-md'>
        <div className="flex justify-center items-center">
            <h2 className='text-3xl font-semibold'>Eduhub</h2>
        </div>
        <div className="w-[450px] h-[60px] py-2 bg-black text-slate-50 rounded-full flex items-center justify-between">
            <a className='px-2 ml-10 text-xl font-semibold' href="">Katari</a>
            <a className='px-2 text-xl font-semibold' href="">nonsync</a>
            <a className='px-2 text-xl font-semibold'href="">Ganesh</a>
            <a className='px-2 mr-10 text-xl font-semibold'href="">Tamil</a>
        </div>
      <div className="w-[300px] flex justify-between items-center px-5 text-lg">
        <button className='w-[120px] h-[55px]  bg-[#0052cc] text-white font-medium rounded-lg'>Login</button>
        <button className='w-[120px] h-[55px] bg-[#0052cc] text-white font-medium rounded-lg'>Signup</button>
      </div>
    </div>
  )
}
