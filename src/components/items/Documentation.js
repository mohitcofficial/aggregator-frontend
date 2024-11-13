"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./Documentation.module.css";
import Image from "next/image";
import SoleProprietorShip from "../../../public/images/SoleProprietorShip.png";
import Partnership from "../../../public/images/Partnership.png";
import Company from "../../../public/images/Company.png";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function Documentation() {
  const [index, setIndex] = useState(0);

  const content = [
    [
      "Aadhar Card Copy/ Passport Copy",
      "PAN Card Copy",
      "One Photo/ Passport Size Photo",
      "Cancelled cheque/ Passbook front page copy.",
    ],
    [
      "Aadhar Card Copy/ Passport Copy (All Partners)",
      "PAN Card Copy (All Partners)",
      "One Photo/ Passport Size Photo (All Partners)",
      "Cancelled cheque/ Passbook front page copy.",
      "PAN Card Copy of the Business",
      "GST Certificate (if applicable)",
      "COI (Certificate of Incorporation) (if applicable)",
    ],
    [
      "Aadhar Card Copy/ Passport Copy (All Partners)",
      "PAN Card Copy (All Partners)",
      "One Photo/ Passport Size Photo (All Partners)",
      "Cancelled cheque/ Passbook front page copy.",
      "PAN Card Copy of the Business",
      "GST Certificate (if applicable)",
      "COI (Certificate of Incorporation) (if applicable)",
    ],
  ];

  const images = [SoleProprietorShip, Partnership, Company];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.container2}>
        <div className={classes.heading}>
          <span className={classes.heading1}>KYC Documents</span>
          <span className={classes.heading2}>Required</span>
        </div>
        <div className={classes.option}>
          <div
            onClick={() => setIndex(0)}
            className={`${classes.options} ${
              index === 0 ? classes.active : ""
            }`}
          >
            Sole Proprietor / Individual
          </div>
          <div
            onClick={() => setIndex(1)}
            className={`${classes.options} ${
              index === 1 ? classes.active : ""
            }`}
          >
            LLP & Partnership Firms
          </div>
          <div
            onClick={() => setIndex(2)}
            className={`${classes.options} ${
              index === 2 ? classes.active : ""
            }`}
          >
            Company (Public & Private)
          </div>
        </div>
        <div className={classes.contentContainer}>
          {/* Image with animation (no key) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className={classes.imageContainer}
          >
            <Image
              className={classes.image}
              src={images[index]}
              alt="Image"
              fill={true}
            />
          </motion.div>

          {/* List with animation (key on ul only) */}
          <motion.ul
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className={classes.list}
          >
            {content[index].map((item, idx) => (
              <li key={idx} className={classes.listItem}>
                <DoneAllIcon
                  sx={{
                    color: "#4BB543",
                    fontSize: { xs: 16, sm: 18, md: 20, lg: 20 },
                  }}
                />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
