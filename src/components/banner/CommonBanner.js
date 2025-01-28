import Image from "next/image";
import Background1 from "../../../public/images/BusinessRegistration2.jpg";
import Background5 from "../../../public/images/CabinBanner.jpeg";
import Background3 from "../../../public/images/DayPassBanner.jpeg";
import Background4 from "../../../public/images/DeskBanner.jpeg";
import Background2 from "../../../public/images/GSTRegistration.jpeg";
import ContactForm from "../form/ContactForm";
import classes from "./CommonBanner.module.css";

const data = [
  {
    heading: "Streamline Your Business Cerfification Process with Virtualxcel",
    subHeading:
      "At Virtualxcel, we understand the importance of a seamless business certification experience. Whether you're establishing a new venture or expanding your operations, our comprehensive services simplify the process, allowing you to focus on what matters most – growing your business. Discover our tailored solutions designed to meet your certification needs efficiently and effectively.",
    image: Background1,
  },
  {
    heading: "Simplify Your GST Cerfication with Virtualxcel",
    subHeading:
      "Ensure compliance and streamline your tax processes with Virtualxcel's expert GST Certification services. We provide a hassle-free experience, so you can concentrate on your business growth while we handle the complexities of GST certification. Explore our customized solutions for a smooth and efficient certification process.",
    image: Background2,
  },
  {
    heading:
      "Elevate Your Business Presence with Professional Mailing Address Services",
    subHeading:
      "Optimize Your Operations with Virtualxcel's Virtual Office Solutions. Gain a prestigious business address and reliable mail handling services tailored to meet your business needs.",
    image: Background2,
  },
  {
    heading: "Experience Flexibility with Our Day Passes",
    subHeading:
      "Enjoy a productive day at VirtualXcel's coworking spaces, tailored to your dynamic work style.",
    image: Background3,
  },
  {
    heading: " Your Personal Desk Awaits",
    subHeading:
      " Secure a dedicated desk at VirtualXcel, designed for focused and uninterrupted work.",
    image: Background4,
  },
  {
    heading: " Private Cabins for Premium Comfort",
    subHeading:
      "Elevate your workspace with VirtualXcel's exclusive private cabins, perfect for teams and individuals seeking privacy.",
    image: Background5,
  },
];

function CommonBanner({ value = 0 }) {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage}>
        <Image
          className={classes.image}
          src={data[value].image}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className={classes.container2}>
        <div className={classes.leftContainer}>
          <div className={classes.heading}>{data[value].heading}</div>
          <div className={classes.subHeading}>{data[value].subHeading}</div>
        </div>
        <div className={classes.rightContainer}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default CommonBanner;
