import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Email, Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Login() {




  let Navigate = useNavigate()

  const [user, setuser] = useState({ email: "", password: "" });
  const onChange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value })
  }


  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const UserAthu = { email: user.email, password: user.password }
    const url = "http://localhost:4000/Login"
    const response = await axios.post(url, UserAthu)

    const Registeruser = response.data

   




    if (!Registeruser.success) {
      alert("Incorrect password or email")
    }
    else if (Registeruser.success) {
      Navigate('/')
      localStorage.setItem("authToken", Registeruser.authToken);
      localStorage.setItem("useremail", Registeruser.email);



    }
  }

  return (
    <>
      <div><Navbar /> </div>
      <section className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container mx-auto p-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h1 className="text-center text-2xl font-bold mb-5">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <div className="flex items-center border rounded-md">
                    <Email className="text-gray-400 px-2" /> {/* MUI Email icon */}
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={onChange}
                      placeholder="Your Email"
                      className="flex-1 p-2 outline-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                  <div className="flex items-center border rounded-md">
                    <Lock className="text-gray-400 px-2" /> {/* MUI Lock icon */}
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={onChange}
                      placeholder="Password"
                      className="flex-1 p-2 outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Login</button>
                  <Link to="/createuser" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition text-center">Register</Link>
                </div>
              </form>
            </div>
            <div className="hidden md:block">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
                alt="login"
                className="w-full rounded-b-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <div><Footer /></div>
    </>
  )
}
