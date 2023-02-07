import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteItem }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="single-tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          {!readMore ? (
            <button onClick={() => setReadMore(!readMore)}>&#8594;</button>
          ) : (
            <button onClick={() => setReadMore(!readMore)}>&#8592;</button>
          )}
        </p>
        <button className="delete-btn" onClick={() => deleteItem(id)}>
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
