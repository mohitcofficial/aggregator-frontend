import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import classes from "./CoworkingPriceCard.module.css";
import Link from "next/link";
import { WebsiteURLs } from "@/app/data/Links";

const data = [
  {
    price: 399,
    offerings: [
      "Full Working Day Access",
      "High-Speed Internet & Printer",
      "Clean & Productive Environment",
      "Comfortable Seating",
      "Complimentary Tea & Coffee",
      "Access to Common Areas",
      "Power Backup",
      "Air Conditioning",
      "On-site Support Staff",
      "Access to Kitchen Facilities",
    ],
    suffix: "Day",
    subHeading: "Day Pass Plan without Meeting Room",
  },
  {
    price: 1499,
    offerings: [
      "Full Working Day Access",
      "Meeting/Conference Rooms",
      "High-Speed Internet & Printer",
      "Clean & Productive Environment",
      "Comfortable Seating",
      "Complimentary Tea & Coffee",
      "Access to Common Areas",
      "Power Backup",
      "Air Conditioning",
      "On-site Support Staff",
      "Networking Opportunities",
      "Access to Kitchen Facilities",
    ],
    suffix: "Day",
    subHeading: "Day Pass Plan including Meeting Room",
  },
  {
    price: 599,
    offerings: [
      "Private Meeting Room Access",
      "High-Speed Wi-Fi",
      "Whiteboard with Markers",
      "Comfortable Seating for Up to 8-10 People",
      "Soundproofed for Privacy",
      "Complimentary Tea, Coffee, and Water",
      "Sanitized and Clean Environment",
      "Reception and Guest Management",
      "Flexible Booking Hours",
      "Access to Printing and Scanning",
      "Access to Common Areas and Lounge",
      "Catering Services on Request",
      "Power Outlets and USB Charging Ports",
      "Air Conditioning",
      "Discounted Rates for Extended Hours",
      "Access to Parking Facilities (Optional)",
      //   "Screen Display or Projector (Optional)",
    ],
    subHeading: "Meeting/Conference Room Plan",
    suffix: "Hourly",
  },
  {
    price: 24999,
    offerings: [
      "Dedicated Workstation with Ergonomic Chair",
      "High-Speed Internet",
      "Full Working Day Access to Workspace",
      "Complimentary Tea, Coffee, and Water",
      "Power Backup",
      "Air Conditioning",
      "Soundproofing for Privacy",
      "On-site Support Staff",
      "Mail & Package Handling",
      "Access to Printing, Scanning, and Faxing",
      "Access to Common Areas and Lounge",
      "Reception and Guest Management",
      "Networking Events and Community Access",
      "Access to Meeting Rooms at Discounted Rates",
      "Monthly Cleaning and Maintenance",
      "Personalized Branding Options",
      "Access to Parking Facilities (Optional)",
    ],
    subHeading: "Private Cabin Plan",
    suffix: "Monthly",
  },
  {
    price: 5999,
    offerings: [
      "Dedicated Personal Desk",
      "Full Working Access to Workspace",
      "High-Speed Internet & Printer Facilities",
      "Complimentary Tea & Coffee",
      "Access to Meeting Rooms",
      "Secure Storage Locker",
      "Power Backup",
      "Air Conditioning",
      "Mail & Package Handling",
      "Access to Common Areas and Lounge",
      "On-site Support Staff",
      "Access to Networking Events",
      "Discounted Rates for Event Spaces",
      "Access to Kitchen and Dining Area",
      "Exclusive Business Address",
      "Access to Printing, Scanning, and Faxing",
      "Sanitized and Clean Work Environment",
      "Personalized Branding Options at Desk",
      "Monthly Community Events",
    ],
    subHeading: "Dedicated Desk Plan",
    suffix: "Monthly",
  },
];

function CoworkingPriceCard({ id }) {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p className={classes.heading1}>Starting @ just</p>
        <p className={classes.heading2}>
          <span className={`${classes.price} ${classes.gradientText}`}>
            &#8377;{data[id].price}
          </span>
          /{data[id].suffix}
        </p>
        <p className={classes.subHeading}>({data[id].subHeading})</p>
      </div>
      <div className={classes.offeringsContainer}>
        <p className={classes.text}>Offerings: </p>
        {data[id].offerings.map((offer, index) => (
          <p key={index} className={classes.offer}>
            <DoneIcon
              sx={{
                color: "rgb(0, 156, 0)",
                fontSize: { xs: 18, sm: 20, md: 20, lg: 22 },
              }}
            />
            {offer}
          </p>
        ))}
      </div>

      <Link className={classes.callButton} href={WebsiteURLs.tel}>
        Call +91 9871001079
      </Link>
    </div>
  );
}

export default CoworkingPriceCard;
