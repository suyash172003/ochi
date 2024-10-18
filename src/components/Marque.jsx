import React from 'react'
import { motion } from 'framer-motion'

function Marque() {
  return (
    <div className='w-full  py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-2 border-b-2 border-t-2 flex gap-20 whitespace-nowrap border-zinc-100 overflow-hidden'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='mt-18 text-[22vw] -mb-[3vw] tracking-tighter leading-none font-serif uppercase pt-25 font-semibold'> We are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='mt-18 text-[22vw] -mb-[3vw] tracking-tighter leading-none font-serif uppercase pt-25 font-semibold'> We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marque