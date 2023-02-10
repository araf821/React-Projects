import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexValue }) => {
  const [alert, setAlert] = useState(false);

  const rgbValue = rgb.join(",");
  const hex = `#${hexValue}`;

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rgbValue})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied To Clipboard</p>}
    </article>
  );
};

export default SingleColor;
