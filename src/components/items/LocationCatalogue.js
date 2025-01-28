import classes from "./LocationCatalogue.module.css";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BuyButton from "../buttons/BuyButton";
import LocationSlider2 from "../slider/LocationSlider2";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Image from "next/image";
import OfferImage from "../../../public/images/Offer.jpeg";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import PayForm from "../form/PayForm";

function LocationCatalogue({ location }) {
  const fontSize = { xs: 14, sm: 14, md: 14, lg: 14 };
  const fontSize2 = { xs: 14, sm: 16, md: 14, lg: 20 };
  const fontSize3 = { xs: 30, sm: 34, md: 40, lg: 48 };
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
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
          <div className={classes.headingContainer}>
            <p className={classes.heading}>{location?.name}</p>
            <p className={classes.subHeading}>({location?.cityId?.["name"]})</p>
          </div>
          <div className={classes.priceContainer}>
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
          </div>
          <PayForm location={location} />
          <div className={classes.offeringsContainer}>
            <div className={classes.priceItem}>
              <div className={classes.underline}>Offers & Addons:</div>
            </div>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <DoneAllIcon sx={{ color: "#4bb543", fontSize: fontSize2 }} />
                Upto 10% off on meeting rooms & desk plans
              </li>
              <li className={classes.listItem}>
                <DoneAllIcon sx={{ color: "#4bb543", fontSize: fontSize2 }} />
                Zero Cost Temporary Signage Facility
              </li>
              <li className={classes.listItem}>
                <DoneAllIcon sx={{ color: "#4bb543", fontSize: fontSize2 }} />
                Mailing Services Available
              </li>
              <li className={classes.listItem}>
                <DoneAllIcon sx={{ color: "#4bb543", fontSize: fontSize2 }} />
                Upto 10% off on Virtual Offices
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.stickyContainer}>
        <div className={classes.offerContainer}>
          <Image
            className={classes.image}
            src={OfferImage}
            alt="Image"
            fill={true}
          />
          <div className={classes.offerTextContainer}>
            <p className={classes.offerText}>
              Get flat <span>5%</span> off on Virtual Offices !
            </p>
            <p>Applied for 2 year tenure only</p>
          </div>
        </div>
        <div className={classes.contactContainer}>
          <div className={classes.headingContainer2}>
            <p className={classes.heading2}>Still Struggling for GST ?</p>
            <p className={classes.subHeading2}>We got you !</p>
          </div>
          <div className={classes.personContainer}>
            <PersonIcon
              sx={{ fontSize: fontSize3 }}
              className={classes.personIcon}
            />
            <div className={classes.infoContainer2}>
              <p className={classes.personName}>Mohit Chandra</p>
              <p className={classes.personEmail}>sales@virtualxcel.in</p>
            </div>
          </div>
          <Link className={classes.callButton} href={"Tel:09871001079"}>
            Call +91 9871001079
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LocationCatalogue;
