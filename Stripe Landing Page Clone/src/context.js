import React, { useState, useContext, createContext } from "react";
import links from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [location, setLocation] = useState({});

  function openSidebar() {
    setShowSidebar(true);
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  function openSubmenu(text, coordinates) {
    setLocation(coordinates);
    setShowSubmenu(true);
  }

  function closeSubmenu() {
    setShowSubmenu(false);
  }

  return (
    <AppContext.Provider
      value={{
        location,
        showSidebar,
        showSubmenu,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
