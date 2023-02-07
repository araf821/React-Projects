import React from "react";

const Tour = ({ id, name, info, image, price, deleteItem }) => {
  return (
    <div className="single-tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn" onClick={() => deleteItem(id)}>Not Interested</button>
      </footer>
    </div>
  );
};

export default Tour;
