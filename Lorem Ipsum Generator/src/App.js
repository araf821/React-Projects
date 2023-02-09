import React, { useState } from "react";
import data from "./data";

function App() {
  const [paragraphs, setParagraphs] = useState(0);
  const [generate, setGenerate] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setGenerate(paragraphs);
  }

  return (
    <div className="section-center">
      <h3>Tired of boring old lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          min={0}
          max={8}
          value={paragraphs}
          name="paragraphs"
          id="paragraphs"
          onChange={(e) => setParagraphs(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {data.map((paragraph, index) => {
          if (index < generate) {
            return <p key={index}>{paragraph}</p>;
          }
        })}
      </article>
    </div>
  );
}

export default App;
