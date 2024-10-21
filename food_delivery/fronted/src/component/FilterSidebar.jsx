import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { ChangePrice, foodcategory, } from '../FeatureSlice/FilterSlice';

export default function Filter() {
    const dispatch = useDispatch()
    const [selected, setselected]=useState("")
    const [Number, setNumber] = useState(0)
    const handlepricechange = (e) => {
        const newPrice = parseInt(e.target.value);
        setNumber(newPrice)
        dispatch(ChangePrice({ filterprice: newPrice }));
       
    }
    const handleoption = (e) => {
        const choose = e.target.value
    dispatch(foodcategory({ foodcat: choose }));
    setselected(choose)
}
 
    
  return (
      <>
          <div className="mt-12 items-center  flex flex-col ebg-slate-100 text-3xl font-sans border-2 border-black h-screen shadow-xl rounded-2xl m-1 p-2">
              <div className='text-3xl font-sans'>
                  Filter By
              </div>
              <div className='flex flex-col items-center mt-3 m-2 border-2 border-black w-[100%] my-3 py-3 rounded-xl shadow-xl '>
                  <span className='text-2xl mb-2'> Price</span>
                  <input onChange={handlepricechange} type='range' className='text-black p-2' name='price' min={0} max={500} />
                  <span className='border-2 border-black rounded-2xl p-3 w-25 '> ₹ {Number }</span>
              </div>
              <div className='border-2 border-black text-2xl flex flex-col items-center mt-3 m-2  w-[100%] my-3 py-3 rounded-xl shadow-xl'>
                  <div>
                      <span className='text mb-2'>Food Category</span>
                  </div>
                  <div className='text-2xl font-sans  h-11 mt-2 rounded-lg w-40 mr-7 ' >
                      <select value={selected} onChange={handleoption} className='ml-6 h-10 bg-green-500 rounded-xl w-full mr-5  ' >
                          <option >Pizza</option>
                          <option>Burger</option>
                          <option >Starter</option>
                          <option >Biryani/Rice</option>
                         
                      </select>
                  </div>
              </div>
              <div className='flex flex-col text-3xl font-sans mt-4 items-center border-2 border-black w-[100%] my-3 py-3 rounded-xl shadow-xl'>
                  <div className='font-sans text-xl'> 
                      <span className='text-2xl font-sans'>Rating</span>
                  </div>
                  
                  <div>
                      <button className='btn'>
                          <GradeIcon style={{ color: '#FBBF24' }} />
                      </button>
                      <button className='btn'>
                          <GradeIcon style={{ color: '#FBBF24' }} />
                      </button>
                      <button className='btn'>
                          <GradeIcon style={{ color: '#FBBF24' }} />
                      </button>
                      <button className='btn'>
                          <StarBorderIcon />
                      </button>
                      <button className='btn'>
                          <StarBorderIcon />
                      </button>
                      
                      
                     
                      
                      
                  </div>
               </div>
              
         </div> 
     </>
  )
}
