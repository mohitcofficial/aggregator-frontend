import React from "react";
import CountUp from "react-countup";
import classes from "./CounterCard.module.css";

function CounterCard({ start = 0, end = 100, text, suffix }) {
  return (
    <CountUp start={start} end={end} duration={2} separator=" " suffix={suffix}>
      {({ countUpRef, start }) => (
        <div className={classes.counterCard}>
          <span className={classes.count} ref={countUpRef} />
          <span className={classes.text} onClick={start}>
            {text}
          </span>
        </div>
      )}
    </CountUp>
  );
}

export default CounterCard;
