import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexValue }) => {
  const [alert, setAlert] = useState(false);

  const rgbValue = rgb.join(",");
  const hex = `#${hexValue}`;

  useEffect(() => {
    const timeout = setInterval(() => {
      setAlert(false);
    }, 1250);
    return () => clearInterval(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rgbValue})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied To Clipboard</p>}
    </article>
  );
};

export default SingleColor;
