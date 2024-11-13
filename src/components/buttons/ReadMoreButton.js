"use client";
import React from "react";
import { useRouter } from "next/navigation";
import classes from "./ReadMoreButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ReadMoreButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/contact-us")}
      className={classes.readMoreButton}
    >
      Read More
      <ArrowForwardIcon />
    </div>
  );
}

export default ReadMoreButton;
