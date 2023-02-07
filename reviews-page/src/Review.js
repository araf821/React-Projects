import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * people.length));

  const { name, job, image, text } = people[index];

  function randomizeList() {
    setIndex(Math.floor(Math.random() * people.length));
  }

  function decrement() {
    setIndex((index) => {
      let newIndex = 0;
      index === 0 ? (newIndex = people.length - 1) : (newIndex = index - 1);
      return newIndex;
    });
  }

  function increment() {
    setIndex((index) => {
      let newIndex = 0;
      index === people.length - 1 ? (newIndex = 0) : (newIndex = index + 1);
      return newIndex;
    });
  }

  return (
    <main>
      <div className="container">
        {/* ----------TITLE-------- */}
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>

        <article className="review">
          {/* ---------- IMAGE CONTAINER ----------- */}
          <div className="img-container">
            <img className="person-img" src={image} alt={name} />
            {/* ---------- QUOTATION ICON --------- */}
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>

          {/* REVIEW INFO */}
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>

          {/* PREV & NEXT BUTTONS */}
          <div className="button-container">
            <FaChevronLeft className="prev-btn" onClick={decrement} />
            <FaChevronRight className="next-btn" onClick={increment} />
          </div>

          {/* RANDOMIZE BUTTON */}
          <button className="random-btn" onClick={randomizeList}>
            Randomize
          </button>
        </article>
      </div>
    </main>
  );
};

export default Review;
