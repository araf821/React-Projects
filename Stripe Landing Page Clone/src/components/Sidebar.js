import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import links from "../data";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${showSidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {links.map((pages, index) => {
            const { page, links } = pages;
            return (
              <article id="index">
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { label, icon, url } = link;
                    return (
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
