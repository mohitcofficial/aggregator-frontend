import React from "react";
import classes from "./ContactUsBanner.module.css";
import ContactImage from "../../../public/images/Contact.jpg";
import Image from "next/image";

function ContactUsBanner() {
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.leftContent}>
        <div className={classes.text}>
          <div className={classes.heading}>Get in touch</div>
          <div className={classes.subHeading}>
            Want to get in touch ? We'd love to hear from you.
          </div>
        </div>
      </div>
      <div className={classes.rightContent}>
        <div className={classes.imageContainer}>
          <Image
            src={ContactImage}
            alt="Image"
            fill={true}
            sizes="(max-width: 768px) 100vw"
            className={classes.image}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUsBanner;
