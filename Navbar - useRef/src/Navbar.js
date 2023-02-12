import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter, FaBehance, FaFacebook } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="" />
            <button className="nav-toggle">
              <FaBars />
            </button>
          </div>
          <div
            className="links-container show-container "
            style={{ height: "0" }}
          >
            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
            </ul>
          </div>
          <ul className="social-icons">
            <li>
              {" "}
              <a href="facebook.com">
                {" "}
                <FaFacebook />{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="facebook.com">
                {" "}
                <FaTwitter />{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="facebook.com">
                {" "}
                <FaBehance />{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
