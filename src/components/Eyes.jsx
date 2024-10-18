import React, { useEffect, useState } from 'react'

function Eyes() {  
    const [rotate, setRotate]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let x=e.clientX;
            let y=e.clientY;
            let deltaX=x-window.innerWidth/2;
            let deltaY=y-window.innerHeight/2;
            var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180);
        })
    });


  return (
    <div className='mt-4 w-screen h-screen overflow-hidden'>
        <div className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='flex justify-center items-center gap-10'>
                <div className='mt-40 rounded-full w-48 h-48 bg-white'>
                    
                    <div className='mt-10 ml-10 bg-center flex items-center bg-black w-28 h-28 rounded-full'>
                        <div style={{transform:`rotate(${rotate}deg)` }} className='line w-full h-4'>
                            <div className='w-4 h-4 rounded-full bg-white'></div>
                        </div>
                        
                    </div>
                </div>
                <div className='mt-40 rounded-full w-48 h-48 bg-white'>
                    <div className='mt-10 ml-10 bg-center flex items-center bg-black w-28 h-28 rounded-full'>
                        <div style={{transform:`rotate(${rotate}deg)` }} className='line w-full h-4'>
                            <div className='w-4 h-4 rounded-full bg-white'></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes