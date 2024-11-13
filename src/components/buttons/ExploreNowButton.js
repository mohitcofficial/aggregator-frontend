"use client";
import React from "react";
import classes from "./ExploreNowButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

function ExploreNowButton() {
  const router = useRouter();
  return (
    <div className={classes.button}>
      <div>Know More</div>
      <ArrowForwardIcon
        sx={{
          fontSize: { xs: 18, sm: 22, md: 24, lg: 28 },
          marginTop: "2px",
        }}
      />
    </div>
  );
}

export default ExploreNowButton;
