import React from "react";
import classes from "./ConnectButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

function ConnectButton() {
  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      href="/contact-us"
    >
      <div className={classes.connectButton}>
        Connect
        <ArrowForwardIcon />
      </div>
    </Link>
  );
}

export default ConnectButton;
