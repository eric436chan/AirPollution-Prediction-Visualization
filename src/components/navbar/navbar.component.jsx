import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../static/images/LosAngelesLogo.svg";

import "./navbar.style.scss";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">
        <Logo className="logo" />
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">
            Air Pollution
          </Link>
          <Link className='nav-link' to='/dashboard'>
            Dashboard
          </Link>
          {/* <Link className="nav-link" to="/about">
            About
          </Link> */}
          {/* <Link className="nav-link" to="/faq">
            FAQs
          </Link> */}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
