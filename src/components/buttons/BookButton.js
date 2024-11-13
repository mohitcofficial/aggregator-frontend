"use client";
import React from "react";
import { useRouter } from "next/navigation";
import classes from "./BookButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function BookButton({ url }) {
  const router = useRouter();
  const fontSize = { xs: 14, sm: 16, md: 18, lg: 20 };

  const handleClick = () => {
    // window.open(url, "_blank");
    router.push("/contact-us");
  };

  return (
    <button onClick={handleClick} className={classes.bookNowButton}>
      Book Now
      <ArrowForwardIcon sx={{ fontSize: fontSize }} />
    </button>
  );
}

export default BookButton;
