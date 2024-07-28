import React from 'react'
import axios from 'axios';
import { useDispatchCart, useCart } from '../component/ContextApi';
export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();
    const handleCheckout = async () => {
        const userEmail = localStorage.getItem('useremail');
        console.log("response")

        const url = 'https://fooddelivery-j1hz.onrender.com/OrderData';
        const obj = { order_data: data, email: userEmail }
        const response = await axios.post(url, obj);
        console.log(response)

        if (response.status === 200) {
            dispatch({ type: 'DROP' })
        }

    }



    let totalprice = data.reduce((total, food) => total + food.price, 0);


    if (data.length === 0) {
        return (<>
            <div className='m-5 w-100 text-center fs-3'>The Cart is Empty</div>
        </>)
    }

    return (<>
        <div className='container m-auto mt-5 table-responsive-sm table-responsive-md'>
            <table className='table table-hover'>
                <thead className='text-success fs-4'>
                    <tr>
                        <th scope='col'>S.NO.</th>
                        <th scope='col'>name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>option</th>
                        <th scope='col'>amount</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        data.map((food, index) =>
                            <tr>
                                <th scope='row'>{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.Qty}</td>
                                <td>{food.Size}</td>
                                <td>{food.price}</td>
                                <td><button type="button" className='btn p-0 ' onClick={() => dispatch({ type: "REMOVE", index: index })}><i class="fa-solid fa-trash-can"></i></button></td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div><h1 className='fs-2'>Total Price :{totalprice}</h1></div>
            <div>
                <button className='btn bg-success mt-5' onClick={handleCheckout}>check Out</button>
            </div>

        </div>
    </>)
}
