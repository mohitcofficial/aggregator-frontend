import React from "react";
import classes from "./NewYearOffer.module.css";

function NewYearOffer() {
  return (
    <div className={classes.container}>
      <div className={classes.dim}></div>
      <div className={classes.contentContainer}>
        <p className={classes.heading1}>New Financial Offer !</p>
        <p className={classes.heading2}>Upto 15% Off on Virtual Offices</p>
      </div>
    </div>
  );
}

export default NewYearOffer;
