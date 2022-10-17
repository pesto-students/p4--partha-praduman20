import React from "react";
import "./style/nav.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
        <nav className="navbar">
          <div>
            <img className="nav-logo" src={logo} alt="something" />
          </div>
          <ul className="nav-items">
            <li>
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/contactus">
                ContactUs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
