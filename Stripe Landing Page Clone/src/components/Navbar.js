import React from "react";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  function displaySubmenu(e) {
    const text = e.target.textContent;
    const currentBtn = e.target.getBoundingClientRect();
    const center = (currentBtn.left + currentBtn.right) / 2;
    const bottom = currentBtn.bottom - 5;

    openSubmenu(text, { center, bottom });
  }

  function handleSubmenu(e) {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <section className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </section>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
