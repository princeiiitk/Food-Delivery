import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center text-white py-6">
      <div className="container mx-auto">
        <section className="mb-4">

          <Link
            className="btn m-1 inline-block text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300"
            to="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </Link>


          <Link
            className="btn m-1 inline-block text-white bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-all duration-300"
            to="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </Link>


          <Link
            className="btn m-1 inline-block text-white bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300"
            to="https://www.google.com/"
            target="_blank"
            aria-label="Google"
          >
            <GoogleIcon />
          </Link>


          <Link
            className="btn m-1 inline-block text-white bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-all duration-300"
            to="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </Link>


          <Link
            className="btn m-1 inline-block text-white bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition-all duration-300"
            to="https://www.linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </Link>


          <Link
            className="btn m-1 inline-block text-white bg-gray-800 hover:bg-gray-900 p-3 rounded-full transition-all duration-300"
            to="https://github.com/login"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </Link>
        </section>
      </div>

      <div className="text-center p-3 bg-gray-800">
        <Link className="text-white hover:underline" to="/Home" target="_blank">
          FooDY.com
        </Link>
      </div>
    </footer>
  );
}
