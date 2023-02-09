import React, { useState } from "react";
import data from "./data";

function App() {
  const [paragraphs, setParagraphs] = useState();

  function handleSubmit(e) {
    
  }

  return (
    <div className="section-center">
      <h3>Tired of boring old lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          value={paragraphs}
          defaultValue={1}
          name="paragraphs"
          id="paragraphs"
          onChange={(e) => setParagraphs(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <main></main>
    </div>
  );
}

export default App;
