import classes from "./page.module.css";

import CustomLayout from "@/components/CustomLayout";
import WavyBackground3 from "@/components/background/WavyBackground3";
import CommonBanner from "@/components/banner/CommonBanner";
import PriceCard from "@/components/card/PriceCard";
import VirtualOfficeBenefits from "@/components/content/VirtualOfficeBenefits";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import WhyUs from "@/components/items/WhyUs";
import PremiumCities from "@/components/premiumLocations/PremiumCities";
import dynamic from "next/dynamic";
import { BoxData2 } from "../data/PriceCardData";
import CoworkingImage from "../../../public/images/Coworking.png";
import Image from "next/image";
const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Best Business Plans for Your Company",
  description:
    "Simplify your business process with Virtualxcel's Virtual Office. Our efficient services help you establish or expand your venture seamlessly. Explore our tailored solutions today.",
  keywords:
    "Virtual Office, Virtual Office Address, Premium Virtual Offce, Virtual Office near me, Virtual Office for Startups",
  author: "Virtualxcel",
};

function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <CommonBanner value={0} />
        <div className={classes.container2}>
          <WavyBackground3 />
          <div className={classes.headingContainer}>
            <h2 className={classes.heading1}>
              Best Plan For <b>Business Formation</b>
            </h2>
            <h3 className={classes.heading2}>Starting just at &#8377; 999</h3>
          </div>
          <div className={classes.priceContainer}>
            <div className={classes.imagesContainer}>
              <Image
                className={classes.image}
                src={CoworkingImage}
                fill={true}
                alt="Image"
              />
            </div>
            <PriceCard
              price={BoxData2[0].price}
              heading={BoxData2[0].heading}
              points={BoxData2[0].points}
              flag={0}
            />
          </div>
        </div>
        <PremiumCities />
        <WhyUs />
        <VirtualOfficeBenefits id={1} />
        <ReviewSlider />
        <FrequentQuestions />
      </div>
    </CustomLayout>
  );
}

export default page;
