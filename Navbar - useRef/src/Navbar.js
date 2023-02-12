import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // Every time is affected, we execute this useEffect function to determine
  // what the height of our links-container needs to be.
  useEffect(() => {
    try {
      // Get the current height of the links, which initially is 0.
      const linksHeight = linksRef.current.getBoundingClientRect();

      // If the toggle button is clicked on, then the linksContainer height is set to
      // however many pixels the linksHeight is.
      if (toggle) {
        linksContainerRef.current.style.height = `${linksHeight.height}px`;
      } else {
        // If toggle is not true, then we set the linksContainer height to 0.
        linksContainerRef.current.style.height = "0px";
      }
    } catch (error) {
      console.log(error);
    }
  }, [toggle]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="" />
            <button className="nav-toggle" onClick={() => setToggle(!toggle)}>
              <FaBars />
            </button>
          </div>

          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  {" "}
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
