import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Footer() {
  return (
    <>
      <div>
        <footer className="bg-dark text-center text-white">

          <div className="container p-4 pb-0">

            <section className="mb-4">

              <Link className="btn btn-outline-light btn-floating m-1" target="_blank" to="https://www.facebook.com/" role="button"
              ><i className="fab fa-facebook-f"></i
              ></Link>


              <Link className="btn btn-outline-light btn-floating m-1" target="_blank" to="https://twitter.com" role="button"
              ><i className="fab fa-twitter"></i
              ></Link>


              <Link className="btn btn-outline-light btn-floating m-1" target="_blank" to="https://www.google.com/" role="button"
              ><i className="fab fa-google"></i
              ></Link>


              <Link className="btn btn-outline-light btn-floating m-1" target="_blank" to="https://www.instagram.com/" role="button"
              ><i className="fab fa-instagram"></i
              ></Link>


              <Link className="btn btn-outline-light btn-floating m-1" target="_blank" to="https://www.linkedin.com/" role="button"
              ><i className="fab fa-linkedin-in"></i
              ></Link>


              <Link className="btn btn-outline-light btn-floating m-1" target="_blank" to="https://github.com/login" role="button"
              ><i className="fab fa-github"></i
              ></Link>
            </section>

          </div>

          <div className="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>© 2020 Copyright:
            <Link className="text-white" target="_blank" to="/Home">FooDY.com</Link>
          </div>

        </footer>
      </div>
    </>
  )
}
