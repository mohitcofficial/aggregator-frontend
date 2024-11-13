import React from "react";
import classes from "./ReviewCard.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function ReviewCard({ text, name, initials, rating }) {
  const hasHalfStar = rating % 1 !== 0;
  const starsArray = [];
  const fullStar = Math.floor(rating);
  for (let i = 0; i < fullStar; i++)
    starsArray.push(<StarIcon sx={{ color: "rgb(252, 217, 20)" }} />);
  return (
    <div className={classes.container}>
      <div className={classes.text}>{text}</div>
      <div className={classes.infoContainer}>
        <div className={classes.initials}>{initials}</div>
        <div className={classes.box}>
          <span className={classes.name}>{name}</span>
          <div className={classes.rating}>
            {starsArray.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            {hasHalfStar && (
              <StarHalfIcon sx={{ color: "rgb(252, 217, 20)" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
