
import { Link, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import { useSelector } from 'react-redux';


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart.Cart);


  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/Login');
  };

  const handleCartClick = () => {
    navigate('/Cart');
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md ">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">

          <Link to="/" className="text-3xl font-bold text-white flex">
            <img className='object-cover w-12 h-15 rounded-3xl  ' src='https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg' alt='' />
            <span className='ml-1'>Fusion</span>
          </Link>

          <button
            className="lg:hidden p-2 text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
            </svg>
          </button>





          <div className="hidden lg:flex items-center space-x-4">

            <div className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="text-lg px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-sans">Home</Link>
              {localStorage.getItem('authToken') && (
                <Link to="/MyOrder" className="text-lg px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-sans">Orders</Link>
              )}
            </div>
            {!localStorage.getItem('authToken') ? (
              <>
                <Link to="/createuser" className="text-lg px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-sans">Signup</Link>
                <Link to="/Login" className="text-lg px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-sans">Login</Link>
              </>
            ) : (
              <>
                <button className="font-sans relative text-lg px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300" onClick={handleCartClick}>
                    Cart
                    
                    <AddShoppingCartIcon/>
                  {cartData.length > 0 && (
                    <span className=" font-sans absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center">
                      {cartData.length}
                    </span>
                  )}
                </button>
                <button className=" font-sans text-lg px-4 py-2 border border-red-500 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>


        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 pb-4 space-y-2">
            <Link to="/" className="text-lg px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-sans">Home</Link>
            {localStorage.getItem('authToken') && (
              <Link to="/MyOrder" className="w-20 block text-lg px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-sans ">Orders</Link>
            )}
            {!localStorage.getItem('authToken') ? (
              <>
                <Link to="/createuser" className="block text-lg text-white border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-gray-900 transition-all duration-300">Signup</Link>
                <Link to="/Login" className="block text-lg text-white border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-gray-900 transition-all duration-300">Login</Link>
              </>
            ) : (
              <>
                <button className="relative block text-lg text-white border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-gray-900 transition-all duration-300" onClick={handleCartClick}>
                    <AddShoppingCartIcon />Cart
                  {cartData.length > 0 && (
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center">
                      {cartData.length}
                    </span>
                  )}
                </button>
                <button className="block text-lg text-white border border-red-500 bg-red-500 rounded-lg px-4 py-2 hover:bg-red-600 transition-all duration-300" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
