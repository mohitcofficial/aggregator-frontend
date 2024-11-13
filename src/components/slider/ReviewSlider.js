"use client";
import React, { useEffect, useRef } from "react";
import classes from "./ReviewSlider.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { reviews } from "@/app/data/Reviews";
import ReviewCard from "../card/ReviewCard";
import ReviewsIcon from "@mui/icons-material/Reviews";

function ReviewSlider() {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const fontSize = { lg: 36, md: 34, sm: 32, xs: 30 };
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.leftBox}>
          <span className={classes.heading}>
            <ReviewsIcon
              sx={{
                fontSize: fontSize,
                color: "rgb(173, 52, 16)",
                marginTop: "6px",
              }}
            />
            Client Testimonials
          </span>
          <span className={classes.subHeading}>
            Here&#39;s what our clients have to say about us.
          </span>
          <div className={classes.buttons}>
            <div
              onClick={() => sliderRef?.current?.slickPrev()}
              className={classes.button}
            >
              <ArrowBackIcon
                sx={{ fontSize: { xs: 25, sm: 25, md: 25, lg: 36 } }}
              />
            </div>
            <div
              onClick={() => sliderRef?.current?.slickNext()}
              className={classes.button}
            >
              <ArrowForwardIcon
                sx={{ fontSize: { xs: 25, sm: 25, md: 25, lg: 36 } }}
              />
            </div>
          </div>
        </div>
        <div className={classes.rightBox}>
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                initials={review.initials}
                text={review.text}
                rating={review.rating}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ReviewSlider;
