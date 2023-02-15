import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
    </main>
  );
};

export default Home;
