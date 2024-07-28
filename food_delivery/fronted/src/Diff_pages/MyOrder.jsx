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
      const userEmailf = localStorage.getItem('useremail');
      const response = await axios.post('https://fooddelivery-j1hz.onrender.com/myOrder', { email: userEmailf });
      const json = response.data;

      console.log('Fetched order data:', json); // Log the fetched data to verify structure

      setOrderData(json);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching order data:', error); // Log any errors
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
      <h1>Your Order</h1>
      <div className="container">
        {orderData.length > 0 ? (
          orderData.slice(0).reverse().map((arrayData) => (
            
            <div key={arrayData._id} className="col-12 col-md-6 col-lg-3">
              <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
                <img src={arrayData.img} className="card-img-top" alt={arrayData.name} style={{ height: '30vh', objectFit: 'fill' }} />
                <div className="card-body">
                  <h5 className="card-title">{arrayData.name}</h5>
                  <div className="container w-100 p-0" style={{ height: '50px' }}>
                    <span className="m-1">Qty: {arrayData.Qty}</span>
                    <span className="m-1">Size: {arrayData.Size}</span>
                    <br />
                    <div className="d-inline ms-2 h-100 w-20 fs-5">₹{arrayData.price}/-</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No orders found</div>
        )}
      </div>
      <Footer />
    </>
  );
}
