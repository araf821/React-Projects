import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import links from "../data";

const Submenu = () => {
  const { showSubmenu, location, page } = useGlobalContext();
  const containerRef = useRef(null);

  useEffect(() => {
    const submenu = containerRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      ref={containerRef}
      className={`${showSubmenu ? "submenu show" : "show"}`}
    >
      <h4>{page.page}</h4>
      <div className="submenu-center col-2">
        {page.links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
