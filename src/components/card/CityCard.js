import React from "react";
import classes from "./CityCard.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CityCard({ city }) {
  const fontSize = { xs: 14, sm: 16, md: 18, lg: 18 };
  const pathname = usePathname();
  return (
    <div className={classes.container}>
      {city?.rating >= 4.5 && (
        <div className={classes.trendingRibbon}>Trending</div>
      )}
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={city?.bannerImage[0]?.url}
          alt="Image"
          fill={true}
        />
      </div>
      <div className={classes.cardInfo}>
        <div className={classes.heading}>{city?.name}</div>
        <div className={classes.priceItem}>
          <div>Plan</div>
          <div>Starting Price</div>
        </div>
        <div className={classes.prices}>
          <div className={classes.priceItem}>
            <div className={classes.item}>Business Registration</div>
            <div className={classes.item}>
              &#8377;{city?.businessRegistrationPrice} / year
            </div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>GST Registration</div>
            <div className={classes.item}>
              &#8377;{city?.gstRegistrationPrice} / year
            </div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>Mailing Address</div>
            <div className={classes.item}>
              &#8377;{city?.mailingAddressPrice} / year
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.quotationButton}>
            Get Quotation
            <ArrowForwardIcon sx={{ fontSize: fontSize }} />
          </button>
          <Link
            href={`${pathname}/${city?.slug}`}
            className={classes.browseButton}
          >
            Browse Locations
            <ArrowForwardIcon sx={{ fontSize: fontSize }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
