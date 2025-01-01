"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import classes from "./LocationSlider2.module.css";

function LocationSlider2({ images }) {
  const sliderRef = useRef(null);
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.container}>
      <Slider ref={sliderRef} {...settings}>
        {images?.map((image, index) => (
          <div key={index} className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={image.url}
              alt="Image"
              fill={true}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LocationSlider2;
