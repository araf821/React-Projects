import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState(data);

  function next() {
    let newIndex = 0;
    setIndex(() => {
      index === reviews.length - 1 ? (newIndex = 0) : (newIndex = index + 1);
      return newIndex;
    });
  }

  function prev() {
    let newIndex = 0;
    setIndex(() => {
      index === 0 ? (newIndex = reviews.length - 1) : (newIndex = index - 1);
      return newIndex;
    });
  }

  return (
    <div className="section">
      <h2 className="title">Reviews</h2>
      <section className="section-center">
        {reviews.map((review, revIndex) => {
          const { id, image, name, title, quote } = review;
          let position = "nextSlide";
          if (revIndex === index) position = "activeSlide";
          if (
            revIndex === index - 1 ||
            (index === 0 && revIndex === review.length - 1)
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
              <button className="prev" onClick={prev}>
                {" "}
                <FiChevronLeft />{" "}
              </button>
              <button className="next" onClick={next}>
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
