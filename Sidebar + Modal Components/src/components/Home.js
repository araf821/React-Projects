import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <button className="btn">Show Modal</button>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
    </main>
  );
};

export default Home;
