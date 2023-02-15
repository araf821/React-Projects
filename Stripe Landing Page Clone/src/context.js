import React, { useState, useContext, createContext } from "react";
import links from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function openSidebar() {
    setShowSidebar(true);
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        showModal,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
