import React from 'react'
import {motion} from 'framer-motion'
export default function About() {
    
  return (
    <motion.div className='w-[100%]'>
        <motion.div className='w-[60%] h-[25vh] flex m-auto flex-col justify-center items-center my-20'>
            <h1 className='text-4xl py-10 font-semibold'>About Eduhub</h1>
            <p className='text-xl text-center'>Eduhub is an innovative education-based website for college students. Our platform provides a space for students to collaborate, learn and grow together. With features like note sharing. discussion forums, and professor ratings. Eduhub aims to revolutionize the way students connect and excel in their academic journey.</p>
        </motion.div>
        <motion.div className='h-[25vh] flex m-auto flex-col items-center pt-20 bg-[#2D1A41]'>
            <h1 className='text-slate-50 text-4xl font-semibold'>Unleash Your Educational Potential</h1>
        </motion.div>
    </motion.div>
  )
}
