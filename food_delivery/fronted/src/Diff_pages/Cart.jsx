import React, { useMemo } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { RemoveItems,ClearCart } from '../FeatureSlice/CartSlice';
export default function Cart() {
    const navigate = useNavigate();
    const data = useSelector((state)=>state.cart.Cart);
    console.log(data);
    const dispatch = useDispatch();

    const handleCheckout = async () => {
        try {
            const userEmail = localStorage.getItem('useremail');
            const url = 'https://fooddelivery-j1hz.onrender.com/OrderData';
            const obj = { order_data: data, email: userEmail };
            const response = await axios.post(url, obj);
            console.log(response);

            if (response.status === 200) {
                dispatch(ClearCart());
            }
        } catch (error) {
            console.error('Checkout failed', error);
        }
    };

    const totalPrice = useMemo(() => data.reduce((total, { price }) => total + price, 0), [data]);

    if (data.length === 0) {
        const onClose = () => {
            navigate('/');
        };
        return (
            <>
                <button
                    className='bg-red-500 text-white text-2xl p-3 rounded-full fixed top-4 right-4'
                    onClick={onClose}
                >
                    X
                </button>
                <div className='flex justify-center items-center min-h-screen'>
                    <div className='text-center text-3xl text-gray-600'>The Cart is Empty</div>
                </div>
            </>
        );
    }

    const onClose = () => {
        navigate('/');
    };

    return (
        <>
            <button
                className='bg-red-500 text-white text-2xl p-3 rounded-full fixed top-4 right-4'
                onClick={onClose}
            >
                X
            </button>
            <div className='container mx-auto mt-6 px-4 sm:px-6 lg:px-8'>
                <div className='overflow-x-auto'>
                    <table className='min-w-full bg-white shadow-lg rounded-lg'>
                        <thead className='bg-green-500 text-white'>
                            <tr>
                                <th className='py-3 px-5'>S.NO.</th>
                                <th className='py-3 px-5'>Name</th>
                                <th className='py-3 px-5'>Quantity</th>
                                <th className='py-3 px-5'>Option</th>
                                <th className='py-3 px-5'>Amount</th>
                                <th className='py-3 px-5'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(({id, name, Qty, Size, price }, index) => (
                                <tr key={index} className='border-b hover:bg-gray-50'>
                                    <td className='py-3 px-5 text-center'>{index + 1}</td>
                                    <td className='py-3 px-5 text-center'>{name}</td>
                                    <td className='py-3 px-5 text-center'>{Qty}</td>
                                    <td className='py-3 px-5 text-center'>{Size}</td>
                                    <td className='py-3 px-5 text-center'>₹{price}</td>
                                    <td className='py-3 px-5 text-center'>
                                        <button
                                            type="button"
                                            className='text-red-500 hover:text-red-700'
                                            onClick={() => dispatch(RemoveItems({id}))}
                                        >
                                            <DeleteIcon/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-6 text-2xl text-center'>
                    Total Price: ₹{totalPrice}
                </div>
                <div className='mt-6 text-center'>
                    <button
                        className='bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg'
                        onClick={handleCheckout}
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </>
    );
}
