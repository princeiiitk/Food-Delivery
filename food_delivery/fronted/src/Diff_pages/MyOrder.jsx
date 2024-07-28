import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import axios from 'axios';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);
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
      <div className="container">
        <h1 className="my-4">Your Orders</h1>
        {orderData.length > 0 ? (
          <div className="row">
            {orderData.slice(0).reverse().map((order) => (
             
              <div key={order._id} className="col-12 col-md-6 col-lg-3 mb-4">
                
                <div className="card h-100">
                  <img
                    src={order.img || 'placeholder.jpg'}
                    className="card-img-top"
                    alt={order.name || 'Food item'}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{order.name || 'Unnamed Item'}</h5>
                    <p className="card-text">
                      <strong>Quantity:</strong> {order.Qty || 'N/A'}
                    </p>
                    <p className="card-text">
                      <strong>Size:</strong> {order.Size || 'N/A'}
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong> ₹{order.price ? order.price.toFixed(2) : 'N/A'}/-
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No orders found</div>
        )}
      </div>
      <Footer />
    </>
  );
}