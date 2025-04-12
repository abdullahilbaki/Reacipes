import React from "react";

const Rating = () => {
  return (
    <div className="rating">
      <div className="mask mask-star" aria-label="1 star"></div>
      <div className="mask mask-star" aria-label="2 star"></div>
      <div className="mask mask-star" aria-label="3 star"></div>
      <div
        className="mask mask-star"
        aria-label="4 star"
        aria-current="true"
      ></div>
      <div className="mask mask-star" aria-label="5 star"></div>
    </div>
  );
};

export default Rating;
