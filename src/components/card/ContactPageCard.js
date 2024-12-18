"use client";
import React from "react";
import classes from "./ContactPageCard.module.css";
import {
  phoneNumber1,
  phoneNumber2,
  email,
} from "@/app/data/ContactInformation";

function ContactPageCard({
  heading,
  icon,
  text,
  text2 = null,
  buttonText = null,
}) {
  const linkMap = {
    Chat: `https://wa.me/${phoneNumber1}`,
    Call: `tel:+${phoneNumber1}`,
    "E-Mail": `mailto:${email}`,
  };
  const linkMap2 = {
    Chat: `https://wa.me/${phoneNumber2}`,
    Call: `tel:+${phoneNumber2}`,
    "E-Mail": `mailto:${email}`,
  };

  const openLinkInNewTab = () => {
    const newTab = window.open(linkMap[buttonText], "_blank");
    newTab.focus();
  };
  const openLinkInNewTab2 = () => {
    const newTab = window.open(linkMap2[buttonText], "_blank");
    newTab.focus();
  };
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div>{icon}</div>
        <div className={classes.heading}>{heading}</div>
        <div className={classes.text}>
          {text}

          {buttonText !== "E-Mail" && (
            <span className={classes.text}>, {text2}</span>
          )}
        </div>

        <div onClick={openLinkInNewTab} className={classes.button}>
          {buttonText}
          {buttonText != "E-Mail" && <span>{text}</span>}
        </div>
        {buttonText != "E-Mail" && (
          <div onClick={openLinkInNewTab2} className={classes.button2}>
            {buttonText} {text2}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactPageCard;
