import React from "react";
import classes from "./ContactUsFormContainer.module.css";
import ContactImage from "../../../public/images/ContactForm.png";
import Image from "next/image";
import ContactUsPageForm from "../form/ContactUsPageForm";

function ContactUsFormContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={ContactImage}
          alt="Image"
          fill={true}
          placeholder="blur"
        />
      </div>
      <ContactUsPageForm />
    </div>
  );
}

export default ContactUsFormContainer;
