"use client";
import React from "react";
import classes from "./LearnMoreButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

function LearnMoreButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/contactus")} className={classes.button}>
      <div>Learn More</div>
      <ArrowForwardIcon />
    </div>
  );
}

export default LearnMoreButton;
