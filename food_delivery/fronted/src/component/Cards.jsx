import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { AddToCart } from '../FeatureSlice/CartSlice';

export default function Cards({ foodItem, option }) {

  const [Qty, setQty] = useState(1);
  const [Size, setSize] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const priceref = useRef();
  const dispatch = useDispatch();

  const priceOptions = Object.keys(option);
  const finalPrice = Qty * parseInt(option[Size] || 0);

  useEffect(() => {
    if (priceOptions.length > 0 && !Size) {
      setSize(priceOptions[0]);
    }
  }, [priceOptions, Size]);;

  const Carthandle = () => {
    dispatch(AddToCart({

      id: foodItem._id,
      name: foodItem.name,
      img: foodItem.img,
      price: finalPrice,
      Qty: Qty,
      Size: Size
    }));
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000);
  };

  return (
    <div className="card mt-3 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={foodItem.img}
        alt={foodItem.name}
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold">{foodItem.name}</h5>
        <p className="text-gray-600 mb-2">A delightful fusion of flavors</p>
        <div className="container w-full">
          <div className="flex mb-2">
            <select
              className="form-select me-2 border rounded p-2 w-1/2"
              onChange={(e) => setQty(e.target.value)}
              value={Qty}
            >
              {Array.from({ length: 6 }, (v, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select
              className="form-select border rounded p-2 w-1/2"
              onChange={(e) => setSize(e.target.value)}
              ref={priceref}
              value={Size}
            >
              {priceOptions.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="mb-2 text-lg font-bold">₹{finalPrice}/-</div>
          <button
            className="btn btn-success bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded w-full"
            onClick={Carthandle}
          >
            Add to Cart
          </button>
          {alertVisible && (
            <div className="alert alert-success mt-2 text-green-600">
              Item added to cart!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
