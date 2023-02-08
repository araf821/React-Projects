import React from "react";

const Categories = ({ changeCategory }) => {
  return (
    <div className="btn-container">
      <button onClick={() => changeCategory("All")} className="filter-btn">
        All
      </button>
      <button
        onClick={() => changeCategory("breakfast")}
        className="filter-btn"
      >
        Breakfast
      </button>
      <button onClick={() => changeCategory("lunch")} className="filter-btn">
        Lunch
      </button>
      <button onClick={() => changeCategory("shakes")} className="filter-btn">
        Drinks
      </button>
    </div>
  );
};

export default Categories;
