import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState(people);
  const [currentReview, setCurrentReview] = useState(
    reviews[Math.floor(Math.random() * reviews.length)]
  );

  function randomizeList() {
    setCurrentReview(reviews[Math.floor(Math.random() * reviews.length)]);
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
            <img
              className="person-img"
              src={currentReview.image}
              alt={currentReview.name}
            />
            {/* ---------- QUOTATION ICON --------- */}
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
          </div>

          {/* REVIEW INFO */}
          <h4 className="author">{currentReview.name}</h4>
          <p className="job">{currentReview.job}</p>
          <p className="info">{currentReview.text}</p>

          {/* PREV & NEXT BUTTONS */}
          <FaChevronLeft className="prev-btn" />
          <FaChevronRight className="next-btn" />

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
