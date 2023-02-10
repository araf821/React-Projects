import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [colour, setColour] = useState();
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("orangered").all(10));

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colours = new Values(colour).all(10);
      setList(colours);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Colour Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder="#bebebe or skyblue"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Get Colours!
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((colour, index) => {
          return (
            <SingleColor
              key={index}
              {...colour}
              index={index}
              hexValue={colour.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
