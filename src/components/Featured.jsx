import React from 'react'

function Featured() {
  return (
    <div className='w-screen h-screen overflow-hidden'>
        <div className="mt-4 px-20 py-10">
            <h1 className='text-6xl font-["NeueMontreal"]'>Featured Projects</h1>
        </div>
        <div className='border-t-[1px] bg-slate-400'></div>
        <div className='px-10 py-10 flex justify-center items-center gap-7'>
            <div className='card container w-1/2 h-[65vh] mb-10'>
              <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='bg-cover w-full h-full rounded-3xl'></img>
            </div>
            <div className='card container w-1/2 h-[65vh] mb-10'>
              <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='bg-cover w-full h-full rounded-3xl'></img>
            </div>
        </div>
    </div>
  )
}

export default Featured