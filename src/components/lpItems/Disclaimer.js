import React from "react";
import classes from "./Disclaimer.module.css";

function Disclaimer() {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <span className={classes.bold}>Disclaimer : </span>
        Virtualxcel is a private service provider and is not affiliated,
        endorsed, or associated with any government agency. We do not provide
        official government documents or services. Our platform offers
        independent business solutions, including workspace solutions,
        consultancy, and support services. Any references to government-related
        terms are for informational purposes only. For official government
        services, please visit the respective government websites.
      </div>
    </div>
  );
}

export default Disclaimer;
