import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css"
export default function Footer() {
  return (
    <div className='flex w-[100%] h-[20vh] justify-between px-20 items-center bg-[#EEE5F9]'>
      <div className="">
        <h1 className='text-3xl'>Eduhub</h1>        
      </div>
      <div className="flex w-[150px] justify-between text-2xl">
        <InstagramIcon  className='icon'/>
        <FacebookIcon className='icon'/>
        <TwitterIcon className='icon'/>
      </div>
    </div>
  )
}
