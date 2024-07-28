import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart } from './ContextApi';

export default function Cards({ foodItem, option }) {
  const [Qty, setQty] = useState(1);
  const [Size, setSize] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const priceref = useRef();
  const dispatch = useDispatchCart();

  const priceOptions = Object.keys(option);
  const finalPrice = Qty * parseInt(option[Size]);

  useEffect(() => {
    setSize(priceref.current.value);
  }, []);

  const Carthandle = async () => {
    await dispatch({
      type: 'ADD',
      id: foodItem._id,
      name: foodItem.name,
      img: foodItem.img,
      price: finalPrice,
      Qty: Qty,
      Size: Size
    });
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000);
  };

  return (
    <div className="card mt-3" style={{ width: "18rem", maxWidth: "360px" }}>
      <img
        className="card-img-top"
        src={foodItem.img}
        alt={foodItem.name}
        style={{ height: "180px", objectFit: "fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{foodItem.name}</h5>
        <p className="card-text">A delightful fusion of flavors</p>
        <div className="container w-100">
          <div className="d-flex mb-2">
            <select
              className="form-select me-2"
              onChange={(e) => setQty(e.target.value)}
              value={Qty}
            >
              {Array.from({ length: 6 }, (v, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select
              className="form-select"
              onChange={(e) => setSize(e.target.value)}
              ref={priceref}
              value={Size}
            >
              {priceOptions.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="mb-2">₹{finalPrice}/-</div>
          <button className="btn btn-success w-100" onClick={Carthandle}>
            Add to Cart
          </button>
          {alertVisible && <div className="alert alert-success mt-2">Item added to cart!</div>}
        </div>
      </div>
    </div>
  );
}
