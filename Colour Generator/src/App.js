import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [colour, setColour] = useState();
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
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
            placeholder="#bebebe"
          />
          <button className="btn">Get Colours!</button>
        </form>
      </section>
      <section className="colors"></section>
    </>
  );
}

export default App;
