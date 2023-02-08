import React from "react";
import Tour from "./Tour";
const Tours = ({ data, deleteItem }) => {
  return (
    <div>
      {data.map((tour) => {
        return <Tour {...tour} deleteItem={deleteItem} />;
      })}
    </div>
  );
};

export default Tours;
