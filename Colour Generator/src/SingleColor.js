import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);

  const rgbValue = rgb.join(",");

  return (
    <article className="color" style={{ backgroundColor: `rgb(${rgbValue})` }}>
      {rgbValue}
    </article>
  );
};

export default SingleColor;
