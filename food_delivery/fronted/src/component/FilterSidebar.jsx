import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChangePrice, foodcategory } from '../FeatureSlice/FilterSlice';

export default function Filter() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('Pizza');
    const [price, setPrice] = useState(0);

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
            <div className="mt-12 flex flex-col lg:flex-col items-center lg:items-start lg:h-screen bg-slate-100 text-xl lg:text-3xl font-sans border-2 border-black shadow-xl rounded-2xl m-1 p-2 w-full lg:w-[100%] lg:m-0 lg:p-4">
               
                <div className="text-xl lg:text-3xl font-sans mb-4">Filter By</div>

                <div className="flex flex-row lg:flex-col items-center mt-3 m-2 border-2 border-black w-full py-3 rounded-xl shadow-xl">
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
                    <span className="border-2 border-black rounded-2xl p-3 mt-2 lg:mt-0">₹ {price}</span>
                </div>

                <div className="flex flex-col items-center mt-3 m-2 border-2 border-black w-full py-3 rounded-xl shadow-xl">
                    <span className="text mb-2">Food Category</span>
                    <select
                        value={selected}
                        onChange={handleOption}
                        className="text-black bg-green-500 rounded-xl w-full h-10 mt-2"
                    >
                        <option>Pizza</option>
                        <option>Burger</option>
                        <option>Starter</option>
                        <option>Biryani/Rice</option>
                    </select>
                </div>

           
                <div className="flex flex-col items-center mt-4 border-2 border-black w-full py-3 rounded-xl shadow-xl">
                    <span className="text-2xl font-sans mb-2">Rating</span>
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
            </div>
        </>
    );
}
