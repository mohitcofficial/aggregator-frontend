"use client";

import React from "react";
import classes from "./page.module.css";
import CustomLayout from "@/components/CustomLayout";
import { useSearchParams } from "next/navigation";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

const Page = () => {
  const searchParams = useSearchParams();

  const referenceId = searchParams.get("reference");
  const fontSize = { lg: 150, md: 150, sm: 120, xs: 100 };
  const fontSize2 = { lg: 20, md: 18, sm: 16, xs: 14 };

  return (
    <CustomLayout>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <CheckCircleOutlineIcon
            sx={{ fontSize: fontSize, color: "#6BC839" }}
          />
          <h1>Payment Received</h1>
          <p>Thank you for your payment!</p>
          <p>
            Your reference ID: <strong>{referenceId}</strong>
          </p>
          <p>If you have any questions, please contact our support team.</p>
          <Link href="/" style={{ textDecoration: "none" }}>
            <button className={classes.goBackButton}>
              <ArrowBackIcon sx={{ fontSize: fontSize2 }} />
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </CustomLayout>
  );
};

export default Page;
