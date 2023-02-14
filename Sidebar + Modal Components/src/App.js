import React, { useContext } from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { AppContext } from "./context";
function App() {
  const data = useContext(AppContext);

  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
