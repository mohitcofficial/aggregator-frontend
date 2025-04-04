import React from "react";
import classes from "./BookButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

function BookButton({ url }) {
  const fontSize = { xs: 14, sm: 16, md: 18, lg: 20 };

  return (
    <Link href={url} className={classes.bookNowButton}>
      Book Now
      <ArrowForwardIcon sx={{ fontSize: fontSize }} />
    </Link>
  );
}

export default BookButton;
