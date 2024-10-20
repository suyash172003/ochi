import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function Landing() {
  return (
    <div scroll-smooth data-scroll data-scroll-section data-scroll-speed="-.9" className='w-full h-screen bg-black'>
        <div className='text-structure ml-10 px-10 masker pt-16'>{["We Create","Eye-Opening","Presentation"].map((items,index)=>{
           return(
            <div className='masker'>
                <div className="w-fit flex items-end overflow-hidden">
                    {index===1 && (<motion.div initial={{width:0}} animate={{width:100}} transition={{ease:[0.76, 0, 0.24, 1]}}className='mr-5 w-[9vw] h-[4vw] rounded-md -top-[0.80vw] relative bg-red-400'></motion.div>)}
                    <h1 className="pt-2 text-[5.5vw] uppercase leading-[5.5vw] font-['FoundersGrostek'] font-semibold tracking-tight">{items}</h1>
                </div>
            </div>
            )})}
          </div>
        <div className='mt-40 border-zinc-700 border-t-[1px] flex justify-between items-center px-20 py-15'>
            {["For public and private companies","From the first pitch to IPO"].map((items,index)=><p className='text-md tracking-light font-["NeureMontreal"] leading-none mt-5'>{items}</p>)}
            <div className='start mt-5 flex items-center gap-2'>
                <div className='border-[1px] rounded-full border-zinc-700 px-4 py-2 uppercase font-light text-md font-["NeureMontreal"] leading-none'>Start the project</div>
                <div className='w-8 h-8 border-[1px] border-zinc-700 rounded-full flex items-center justify-center'><GoArrowUpRight/></div>
           </div>
            
        </div>
    </div>
        
  )
}

export default Landing