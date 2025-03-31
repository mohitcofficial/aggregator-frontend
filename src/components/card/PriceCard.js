import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import classes from "./PriceCard.module.css";
import DoneIcon from "@mui/icons-material/Done";

function PriceCard({ price, heading, subHeading, points, flag }) {
  return (
    <div
      className={`${classes.box1} ${flag ? classes.box2 : ""} ${
        classes.relative
      }`}
    >
      {flag ? (
        <div className={classes.ribbon}>Most Popular Plan</div>
      ) : (
        <div className={classes.ribbon}>Starting Price</div>
      )}
      <div className={classes.marginBox}>
        <div>
          <div className={classes.boxHeading}>
            <div className={classes.boxHeading1}>
              <div className={classes.leftBox}></div>
              <div className={classes.rightBox}>
                <div className={classes.priceBox}>
                  <CurrencyRupeeIcon
                    sx={{
                      color: "black",
                      fontSize: { xs: 20, sm: 20, md: 22, lg: 24 },
                    }}
                  />
                  <span className={classes.priceText}>{price}</span>
                  month
                </div>
                <p
                  className={`${classes.rightBoxText} ${classes.gradientText}`}
                >
                  Billed Annually
                </p>
              </div>
            </div>
            <div className={classes.boxHeading2}>{heading}</div>
          </div>
          <p className={classes.subHeading}>{subHeading}</p>
          <div className={classes.content}>
            <p className={classes.heading01}>Ideal for: </p>
            {points.map((item, index) => (
              <div key={index} className={classes.point}>
                <DoneIcon
                  sx={{
                    color: "rgb(0, 156, 0)",
                    fontSize: { xs: 18, sm: 20, md: 20, lg: 22 },
                  }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
