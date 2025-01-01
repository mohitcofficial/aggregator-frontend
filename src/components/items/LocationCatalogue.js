import classes from "./LocationCatalogue.module.css";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BuyButton from "../buttons/BuyButton";
import LocationSlider2 from "../slider/LocationSlider2";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function LocationCatalogue({ location }) {
  const fontSize = { xs: 14, sm: 14, md: 14, lg: 14 };
  const fontSize2 = { xs: 14, sm: 16, md: 14, lg: 20 };
  return (
    <div className={classes.container}>
      {location?.rating >= 4.5 && (
        <div className={classes.trendingRibbon}>Trending</div>
      )}
      <LocationSlider2 images={location?.images} />
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
            <div className={classes.item}>Business Registration</div>
            <div className={classes.item}>
              {location?.businessRegistrationPrice === 0 ? (
                "N/A"
              ) : (
                <>{`\u20B9${location?.businessRegistrationPrice}`} / year</>
              )}
            </div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.item}>GST Registration</div>
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
        <div className={classes.priceItem}>
          <div className={classes.underline}>Offers & Addons:</div>
        </div>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <DoneAllIcon sx={{ color: "#4bb543", fontSize: fontSize2 }} />
            Upto 10% off on Virtual Offices
          </li>
          <li className={classes.listItem}>
            <DoneAllIcon sx={{ color: "#4bb543", fontSize: fontSize2 }} />
            Temporary Signage Facility
          </li>
          <li className={classes.listItem}>
            <DoneAllIcon sx={{ color: "#4bb543", fontSize: fontSize2 }} />
            Mailing Services
          </li>
          <li className={classes.listItem}>
            <DoneAllIcon sx={{ color: "#4bb543", fontSize: fontSize2 }} />
            Upto 10% of meeting rooms
          </li>
        </ul>
        <div className={classes.buttonContainer}>
          <BuyButton url={`/virtual-office/buy/${location._id}`} />
        </div>
      </div>
    </div>
  );
}

export default LocationCatalogue;
