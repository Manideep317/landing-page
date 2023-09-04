import React from 'react'

export default function Form() {
  return (
    <div className='h-[60vh] w-[50%] m-auto flex flex-col items-center justify-between pb-10'>
      <h1  className='text-4xl font-bold mt-10'>Contact Us</h1>
      <div className="flex flex-col justify-between w-[55%] font-light h-[60%]">
        <div className="flex flex-col">
          <label htmlFor="name" className='text-xl '>Name</label>
          <input className='outline-2 outline py-2 pl-1 ' placeholder='Enter your name'/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className='text-xl'>Last name</label>
          <input className='outline-2 outline py-2 pl-1 ' placeholder='Enter your last name'/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className='text-xl' >Your email</label>
          <input className='outline-2 outline py-2 pl-1 ' type='email' placeholder='Enter your email'/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className='text-xl'>Message</label>
          <input className='outline-2 outline h-[100px]' placeholder='Enter your message'/>
        </div>
      </div>
      <button className='bg-[#9140E5] w-[100px] h-[50px] rounded-lg text-white'>Submit</button>
    </div>
  )
}
