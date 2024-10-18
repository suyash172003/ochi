import React from 'react'

function About() {
  return (
    <div className='rounded-tl-3xl rounded-tr-3xl w-full h-screen bg-[#CDEA68]'>
        <div className='px-[10vh] py-[6vh] font-["NeureMontreal"] text-6xl text-black font-semibold'>
          <p>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, 
            sell products, explain complex ideas, 
            and hire great people.</p>
        </div>
        <div className='border-t-2 bg-[#CDEA68] flex justify-between items-center'>
            <div className='-mt-40 w-1/2'>
                <div className=' text-black px-[10vh] py-[6vh] text-6xl font-semibold leading-none'>Our approach:</div>
                  <div className='px-[10vh] -mt-4'>
                    <div className="w-44 h-12 border-1 rounded-full bg-black flex justify-between items-center">
                      <h1 className='ml-8 uppercase flex justify-between text-pretty items-center'>Read More</h1>
                      <div className='mr-8 w-2 h-2 border-1px bg-white rounded-full'></div>
                    </div>
                  </div>
            </div>
            <div className='mb-3 mt-10 mr-10'>
              <div className='border w-[80vh] h-[50vh] bg-[#65791e] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl rounded-bl-3xl'>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About