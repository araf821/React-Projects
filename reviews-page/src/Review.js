import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * people.length));
  const [reviews, setReviews] = useState(people);

  const { id, name, job, image, text } = reviews[index];

  function randomizeList() {
    setIndex(Math.floor(Math.random() * people.length));
  }

  function decrement() {
    //
  }

  function increment() {}

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
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
          </div>

          {/* REVIEW INFO */}
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>

          {/* PREV & NEXT BUTTONS */}
          <FaChevronLeft className="prev-btn" onClick={decrement} />
          <FaChevronRight className="next-btn" onClick={increment} />

          {/* RANDOMIZE BUTTON */}
          <div>
            <button className="random-btn" onClick={randomizeList}>
              Randomize
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Review;
