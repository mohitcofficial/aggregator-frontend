import React from "react";
import classes from "./FrequentQuestion.module.css";
import { virtualOfficesQA } from "@/app/data/QA";
import CustomDrawer from "./CustomDrawer";

function FrequentQuestions() {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.heading}>
          <p className={`${classes.text} ${classes.bold}`}>Frequently Asked</p>
          <p className={`${classes.text}`}>Questions</p>
        </div>
        {virtualOfficesQA.map((item, index) => (
          <CustomDrawer
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentQuestions;
