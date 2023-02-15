import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const { showSubmenu, location } = useGlobalContext();
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
      asdf
    </aside>
  );
};

export default Submenu;
