import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangePrice, foodcategory } from '../FeatureSlice/FilterSlice';

export default function Filter() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("All");
    const [price, setPrice] = useState(0);
    const initialState = useSelector((state) => state.Filter?.foodcat)

    console.log("filter----->", initialState)
    const handlePriceChange = (e) => {
        const newPrice = parseInt(e.target.value);
        setPrice(newPrice);
        dispatch(ChangePrice({ filterprice: newPrice }));
    };

    const handleOption = (e) => {

        const choose = e.target.value;
        dispatch(foodcategory({ foodcat: choose }));
        setSelected(choose);
    };

    return (
        <>
            <div className="mt-12 flex flex-col lg:flex-col items-center lg:items-start lg:h-[60%%]  bg-slate-100 text-xl lg:text-xl font-sans  shadow-xl rounded-2xl m-1 p-2 w-full lg:w-[100%] lg:m-0 lg:p-4">

                <div className="text-xl lg:text-3xl font-sans mb-4">Filter By</div>
                <div className="flex flex-row lg:flex-col items-center mt-3 m-2  w-full py-3 rounded-xl shadow-xl">
                    <span className='mx-2 font-sans text-xl'>Price</span>
                    <input
                        onChange={handlePriceChange}
                        type="range"
                        className="text-black p-2 w-full"
                        name="price"
                        min={0}
                        max={500}
                        value={Number(price)}
                    />
                    <span className=" rounded-2xl p-3 mt-2 lg:mt-0">₹ {price}</span>
                </div>

                <div className="flex flex-col items-center mt-3 m-2  w-full py-3 rounded-xl shadow-xl">
                    <span className=" mb-2">Food Category</span>
                    <select
                        name="All"
                        value={selected}
                        onChange={handleOption}
                        className="text-black bg-green-500 rounded-xl w-full h-10 mt-2"
                    >
                        <option value="All">{initialState === "" ? "All Food" : initialState}</option>  {/* Added option for "All" */}
                        <option value="Burger">Burger</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Starter">Starter</option>
                        <option value="Biryani/Rice">Biryani/Rice</option>
                    </select>
                </div>


                <div className="flex flex-col items-center mt-4  w-full py-3 rounded-xl shadow-xl">
                    <span className="text-xl font-sans mb-2">Rating</span>
                    <div className="flex">
                        <button className="btn">
                            <GradeIcon style={{ color: '#FBBF24' }} />
                        </button>
                        <button className="btn">
                            <GradeIcon style={{ color: '#FBBF24' }} />
                        </button>
                        <button className="btn">
                            <GradeIcon style={{ color: '#FBBF24' }} />
                        </button>
                        <button className="btn">
                            <StarBorderIcon />
                        </button>
                        <button className="btn">
                            <StarBorderIcon />
                        </button>
                    </div>
                </div>
                <div className='mt-4 shadow-xl rounded-xl w-full md:w-3/4 lg:w-3/3 mx-auto'>
                    <span className="block text-center text-white bg-slate-400 p-2 rounded-xl mb-4">
                        Sponsored By Myntra
                    </span>

                    <div className="relative">
                        <img className='w-[100%] object-fill rounded-xl h-65 sm:h-64 md:h-72 lg:h-80' src='https://images.pexels.com/photos/6764021/pexels-photo-6764021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='ad' />
                    </div>
                </div>


            </div>
        </>
    );
}
