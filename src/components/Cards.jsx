import React from 'react'

function Cards() {
  return (
    <div className='mt-10 h-screen w-full bg-black'>
        <div className='px-10 py-10 flex items-center justify-center gap-10'>
            <div className='w-1/2 h-[50vh] border-[1px] bg-green-900 rounded-3xl'>
                <div className='h-4/5 flex justify-center items-center '>
                    <div className='font-["NeueMontreal"] text-7xl font-semibold'>Ochi</div>
                </div>
                <div className='ml-5 flex items-center justify-center border-[1px] h-10 w-40 rounded-full'>
                    <div className='font-sans'>@2019-2022</div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center gap-10'>
                <div className='w-1/2 h-[50vh] border-[1px] bg-green-900 rounded-3xl'>
                    <div className='h-4/5 flex justify-center items-center '>
                        <div className='font-["NeueMontreal"] text-7xl font-semibold'>Ochi</div>
                    </div>
                    <div className='ml-5 flex items-center justify-center border-[1px] h-10 w-40 rounded-full'>
                        <div className='font-sans'>@2019-2022</div>
                    </div>
                </div>
                <div className='w-1/2 h-[50vh] border-[1px] bg-green-900 rounded-3xl'>
                    <div className='h-4/5 flex justify-center items-center '>
                        <div className='font-["NeueMontreal"] text-7xl font-semibold'>Ochi</div>
                    </div>
                    <div className='ml-5 flex items-center justify-center border-[1px] h-10 w-40 rounded-full'>
                        <div className='font-sans'>@2019-2022</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards