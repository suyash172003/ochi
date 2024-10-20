import React from 'react'
import { motion } from 'framer-motion'

function Marque() {
  return (
    <div scroll-smooth data-scroll data-scroll-section data-scroll-speed="-.034" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='mt-10 text border-2 border-b-2 border-t-2 flex gap-10 whitespace-nowrap border-zinc-100 overflow-hidden'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[22vw] tracking-tighter leading-none GroteskCondensed-Medium uppercase font-semibold'> We are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[22vw] tracking-tighter leading-none GroteskCondensed-Medium uppercase font-semibold'> We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marque