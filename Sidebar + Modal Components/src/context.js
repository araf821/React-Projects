import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  function openModal() {
    console.log("Opening Modal");
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function openSidebar() {
    console.log("Opening Sidebar");

    setShowSidebar(true);
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <AppContext.Provider
      value={{
        showModal,
        showSidebar,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
