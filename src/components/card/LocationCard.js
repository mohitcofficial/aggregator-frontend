import React from "react";
import classes from "./LocationCard.module.css";

import LocationSlider from "../slider/LocationSlider";
import BookButton from "../buttons/BookButton";
import GetQuoteButton from "../buttons/GetQuoteButton";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LPModal from "../lpItems/LPModal";
import { usePathname } from "next/navigation";

function LocationCard({ location }) {
  const fontSize = { xs: 14, sm: 16, md: 14, lg: 14 };
  const pathname = usePathname();
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
          {location?.businessRegistrationPrice >= 15000 && (
            <div className={classes.premiumTagContainer}>
              <span>Premium</span>
              <WorkspacePremiumIcon sx={{ fontSize: fontSize }} />
            </div>
          )}
          {location?.rating >= 4.5 && (
            <div className={classes.topRatedContainer}>
              <span>Top Rated</span>
              <ArrowCircleUpIcon sx={{ fontSize: fontSize }} />
            </div>
          )}
          {location?.mailingAddressPrice <= 10000 && (
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
            <div className={classes.item}>Business Plan</div>
            <div className={classes.item}>
              {location?.businessRegistrationPrice === 0 ? (
                "N/A"
              ) : (
                <>{`\u20B9${location?.businessRegistrationPrice}`} / year</>
              )}
            </div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>GST Plan</div>
            <div className={classes.item}>
              {location?.gstRegistrationPrice === 0 ? (
                "N/A"
              ) : (
                <>{`\u20B9${location?.gstRegistrationPrice}`} / year</>
              )}
            </div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>Mailing Address</div>
            <div className={classes.item}>
              {location?.mailingAddressPrice === 0 ? (
                "N/A"
              ) : (
                <>{`\u20B9${location?.mailingAddressPrice}`} / year</>
              )}
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <div style={{ width: "48%" }}>
            <LPModal>
              <GetQuoteButton />
            </LPModal>
          </div>
          <BookButton url={`${pathname}/${location?.slug}`} />
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
