import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to={{ pathname: "https://www.facebook.com/" }}
            target="_blank"
            role="button"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to={{ pathname: "https://twitter.com" }}
            target="_blank"
            role="button"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to={{ pathname: "https://www.google.com/" }}
            target="_blank"
            role="button"
            aria-label="Google"
          >
            <i className="fab fa-google"></i>
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to={{ pathname: "https://www.instagram.com/" }}
            target="_blank"
            role="button"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to={{ pathname: "https://www.linkedin.com/" }}
            target="_blank"
            role="button"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to={{ pathname: "https://github.com/login" }}
            target="_blank"
            role="button"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </Link>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
       
        <Link className="text-white" to="/Home" target="_blank"> FooDY.com</Link>
      </div>
    </footer>
  );
}
