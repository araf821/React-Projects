import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Frequently Asked Questions</h3>

        <section className="info">
          {data.map((question) => {
            const { id, title, info } = question;
            return <SingleQuestion id={id} title={title} info={info} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
