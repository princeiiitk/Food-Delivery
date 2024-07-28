import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart } from './ContextApi';

export default function Cards(prob) {
  let priceref = useRef()
  const [Qty, setQty] = useState(1);
  const [Size, setSize] = useState("");
  const dispatch = useDispatchCart()




  let options = prob.option
  let priceoption = Object.keys(options);
  let finalprice = Qty * parseInt(options[Size])


  useEffect(() => {
    setSize(priceref.current.value)
  }, [])

  const Carthandle = async () => {
    await dispatch({ type: 'ADD', id: prob.foodItem._id, name: prob.foodItem.name, img: prob.foodItem.img, price: finalprice, Qty: Qty, Size: Size })
  }

  return (
    <>
      <div className="card mt-3" style={{ "width": "18rem", "maxWidth": "3600px", "height": "fixed" }}>
        <img className="card-img-top" src={prob.foodItem.img} alt="Card cap" style={{ height: "180px", objectFit: "fill" }}></img>
        <div className="card-body">
          <h5 className="card-title">{prob.foodItem.name}</h5>
          <p className="card-text">A delightful fusion of flavors</p>
          <div className='container w-100'>
            <select className='m-2 bg-success' onChange={(e) => setQty(e.target.value)}>
              {
                Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1} >{i + 1}</option>
                  )
                })
              }
            </select>
            <select className='m-2 h-100 bg-success rounded' onChange={(e) => { setSize(e.target.value) }} ref={priceref}>
              {
                priceoption.map((data) => {
                  return <><option keys={data} value={data} >{data}</option></>
                })
              }
            </select>
            <br></br>
            <div className='d-inline'>₹{finalprice}/-</div>
            <hr></hr>
            <div className="btn bg-success justify-center ms-2" onClick={Carthandle}>Add to Cart</div>
          </div>
        </div>
      </div>
    </>
  )
}
