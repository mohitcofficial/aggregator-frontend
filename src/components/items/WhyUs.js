import React from "react";
import classes from "./WhyUs.module.css";
import PaidIcon from "@mui/icons-material/Paid";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SecurityIcon from "@mui/icons-material/Security";
import PsychologyIcon from "@mui/icons-material/Psychology";

function WhyUs() {
  return (
    <div className={classes.container}>
      <div className={classes.container2}>
        <p className={classes.heading}>
          Why Virtualxcel is Your Trusted Virtual Office Provider?
        </p>
        <p className={classes.subHeading}>
          Let our workspace solution experts simplify your office search. With
          deep expertise, we ensure a hassle-free experience, finding exactly
          what you need for your ideal workspace solution.
        </p>
        <div className={classes.container3}>
          <div className={classes.box}>
            <div className={classes.card}>
              <PaidIcon
                className={classes.icon}
                sx={{
                  fontSize: { xs: 24, sm: 28, md: 34, lg: 38 },
                }}
              />
              <div className={classes.content}>
                <p className={classes.heading2}>Lowest Price Assurance</p>
                <p className={classes.text}>
                  Get an extra 10 off if you discover a lower rate at the same
                  partner space.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <MoreTimeIcon
                className={classes.icon}
                sx={{
                  fontSize: { xs: 24, sm: 28, md: 34, lg: 40 },
                }}
              />
              <div className={classes.content}>
                <p className={classes.heading2}>Rapid Document Processing</p>
                <p className={classes.text}>
                  Documents typically delivered within 5 to 7 working days.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.card}>
              <PostAddIcon
                className={classes.icon}
                sx={{
                  fontSize: { xs: 24, sm: 28, md: 34, lg: 40 },
                }}
              />
              <div className={classes.content}>
                <p className={classes.heading2}>
                  Digital Verification and Agreement
                </p>
                <p className={classes.text}>
                  Enjoy the ease of digital KYC and agreements.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <CurrencyExchangeIcon
                className={classes.icon}
                sx={{
                  fontSize: { xs: 24, sm: 28, md: 34, lg: 40 },
                }}
              />
              <div className={classes.content}>
                <p className={classes.heading2}>Guaranteed Refund</p>
                <p className={classes.text}>
                  Receive a full refund if your GST or company certification is
                  declined.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.card}>
              <PsychologyIcon
                className={classes.icon}
                sx={{
                  fontSize: { xs: 24, sm: 28, md: 34, lg: 40 },
                }}
              />
              <div className={classes.content}>
                <p className={classes.heading2}>Experienced Team</p>
                <p className={classes.text}>
                  Our team brings years of expertise and industry experience to
                  deliver exceptional results.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <SecurityIcon
                className={classes.icon}
                sx={{
                  fontSize: { xs: 24, sm: 28, md: 34, lg: 40 },
                }}
              />
              <div className={classes.content}>
                <p className={classes.heading2}>Privacy & Security</p>
                <p className={classes.text}>
                  Trust in our commitment to providing a secure and confidential
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
