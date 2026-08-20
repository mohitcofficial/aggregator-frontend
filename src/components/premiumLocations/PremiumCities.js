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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PublicIcon from "@mui/icons-material/Public";

function PremiumCities() {
  const data = [
    {
      name: "Gurgaon",
      state: "Haryana",
      price: "799",
      image: GurgaonImage,
      url: "/virtual-office/haryana/gurgaon",
    },
    {
      name: "Bangalore",
      state: "Karnataka",
      price: "799",
      image: BangaloreImage,
      url: "/virtual-office/karnataka/bangalore",
    },
    {
      name: "Delhi",
      state: "Delhi NCR",
      price: "799",
      image: DelhiImage,
      url: "/virtual-office/delhi/new-delhi",
    },
    {
      name: "Noida",
      state: "Uttar Pradesh",
      price: "799",
      image: NoidaImage,
      url: "/virtual-office/uttar-pradesh/noida",
    },
    {
      name: "Kolkata",
      state: "West Bengal",
      price: "799",
      image: KolkataImage,
      url: "/virtual-office/west-bengal/kolkata",
    },
    {
      name: "Mumbai",
      state: "Maharashtra",
      price: "999",
      image: MumbaiImage,
      url: "/virtual-office/maharashtra/mumbai",
    },
    {
      name: "Pune",
      state: "Maharashtra",
      price: "999",
      image: PuneImage,
      url: "/virtual-office/maharashtra/pune",
    },
    {
      name: "Hyderabad",
      state: "Telangana",
      price: "899",
      image: HyderabadImage,
      url: "/virtual-office/hyderabad/telangana",
    },
  ];
  const featureData = [
    {
      icon: LocationOnIcon,
      heading: "Premium Business Address",
      text: "Boost your brand credibility",
      color: "#f14916",
      bgColor: "#FEE5D6",
    },
    {
      icon: PublicIcon,
      heading: "Pan India Presence",
      text: "Multiple cities, one solution",
      color: "#0c64cf",
      bgColor: "#D8EBFE",
    },
    {
      icon: SupportAgentIcon,
      heading: "End-to-End Support",
      text: "We handle everything for you",
      color: "#29c22c",
      bgColor: "#E6F8E6",
    },
    {
      icon: CurrencyRupeeIcon,
      heading: "Affordable Plans",
      text: "Starting at just ₹699/month",
      color: "#ffae00",
      bgColor: "#FEE5D6",
    },
  ];
  return (
    <section className={classes.container}>
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
                  <div className={classes.state}>
                    <LocationOnIcon sx={{ fontSize: 18 }} />
                    <span>{city.state}</span>
                  </div>
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
        <div className={classes.features}>
          {featureData.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div className={classes.feature} key={index}>
                <div
                  style={{
                    backgroundColor: feature.bgColor,
                    border: `1px solid ${feature.color}`,
                  }}
                  className={classes.featureIcon}
                >
                  <Icon
                    sx={{
                      color: feature.color,
                      fontSize: { lg: 30, md: 28, sm: 26, sx: 24 },
                    }}
                  />
                </div>

                <div className={classes.featureContent}>
                  <h3 className={classes.featureHeading}>{feature.heading}</h3>
                  <p className={classes.featureText}>{feature.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PremiumCities;
