import React from "react";
import classes from "./Reviews.module.css";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { reviews } from "@/app/data/Reviews";

function Reviews() {
  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        {/* =========================
            HEADER
        ========================== */}

        <div className={classes.header}>
          <div className={classes.eyebrow}>
            <ReviewsIcon />
            <span>CLIENT TESTIMONIALS</span>
          </div>

          <h2 className={classes.heading}>
            What Our Clients Say About <span>Virtualxcel</span>
          </h2>

          <p className={classes.subHeading}>
            Real experiences from businesses and professionals who trust
            Virtualxcel for their virtual office needs.
          </p>
        </div>

        {/* =========================
            REVIEWS
        ========================== */}

        <div className={classes.reviewGrid}>
          {reviews.slice(0, 6).map((review, index) => (
            <article
              className={classes.reviewCard}
              key={`${review.name}-${index}`}
            >
              {/* Card Top */}
              <div className={classes.cardTop}>
                <FormatQuoteRoundedIcon className={classes.quoteIcon} />

                <div className={classes.rating}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={
                        starIndex < review.rating
                          ? classes.starActive
                          : classes.starInactive
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <p className={classes.reviewText}>“{review.text}”</p>

              {/* Client Information */}
              <div className={classes.clientInfo}>
                <div className={classes.avatar}>{review.initials}</div>

                <div className={classes.clientDetails}>
                  <h3>{review.name}</h3>

                  <span>Virtual Office Client</span>
                </div>
              </div>

              {/* Service */}
              <div className={classes.service}>
                <VerifiedRoundedIcon />
                <span>Virtual Office Service</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
