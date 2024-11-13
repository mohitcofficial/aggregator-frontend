import Image from "next/image";
import WhyCoworkingImage from "../../../public/images/WhyCoworking.jpg";
import classes from "./WhyCoworking.module.css";

function WhyCoworking() {
  return (
    <div className={classes.container}>
      <div className={classes.container2}>
        <div className={classes.heading}>
          Benefits of choosing
          <span>Coworking </span>
          <span>Space?</span>
        </div>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            Inspiration from Diverse Professionals: Surround yourself with a
            variety of talents and expertise to fuel your creativity.
          </li>
          <li className={classes.listItem}>
            Work-Life Balance: Enjoy a dedicated workspace that helps separate
            your professional and personal life.
          </li>
          <li className={classes.listItem}>
            Access to Workshops and Events: Participate in regular events and
            workshops to enhance your skills and knowledge.
          </li>
          <li className={classes.listItem}>
            Business Growth Opportunities: Leverage the coworking community to
            find new clients, partners, and investors.
          </li>
          <li className={classes.listItem}>
            Professional Environment: Work in a space designed to boost
            productivity and present a professional image to clients.
          </li>
          <li className={classes.listItem}>
            Mental Well-being: Reduce isolation and boost your mental health by
            being part of a vibrant community.
          </li>
        </ul>
        {/* <div className={classes.buttonContainer}>
          <ReadMoreButton />
        </div> */}
      </div>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={WhyCoworkingImage}
          alt="Image"
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
    </div>
  );
}

export default WhyCoworking;
