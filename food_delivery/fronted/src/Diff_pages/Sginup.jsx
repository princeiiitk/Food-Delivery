import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import axios from 'axios'

export default function Sginup() {
  let Navigate = useNavigate()
  //use hooks for dynamic value change
  const [user, setuser] = useState({ name: "", email: "", password: "", location: "" });
  const onchange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = { name: user.name, email: user.email, password: user.password, location: user.location }
    const url = "https://fooddelivery-j1hz.onrender.com/createuser"
    const response = await axios.post(url, obj)

    const json = response.data


    console.log(json)
    // console.log(json.success)

    if (!json) {
      alert("enter valid user")
    }
    if (json) {
      Navigate('/Login')
    }
  }



  return (
    <>
      <div><Navbar /> </div>
      <section className="vh-100" style={{ "backgroundColor": "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ "borderRadius": "25px", "backgroundColor": "white" }} >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4" >

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa-solid fa-user fa-bounce fa-2xl"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" name='name' value={user.name} onChange={onchange} placeholder='Your Name'
                              style={{ "backgroundColor": "white", "color": "black" }} />

                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa-solid fa-envelope fa-shake fa-2xl"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" name='email' value={user.email} onChange={onchange} placeholder='Your Email'
                              style={{ "backgroundColor": "white", "color": "black" }} />

                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa-solid fa-lock fa-flip fa-2xl"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" name='password' value={user.password} onChange={onchange} className="form-control" placeholder='Password'
                              style={{ "backgroundColor": "white", "color": "black" }} />

                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa-solid fa-location-dot fa-beat fa-2xl"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example4cd" name='location' value={user.location} onChange={onchange} className="form-control" placeholder='address'
                              style={{ "backgroundColor": "white", "color": "black" }} />

                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className=" m-3 btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                          <Link to='/Login' className='m-3 btn btn-danger btn-primary pt-2.7'
                            style={{ "textAlign": "center", "width": "100px" }}><b>Login</b></Link>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div><Footer /></div>
    </>
  )
}
