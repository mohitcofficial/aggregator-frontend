"use client";
import React from "react";
import classes from "./ContactPageCard.module.css";

function ContactPageCard({ heading, icon, text, buttonText = null }) {
  const linkMap = {
    Chat: "https://wa.me/9871001079",
    Call: "tel:+9871001079",
    "E-Mail": "mailto:sales@virtualxcel.in",
  };
  const openLinkInNewTab = () => {
    const newTab = window.open(linkMap[buttonText], "_blank");
    newTab.focus();
  };
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div>{icon}</div>
        <div className={classes.heading}>{heading}</div>
        <div className={classes.text}>{text}</div>

        <div onClick={openLinkInNewTab} className={classes.button}>
          {buttonText}
        </div>
      </div>
    </div>
  );
}

export default ContactPageCard;
