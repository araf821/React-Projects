import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState(people);

  const randomReview = reviews[Math.floor(Math.random() * reviews.length)];

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
              src={randomReview.image}
              alt={randomReview.name}
            />
            {/* ---------- QUOTATION ICON --------- */}
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
          </div>

          {/* REVIEW INFO */}
          <h4 className="author">{randomReview.name}</h4>
          <p className="job">{randomReview.job}</p>
          <p className="info">{randomReview.text}</p>
          
          {/* PREV & NEXT BUTTONS */}
          <FaChevronLeft className="prev-btn" />
          <FaChevronRight className="next-btn" />
        </article>
      </div>
    </main>
  );
};

export default Review;
