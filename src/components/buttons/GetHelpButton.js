import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import classes from "./GetHelpButton.module.css";
import Link from "next/link";
function GetHelpButton() {
  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      href="/contact-us"
    >
      <div className={classes.button}>
        Get Help
        <ArrowForwardIcon sx={{ fontSize: 18 }} />
      </div>
    </Link>
  );
}

export default GetHelpButton;
