import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../Diff_pages/Cart';
import { useCart } from './ContextApi';

export default function Navbar(props) {
  const navigate = useNavigate();
  const data = useCart()
  const [CartViwe, setCartviwe] = useState(false)

  const logouthandle = () => {
    localStorage.removeItem("authToken");

    navigate('/Login')
  }

  const onload = () => {
    setCartviwe(true);

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">FooDY</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-3 m-3" aria-current="page" to="/">Home</Link>
              </li>
              {
                (localStorage.getItem('authToken')) ?
                  <li className="nav-item">
                    <Link className="nav-link active fs-3 m-3" aria-current="page" to="/MyOrder">Myorder</Link>
                  </li>
                  : ""
              }
            </ul>
            {
              (!localStorage.getItem('authToken')) ?
                <>
                  <div className='d-flex'>
                    <Link className="btn bg-white text-dark mx-1 m-2 fs-4 " to="/createuser">Signup</Link>
                    <Link className="btn bg-white text-dark m-2 fs-4" to="/Login">Login</Link>
                  </div>
                </>
                : (<>

                  <div className="btn bg-white text-dark m-2 fs-5" onClick={onload}>My Cart
                    <Badge pill bg="danger">{data.length}</Badge>
                  </div>
                  {CartViwe ? <Modal onClose={() => { setCartviwe(null); }}><Cart></Cart></Modal> : ""}



                  <div className="btn bg-danger text-dark m-2 fs-5" onClick={logouthandle}>Logout</div>

                </>)
            }
          </div>
        </div>
      </nav>
    </>
  )
}
