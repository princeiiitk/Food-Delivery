import React, { useEffect, useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import axios from 'axios';

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMyOrder = async () => {
    try {
      const userEmail = localStorage.getItem('useremail');
      if (!userEmail) {
        throw new Error('User email not found in local storage');
      }

      const response = await axios.post('https://fooddelivery-j1hz.onrender.com/myOrder', { email: userEmail });
      setOrderData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching order data:', error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-6">
        <h1 className="text-2xl font-bold text-center mb-6">Your Orders</h1>
        {orderData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderData.slice(0).reverse().map((order) => (
              <div key={order._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={order.img || 'placeholder.jpg'}
                  className="w-full h-48 object-cover"
                  alt={order.name || 'Food item'}
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">{order.name || 'Unnamed Item'}</h5>
                  <p className="text-gray-700 mt-2">
                    <strong>Quantity:</strong> {order.Qty || 'N/A'}
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Size:</strong> {order.Size || 'N/A'}
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Price:</strong> ₹{order.price ? order.price.toFixed(2) : 'N/A'}/-
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl mt-6">No orders found</div>
        )}
      </div>
      <Footer />
    </>
  );
}