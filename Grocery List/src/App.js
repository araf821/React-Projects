import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState(false);
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery List</h3>
        <div className="form-control">
          <input type="text" className="grocery" />
          <button className="submit-btn" type="submit">
            Add
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <div className="grocery-item">
          <p className="title">Item</p>
          <div className="buttons">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>
      <button className="clear-btn">Clear Items</button>
    </section>
  );
}

export default App;
