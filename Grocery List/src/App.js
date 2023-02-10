import React, { useState, useEffect } from "react";
import List from "./List";

function App() {
  const [alert, setAlert] = useState(false);
  const [item, setItem] = useState("");
  const [list, setList] = useState(["bananas", "eggs", "snakes"]);

  function handleSubmit(e) {
    e.preventDefault();
    if (item === "") return;
    setList((prevList) => {
      prevList.push(item);
      return prevList;
    });
    setItem("");
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            Add
          </button>
        </div>
      </form>

      <List list={list} />

      <button className="clear-btn" onClick={() => setList([])}>
        Clear Items
      </button>
    </section>
  );
}

export default App;
