import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article key={id} className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggle ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
