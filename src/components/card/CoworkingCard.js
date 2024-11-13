import React from "react";
import classes from "./CoworkingCard.module.css";
import Image from "next/image";
import Image1 from "../../../public/images/DayPass.png";
import Image2 from "../../../public/images/Desk.jpg";
import Image3 from "../../../public/images/Cabin.jpeg";
import Link from "next/link";

function CoworkingCard({ heading, ind, link }) {
  const Images = [Image1, Image2, Image3];
  return (
    <Link className={classes.linkTag} href={link}>
      <div className={classes.container}>
        <Image
          className={`${classes.background}`}
          src={Images[ind]}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="hi"
          placeholder="blur"
          fill={true}
        />
        <div className={classes.heading}>{heading}</div>
      </div>
    </Link>
  );
}

export default CoworkingCard;
