import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [category, setCategory] = useState("All");

  function changeCategory(str) {
    setCategory(str)
  }

  return (
    <main className="menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>

      <Categories changeCategory={changeCategory} />

      <div className="section-center">
        <Menu items={items} category={category} />
      </div>
    </main>
  );
}

export default App;
