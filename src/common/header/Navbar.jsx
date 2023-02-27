import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <header className="header">
        <nav className="navbar">
          <div className="row d-flex container">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className={`nav-list d-flex ${open ? "show" : ""}`}>
              <Link to="/">Home</Link>
              <Link to="/">Shop</Link>
              <Link to="/">Pages</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Lookups</Link>

              <div onClick={() => setOpen(false)} className="close">
                <i className="bx bx-x"></i>
              </div>

              <Link to="/" className="user_login_link">
                Login
              </Link>
            </div>
            <div className="icons d-flex">
              <div className="icon d-flex">
                <i className="bx bx-search"></i>
              </div>
              <div className="icon user-icon d-flex">
                <i className="bx bx-user"></i>
              </div>
              <div className="icon d-flex">
                <i className="bx bx-bell"></i>
                <span></span>
              </div>
            </div>
            {/* <!-- Hamburger --> */}
            {!open && (
              <div onClick={() => setOpen(!open)} className="hamburger">
                <i className="bx bx-menu-alt-right"></i>
              </div>
            )}
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;
