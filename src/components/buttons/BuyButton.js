import React from "react";
import classes from "./BuyButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

function BuyButton({ url }) {
  const fontSize = { xs: 14, sm: 16, md: 18, lg: 20 };

  return (
    <Link href={url} className={classes.buyNowButton}>
      Buy Now
      <ArrowForwardIcon sx={{ fontSize: fontSize }} />
    </Link>
  );
}

export default BuyButton;
