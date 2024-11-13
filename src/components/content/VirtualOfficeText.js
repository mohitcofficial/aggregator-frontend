import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import LP1 from "../../../public/images/LP1.jpg";
import classes from "./VirtualOfficeText.module.css";

function VirtualOfficeText() {
  return (
    <div className={classes.container2}>
      <div className={classes.marginBlock}>
        <div className={classes.leftContainer}>
          <p className={classes.heading}>
            Embracing the Evolution of Virtual Offices Across India
          </p>
          <p className={classes.text}>
            Establish your company's footprint in India with a virtual office.
            Benefit from a prestigious business address in key locations,
            comprehensive mail handling, professional call answering, and
            on-demand access to meeting rooms and desks. Leverage our global
            network for seamless business operations and enhanced credibility in
            the market.
          </p>
          <button className={classes.buyNowButton}>BUY NOW</button>
          <div className={classes.box3}>
            <p>Or call us at</p>
            <LocalPhoneIcon
              sx={{
                fontSize: { xs: 20, sm: 20, md: 22, lg: 24 },
              }}
            />

            <span className={classes.bold}>+91 9871001079</span>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.imageContainer}>
            <div className={classes.backgroundDesign}></div>
            <Image
              className={classes.image}
              src={LP1}
              fill={true}
              alt=""
              placeholder="blur"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualOfficeText;
