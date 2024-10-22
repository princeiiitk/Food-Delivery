import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import axios from 'axios';

export default function Signup() {
  let navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "", location: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const CreateAccount= { name: user.name, email: user.email, password: user.password, location: user.location };
    const url = "https://fooddelivery-j1hz.onrender.com/createuser";

    try {
      const response = await axios.post(url, CreateAccount);
      const CreateAccountcheck = response.data;

      if (!CreateAccountcheck) {
        alert("Enter valid user");
      } else {
        navigate('/Login');
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="container mx-auto p-4">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-center text-2xl font-bold mb-6">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center">
                <i className="fas fa-user fa-bounce fa-2xl mr-2"></i>
                <input
                  type="text"
                  className="form-input w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  name='name'
                  value={user.name}
                  onChange={handleChange}
                  placeholder='Your Name'
                  required
                />
              </div>

              <div className="mb-4 flex items-center">
                <i className="fas fa-envelope fa-shake fa-2xl mr-2"></i>
                <input
                  type="email"
                  className="form-input w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                  placeholder='Your Email'
                  required
                />
              </div>

              <div className="mb-4 flex items-center">
                <i className="fas fa-lock fa-flip fa-2xl mr-2"></i>
                <input
                  type="password"
                  className="form-input w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  name='password'
                  value={user.password}
                  onChange={handleChange}
                  placeholder='Password'
                  required
                />
              </div>

              <div className="mb-4 flex items-center">
                <i className="fas fa-location-dot fa-beat fa-2xl mr-2"></i>
                <input
                  type="text"
                  className="form-input w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  name='location'
                  value={user.location}
                  onChange={handleChange}
                  placeholder='Address'
                  required
                />
              </div>

              <div className="flex justify-between">
                <button type="submit" className="btn bg-blue-500 text-white rounded-lg px-4 py-2">Register</button>
                <Link to='/Login' className='btn bg-red-500 text-white rounded-lg px-4 py-2'>
                  Login
                </Link>
              </div>
            </form>
            <div className="mt-6 flex justify-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Sample" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
