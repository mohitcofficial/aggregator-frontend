import { coworkingCardDataArray } from "../data/CoworkingCardData";
import classes from "./page.module.css";

import CoworkingBanner from "@/components/banner/CoworkingBanner";
import CoworkingCard from "@/components/card/CoworkingCard";
import CustomLayout from "@/components/CustomLayout";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Coworking Spaces",
  description:
    "Virtualxcel offers a dynamic coworking environment where innovation thrives. Join our collaborative workspace and unlock new opportunities for growth and networking.",
  keywords:
    "Coworking spaces in India, Shared office spaces in India, Flexible workspace in India, Affordable coworking spaces in India, Best coworking spaces in India, Modern coworking spaces in India, Top coworking spaces in India, Coworking spaces in Delhi NCR, Coworking spaces in Mumbai, Coworking spaces in Bangalore, Coworking spaces in Hyderabad, Coworking spaces in Pune, Shared office space in Gurgaon, Virtual office in Noida",
};

function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <CoworkingBanner />
        <div className={classes.container2}>
          <div className={classes.heading}>
            <span className={classes.heading1}>Choose a Coworking Space</span>
            <span className={classes.heading2}>
              that best suits your needs and preferences
            </span>
          </div>
          <div className={classes.cardContainer}>
            {coworkingCardDataArray.map((item, index) => (
              <CoworkingCard
                key={index}
                ind={index}
                heading={item.heading}
                link={item.link}
              />
            ))}
          </div>
          {/* <WhyCoworking /> */}
          {/* <Facilities data={coworkingFacilities} /> */}
          <ReviewSlider />
        </div>
      </div>
    </CustomLayout>
  );
}

export default page;
