import React, { useState, useEffect } from "react";
import List from "./List";

function loadItems() {
  let list = localStorage.getItem("list");
  if (list) return JSON.parse(localStorage.getItem("list"));
  else return ["Snakes", "Lattes"];
}

function App() {
  const [alert, setAlert] = useState(false);
  const [item, setItem] = useState("");
  const [list, setList] = useState(loadItems());
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  // useEffect that's called every time the list is updated, storing the updated
  // list in our local storage. 
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list, handleSubmit]);

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

      {alert 
      ? null 
      : null}

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
