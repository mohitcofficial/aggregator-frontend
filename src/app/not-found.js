import CustomLayout from "@/components/CustomLayout";
import React from "react";
import classes from "./notfound.module.css";
import Link from "next/link";
import { WebsiteURLs } from "./data/Links";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const metadata = {
  metadataBase: new URL("https://virtualxcel.in"),
  title: "Not Found",
  description: "Discover the ultimate coworking experience at Virtualxcel.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function NotFound() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <SentimentVeryDissatisfiedIcon
            sx={{ fontSize: { lg: 100, md: 100, sm: 90, sx: 90 } }}
          />
          <p className={classes.heading1}>404</p>
          <p className={classes.heading2}>Page Not Found !</p>
          <Link className={classes.backButton} href={WebsiteURLs.home}>
            <ArrowBackIcon
              sx={{ fontSize: { lg: 20, md: 22, sm: 20, sx: 18 } }}
            />
            Go Back
          </Link>
        </div>
      </div>
    </CustomLayout>
  );
}
