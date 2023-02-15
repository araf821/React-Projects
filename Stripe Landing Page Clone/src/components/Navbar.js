import React from "react";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav">
      <section className="nav-center">
        <section className="nav-header">
          <img src={logo} alt="" />
        </section>
      </section>
    </div>
  );
};

export default Navbar;
