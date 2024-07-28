import React, { useMemo } from 'react';
import axios from 'axios';
import { useDispatchCart, useCart } from '../component/ContextApi';

export default function Cart() {
    const data = useCart();
    const dispatch = useDispatchCart();

    const handleCheckout = async () => {
        try {
            const userEmail = localStorage.getItem('useremail');
            const url = 'https://fooddelivery-j1hz.onrender.com/OrderData';
            const obj = { order_data: data, email: userEmail };
            const response = await axios.post(url, obj);
            console.log(response);

            if (response.status === 200) {
                dispatch({ type: 'DROP' });
            }
        } catch (error) {
            console.error('Checkout failed', error);
        }
    };

    const totalPrice = useMemo(() => data.reduce((total, { price }) => total + price, 0), [data]);

    if (data.length === 0) {
        return (
            <div className='m-5 w-100 text-center fs-3'>The Cart is Empty</div>
        );
    }

    return (
        <div className='container m-auto mt-5 table-responsive-sm table-responsive-md'>
            <table className='table table-hover'>
                <thead className='text-success fs-4'>
                    <tr>
                        <th scope='col'>S.NO.</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Option</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ name, Qty, Size, price }, index) => (
                        <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>{name}</td>
                            <td>{Qty}</td>
                            <td>{Size}</td>
                            <td>{price}</td>
                            <td>
                                <button
                                    type="button"
                                    className='btn p-0'
                                    onClick={() => dispatch({ type: "REMOVE", index })}
                                >
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div><h1 className='fs-2'>Total Price: {totalPrice}</h1></div>
            <div>
                <button className='btn bg-success mt-5' onClick={handleCheckout}>Check Out</button>
            </div>
        </div>
    );
}
