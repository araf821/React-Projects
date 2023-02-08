import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  function handleClick() {
    // If the length of the people array is 0, we fill the array with our data.
    // Otherwise, empty the array.
    !people.length ? setPeople(data) : setPeople([]);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={handleClick}>
          {!people.length ? "Refresh List" : "Clear Reminders"}
        </button>
      </section>
    </main>
  );
}

export default App;
