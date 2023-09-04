import {motion} from 'framer-motion'
import seats from '../assets/images/chairs.jpg'

export default function Middle() {
    const jumpup={
        initial:{
            opacity:0,
            y:100,
            x:500,
        },
        animate:{
            opacity:1,
            y:0,
            x:0,
            delay:0.5
        },
    }
  return (
    <div className='flex self-center flex-col px-20 overflow-hidden'>
        <motion.div >
        <motion.div className=''>
            <motion.div className='' variants={jumpup} initial="initial" whileInView="animate" viewport={{
                once:true,
            }} >
                <div className="flex justify-between py-20 px-20 my-5 bg-slate-400 rounded-3xl">
                    <div className="">
                        <img src={seats} alt="" className='w-[500px] h-[500px] rounded-full' />
                    </div>
                    <div className="w-[40%] flex flex-col m-10 justify-between pt-10 pb-40">
                        <h5 className='text-xl'>FIRST OF ALL</h5>
                        <h2 className='text-4xl'>Welcome to Eduhub</h2>
                        <p className='text-xl'>Discover a vibrant community of college students where you can share notes, engage discussions, chat with friends, and rate your proffessors. Join Eduhub today and enhance your educational journey.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div className='' variants={jumpup} initial="initial" whileInView="animate" viewport={{once:true,}}>
                <div className="flex justify-between my-5 py-20 flex-row-reverse px-20 bg-slate-200 rounded-3xl sticky z-20">
                    <div className="">
                        <img src={seats} alt="" className='w-[500px] h-[500px] rounded-full' />
                    </div>
                    <div className="w-[40%] flex flex-col m-10 justify-between pt-10 pb-40">
                        <h5 className='text-xl'>NOT TO MENTION</h5>
                        <h2 className='text-4xl'>Share and Discuss</h2>
                        <p className='text-xl'>Join a community of college students where you can share notes, discuss topics, and chat with your friends. Collaborate and learn together</p>
                    </div>
                </div>
            </motion.div>
            <motion.div className='' variants={jumpup} initial="initial" whileInView="animate" viewport={{once:true,}}>
                <div className="flex justify-between my-5 py-20 flex-row px-20 bg-slate-400 rounded-3xl sticky z-20">
                    <div className="">
                        <img src={seats} alt="" className='w-[500px] h-[500px] rounded-full' />
                    </div>
                    <div className="w-[40%] flex flex-col m-10 justify-between pt-10 pb-40">
                        <h5 className='text-xl'>AND LET'S NOT FORGET</h5>
                        <h2 className='text-4xl'>Rate Your Professors</h2>
                        <p className='text-xl'>Rate and review your professors to help other students make informed decisions. Share your experiences and contribute to the academic community.</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        </motion.div>
        
    </div>
  )
}
