import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../Diff_pages/Cart';
import { useCart } from './ContextApi';

export default function Navbar() {
  const navigate = useNavigate();
  const cartData = useCart();
  const [cartView, setCartView] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/Login');
  };

  const handleCartClick = () => {
    setCartView(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style={{ padding: '0.5rem 1rem' }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 text-light" to="/">FooDY</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-4" aria-current="page" to="/">Home</Link>
              </li>
              {localStorage.getItem('authToken') && (
                <li className="nav-item">
                  <Link className="nav-link active fs-4" aria-current="page" to="/MyOrder">MyOrders</Link>
                </li>
              )}
            </ul>
            {!localStorage.getItem('authToken') ? (
              <div className="d-flex">
                <Link className="btn btn-outline-light mx-1 fs-5" to="/createuser">Signup</Link>
                <Link className="btn btn-outline-light fs-5" to="/Login">Login</Link>
              </div>
            ) : (
              <>
                <button className="btn btn-outline-light fs-5" onClick={handleCartClick}>
                  My Cart <Badge pill bg="danger">{cartData.length}</Badge>
                </button>
                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                <button className="btn btn-outline-danger fs-5" onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
