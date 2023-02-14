import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function openSidebar() {
    setShowSidebar(true);
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <AppContext.Provider
      value={
        (showModal,
        showSidebar,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar)
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
