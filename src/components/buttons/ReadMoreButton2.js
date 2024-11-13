"use client";
import React from "react";
import { useRouter } from "next/navigation";
import classes from "./ReadMoreButton2.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import toast from "react-hot-toast";
import Link from "next/link";

function ReadMoreButton2() {
  const router = useRouter();
  const handleMaintainance = () => {
    toast("Section Under Maintainance!", {
      icon: "⚠️",
    });
  };
  const fontSize = { lg: 20, md: 30, sm: 30, xs: 28 };

  return (
    <div className={classes.readMoreButton}>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          gap: "4px",
          alignItems: "center",
          color: "inherit",
        }}
        href="https://blog.virtualxcel.in/"
      >
        Read More
        <ArrowForwardIcon sx={{ fontSize: fontSize }} />
      </Link>
    </div>
  );
}

export default ReadMoreButton2;
