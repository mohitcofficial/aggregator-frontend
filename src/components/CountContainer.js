import React from "react";
import classes from "./CountContainer.module.css";
import CounterCard from "./card/CounterCard";

const counterData = [
  {
    start: 0,
    end: 100,
    suffix: "+",
    text: "PAN India Locations",
  },
  {
    start: 0,
    end: 20,
    suffix: "+",
    text: "States",
  },
  {
    start: 0,
    end: 2000,
    suffix: "+",
    text: "Trusted by Clients So Far",
  },
  {
    start: 0,
    end: 24,
    suffix: "/7",
    text: "Customer Support",
  },
];

function CountContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        {counterData.map((item, index) => (
          <CounterCard
            key={index}
            start={item.start}
            end={item.end}
            suffix={item.suffix}
            text={item.text}
            delay={1}
          />
        ))}
      </div>
    </div>
  );
}

export default CountContainer;
