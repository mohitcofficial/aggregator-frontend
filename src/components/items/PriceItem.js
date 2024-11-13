"use client";
import { BoxData2 } from "@/app/data/PriceCardData";
import WavyBackground3 from "../background/WavyBackground3";
import PriceCard from "../card/PriceCard";
import classes from "./PriceItem.module.css";

function PriceItem() {
  return (
    <div className={classes.container}>
      <WavyBackground3 />
      <div className={classes.contentContainer}>
        <div className={classes.heading}>
          <div className={classes.heading2}>
            Select the Perfect Virtual Office for Your Specific Needs
          </div>
          <div className={classes.heading1}>
            Choose the perfect service for your business, and let us take care
            of the details. Sit back and watch your success unfold!
          </div>
        </div>
        <div className={classes.container1}>
          {BoxData2.map((item, index) => (
            <PriceCard
              key={index}
              price={item.price}
              heading={item.heading}
              subHeading={item.subHeading}
              points={item.points}
              flag={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceItem;
