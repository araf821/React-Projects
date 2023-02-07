import React from "react";
import Tour from "./Tour";
const Tours = ({ data }) => {
  return (
    <div>
      {data.map((tour) => {
        return <Tour {...tour} />;
      })}
    </div>
  );
};

export default Tours;
