import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
  const cards=[useAnimation(), useAnimation()];
    const handleHover=(index)=>{
      cards[index].start({y:"0",opacity: 1});
    }

    const handleHoverEnd=(index)=>{
      cards[index].start({y:"100%",opacity: 0});
    }
    

  return (
    <div className='w-screen h-screen overflow-hidden'>
        <div className="mt-4 px-20 py-10">
            <h1 className='text-6xl font-["NeueMontreal"]'>Featured Projects</h1>
        </div>
        <div className='border-t-[1px] bg-slate-400'></div>
        <div className='px-10 py-10 flex justify-center items-center gap-10 overflow-hidden'>
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='card container w-1/2 h-[65vh] '>
              <div className='relative flex justify-between items-center'>
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='bg-cover w-full h-full rounded-3xl'></img>
                <h1 className='absolute left-3/4 translate-x-1/3 flex top-1/4 text-8xl font-semibold z-10'>{"FYBE".split("").map((items,index)=>(
                  <motion.span initial={{y:"100%",opacity: 0}} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.065}} animate={cards[0]}  className="text-[#CDEA68]" key={index}>{items}</motion.span>))}</h1>
              </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='card container w-1/2 h-[65vh] '>
              <div className='relative flex justify-between items-center'>
                <h1 className='absolute right-3/4 -translate-x-1/3 flex top-1/4 text-8xl  font-semibold text-[#CDEA68] z-10'>
                {"VISE".split("").map((items,index)=>(<motion.span initial={{y:"100%",opacity: 0}} transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.065}} animate={cards[1]} key={index}>{items}</motion.span>))}</h1>
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='bg-cover w-full h-full rounded-3xl'></img>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Featured