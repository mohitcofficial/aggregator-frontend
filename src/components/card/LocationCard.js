import React from "react";
import classes from "./LocationCard.module.css";

import LocationSlider from "../slider/LocationSlider";
import BookButton from "../buttons/BookButton";
import GetQuoteButton from "../buttons/GetQuoteButton";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import dynamic from "next/dynamic";
// const LocationSlider = dynamic(
//   () => import("../../components/slider/LocationSlider"),
//   {
//     ssr: false,
//   }
// );

function LocationCard({ location }) {
  const fontSize = { xs: 14, sm: 16, md: 14, lg: 14 };
  return (
    <div className={classes.container}>
      {location?.rating >= 4.5 && (
        <div className={classes.trendingRibbon}>Trending</div>
      )}
      <LocationSlider images={location?.images} />
      <div className={classes.cardInfo}>
        <div className={classes.tagsContainer}>
          <div className={classes.ratingContainer}>
            <span>{location?.rating}</span>
            <StarIcon sx={{ fontSize: fontSize }} />
          </div>
          {location?.rating >= 4.5 && (
            <div className={classes.topRatedContainer}>
              <span>Top Rated</span>
              <WorkspacePremiumIcon sx={{ fontSize: fontSize }} />
            </div>
          )}
          {location?.mailingAddressPrice <= 9000 && (
            <div className={classes.affordableTagContainer}>
              <span>Affordable</span>
              <CurrencyRupeeIcon sx={{ fontSize: fontSize }} />
            </div>
          )}
        </div>
        <div className={classes.heading}>{location?.name}</div>
        <div className={classes.priceItem}>
          <div>Plan</div>
          <div>Price</div>
        </div>
        <div className={classes.prices}>
          <div className={classes.priceItem}>
            <div className={classes.item}>Business Registration</div>
            <div className={classes.item}>
              &#8377;{location?.businessRegistrationPrice} / year
            </div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>GST Registration</div>
            <div className={classes.item}>
              &#8377;{location?.gstRegistrationPrice} / year
            </div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>Mailing Address</div>
            <div className={classes.item}>
              &#8377;{location?.mailingAddressPrice} / year
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <GetQuoteButton />
          <BookButton url={`/contact-us`} />
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
