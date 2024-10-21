import React, { useState } from 'react'

export default function Filter() {
    const [Number1,setNumber1]=useState(10)
  return (
      <>
          <div className="mt-12  flex flex-col ebg-slate-100 text-3xl font-sans border-2 border-black h-screen shadow-xl rounded-2xl m-1 p-2">
              <div className='text-3xl font-sans'>
                  Filter By
              </div>
              <div className='flex flex-col mt-3 m-2 '>
                  <span className='text-2xl mb-2'> Price</span>
                  <input onChange={(e) => setNumber1(e.target.value)} type='range' className='text-black p-2' name='price' min={0} max={500} />
                  <span className='border-2 border-black rounded-2xl p-3 w-25 '> ₹ {Number1 }</span>
              </div>
              <div>
                  
               </div>
              
         </div> 
     </>
  )
}
