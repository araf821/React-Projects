import React, { useState, useEffect } from "react";
import List from "./List";

function App() {
  const [alert, setAlert] = useState(false);
  const [item, setItem] = useState("");
  const [list, setList] = useState(["Snakes", "Lattes"]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (item === "") return;

    if (editing) {
      setList(
        list.map((listItem, itemIndex) => {
          if (itemIndex === editIndex) {
            return item;
          } else {
            return listItem;
          }
        })
      );
      setEditing(false);
      setItem("");
      return;
    }

    setList((prevList) => {
      prevList.push(item);
      return prevList;
    });
    setItem("");
  }

  function deleteItem(index) {
    setList((prevList) => {
      const newList = prevList.filter((item, itemIndex) => itemIndex !== index);
      return newList;
    });
  }

  function editItem(item, index) {
    setEditing(true);
    setItem(() => {
      return item;
    });
    setEditIndex(() => {
      return index;
    });
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {`${editing ? "Update" : "Add"}`}
          </button>
        </div>
      </form>

      {list.length > 0 ? (
        <>
          <List list={list} deleteItem={deleteItem} editItem={editItem} />

          <button className="clear-btn" onClick={() => setList([])}>
            Clear Items
          </button>
        </>
      ) : null}
    </section>
  );
}

export default App;
