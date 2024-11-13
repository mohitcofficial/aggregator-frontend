import classes from "./PremiumCities.module.css";
import BangaloreImage from "../../../public/images/Bangalore/Bangalore.jpeg";
import DelhiImage from "../../../public/images/Delhi/Delhi.jpg";
import GurgaonImage from "../../../public/images/Gurgaon/Gurgaon2.jpg";
import KolkataImage from "../../../public/images/Kolkata/Kolkata.jpg";
import MumbaiImage from "../../../public/images/Mumbai/Mumbai.jpg";
import NoidaImage from "../../../public/images/Noida/Noida2.jpeg";
import PuneImage from "../../../public/images/Pune/Pune.jpg";
import HyderabadImage from "../../../public/images/Hyderabad/Hyderabad.jpg";
import Image from "next/image";
import Link from "next/link";

function PremiumCities() {
  const data = [
    {
      name: "Gurgaon",
      price: "799",
      image: GurgaonImage,
      url: "/virtual-office/haryana-gurgaon",
    },
    {
      name: "Bangalore",
      price: "799",
      image: BangaloreImage,
      url: "/virtual-office/karnataka/bangalore",
    },
    {
      name: "Delhi",
      price: "799",
      image: DelhiImage,
      url: "/virtual-office/delhi/new-delhi",
    },
    {
      name: "Noida",
      price: "799",
      image: NoidaImage,
      url: "/virtual-office/uttar-pradesh/noida",
    },
    {
      name: "Kolkata",
      price: "799",
      image: KolkataImage,
      url: "/virtual-office/west-bengal/kolkata",
    },
    {
      name: "Mumbai",
      price: "999",
      image: MumbaiImage,
      url: "/virtual-office/maharashtra/mumbai",
    },
    {
      name: "Pune",
      price: "999",
      image: PuneImage,
      url: "/virtual-office/maharashtra/pune",
    },
    {
      name: "Hyderabad",
      price: "899",
      image: HyderabadImage,
      url: "/virtual-office/hyderabad/telangana",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <p className={classes.heading}>
          Most
          <span>Preferred Locations</span>
          in India
        </p>
        <div className={classes.citiesContainer}>
          {data.map((city, index) => (
            <Link href={city?.url} key={index} className={classes.card}>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  src={city.image}
                  alt="Image"
                  style={{ cursor: "inherit" }}
                  fill={true}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw"
                />
                <div className={classes.content}>
                  <span className={classes.name}>{city.name}</span>
                  <div className={classes.textContent}>
                    <span className={classes.text}>Starting at</span>
                    <span className={classes.text2}>
                      {/* <span className={classes.price}> */}
                      &#8377;{city.price}/{/* </span> */}
                      month
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PremiumCities;
