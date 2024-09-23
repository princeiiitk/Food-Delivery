import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Login() {




  let Navigate = useNavigate()
  //use hooks for dynamic value change
  const [user, setuser] = useState({ email: "", password: "" });
  const onchange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value })
  }


  const handleSubmit = async (e) => {
    console.log("hii")
    e.preventDefault();
    const obj = { email: user.email, password: user.password }
    const url = "https://fooddelivery-j1hz.onrender.com/Login"
    const response = await axios.post(url, obj)

    const Registeruser = response.data

    console.log(Registeruser)




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
      <div> <section className="vh-100" style={{ "backgroundColor": "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ "borderRadius": "25px", "backgroundColor": "white" }} >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                      <form className="mx-1 mx-md-4" >

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



                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="m-3 btn btn-primary btn-lg" onClick={handleSubmit}>Login</button>
                          <Link to='/createuser' className="m-3 btn btn-primary btn-lg"
                            style={{ "textAlign": "center", "width": "100px" }}><b>Register</b></Link>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="login" className="img-fluid" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
      <div><Footer /></div>
    </>
  )
}
