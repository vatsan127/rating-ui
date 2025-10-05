import React, { useState } from "react";

const Star = () => {
  const [rating, setRating] = useState(0); // Current clicked rating
  const [hoverRating, setHoverRating] = useState(0); // Hovered rating temporarily

  return (
    <div className="stars" style={{ cursor: "pointer" }}>
      {[1, 2, 3, 4, 5].map((star) => {
        // Determine star color: gold if <= hoverRating or rating, else default
        const isGold = star <= (hoverRating || rating);
        return (
          <span
            key={star}
            className="star"
            style={{ color: isGold ? "gold" : "grey" }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {"\u2605"}
          </span>
        );
      })}
    </div>
  );
};

export default Star;
