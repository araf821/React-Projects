import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [category, setCategory] = useState("All")

  return (
    <main className="menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>

      <div className="btn-container">
        <button className="filter-btn">All</button>
        <button className="filter-btn">Breakfast</button>
        <button className="filter-btn">Lunch</button>
        <button className="filter-btn">Drinks</button>
      </div>

      <div className="section-center">
        <Menu items={items} category={category} />
      </div>
      
    </main>
  );
}

export default App;
