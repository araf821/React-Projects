import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <div className="person" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div className="section">
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
