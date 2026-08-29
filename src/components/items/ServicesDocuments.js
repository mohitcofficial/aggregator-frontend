import React from "react";
import classes from "./ServicesDocuments.module.css";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const services = [
  {
    icon: DescriptionOutlinedIcon,
    title: "Virtual Office Agreement",
    description:
      "A professionally prepared agreement providing the required address documentation for business registration and compliance.",
  },
  {
    icon: VerifiedUserOutlinedIcon,
    title: "No Objection Certificate (NOC)",
    description:
      "NOC from the premises owner to support GST, company, LLP and other business registrations.",
  },
  {
    icon: ReceiptLongOutlinedIcon,
    title: "Utility Bills",
    description:
      "Valid utility documentation associated with the Virtual Office address for registration and verification purposes.",
  },
  {
    icon: MarkunreadMailboxOutlinedIcon,
    title: "Mail Handling",
    description:
      "Receive important business correspondence at the Virtual Office address with professional mail handling support.",
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: "Dedicated Customer Support",
    description:
      "Get assistance throughout the documentation and registration process from our dedicated support team.",
  },
  {
    icon: StorefrontOutlinedIcon,
    title: "On-Demand Signage Support",
    description:
      "Signage assistance available whenever required for business registration, verification or compliance purposes.",
  },
];

function ServicesDocuments({ location = "" }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* Section Heading */}
        <div className={classes.heading}>
          <span className={classes.eyebrow}>VIRTUAL OFFICE SERVICES</span>

          <h2>
            <span>Services &amp; Documents </span>
            We Provide for Virtual Office{" "}
            {location.length !== 0 && `in ${location}`}
          </h2>

          <p>
            Everything required to establish and maintain a professional
            business presence at your Virtual Office address.
          </p>
        </div>

        {/* Services Grid */}
        <div className={classes.grid}>
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className={classes.card} key={index}>
                <div className={classes.iconBox}>
                  <Icon />
                </div>

                <div className={classes.content}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className={classes.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesDocuments;
