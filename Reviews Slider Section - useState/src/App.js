import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);

  // A better way to ensure that we are not trying to access an index out of bounds.
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="section">
      <h2 className="title">Reviews</h2>
      <section className="section-center">
        {data.map((review, revIndex) => {
          const { id, image, name, title, quote } = review;
          let position = "nextSlide";
          if (revIndex === index) position = "activeSlide";
          if (
            revIndex === index - 1 ||
            (index === 0 && revIndex === data.length - 1)
          )
            position = "lastSlide";
          return (
            <article className={position} key={id}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <span className="icon">
                {" "}
                <FaQuoteRight />{" "}
              </span>

              {/* PREV and NEXT Buttons */}
              <button className="prev" onClick={() => setIndex(index - 1)}>
                {" "}
                <FiChevronLeft />{" "}
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                {" "}
                <FiChevronRight />{" "}
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;
