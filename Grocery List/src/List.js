import React from "react";
export default function List({ list, deleteItem, editItem }) {
  return (
    <ul className="grocery-container">
      {list.map((item, index) => {
        return (
          <li key={index} className="grocery-item">
            <p className="title">{item}</p>
            <div className="buttons">
              <button className="edit-btn" onClick={() => editItem(item, index)} >Edit</button>
              <button className="delete-btn" onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
