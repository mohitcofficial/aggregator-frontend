"use client";
import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import classes from "./CustomDrawer.module.css";

function CustomDrawer({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={classes.questionContainer}
      >
        <p className={classes.question}>{question}</p>
        {open ? (
          <ArrowUpwardIcon
            sx={{ fontSize: { xs: 20, sm: 24, md: 26, lg: 26 } }}
          />
        ) : (
          <ArrowDownwardIcon
            sx={{ fontSize: { xs: 20, sm: 24, md: 26, lg: 26 } }}
          />
        )}
      </div>
      {open &&
        answer.map((ans, index) => (
          <p key={index} className={classes.answer}>
            {ans}
          </p>
        ))}
      <hr className={classes.line} />
    </div>
  );
}

export default CustomDrawer;
