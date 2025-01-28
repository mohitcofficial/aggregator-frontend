import classes from "./page.module.css";

import CommonBanner from "@/components/banner/CommonBanner";
import VirtualOfficeBenefits from "@/components/content/VirtualOfficeBenefits";
import CustomLayout from "@/components/CustomLayout";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import WhyUs from "@/components/items/WhyUs";
import PremiumCities from "@/components/premiumLocations/PremiumCities";
import dynamic from "next/dynamic";
import { BoxData2 } from "../data/PriceCardData";
import WavyBackground3 from "@/components/background/WavyBackground3";
import PriceCard from "@/components/card/PriceCard";
import CoworkingImage from "../../../public/images/Coworking.png";
import Image from "next/image";
const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Professional Mailing Address Services | Virtualxcel",
  description:
    "Enhance your business image with professional mailing address services from Virtualxcel. Establish a credible presence without the need for a physical office. Discover our flexible mailing solutions tailored to your business needs.",
  keywords:
    "professional mailing address, virtual office address, business address services, Virtualxcel mailing address, mail handling services, virtual mailbox, business credibility",
  author: "Virtualxcel",
};

function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <CommonBanner value={2} />
        <div className={classes.container2}>
          <WavyBackground3 />
          <div className={classes.headingContainer}>
            <h2 className={classes.heading1}>
              Best Plan For <b>Mailing Address</b>
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
              price={BoxData2[2].price}
              heading={BoxData2[2].heading}
              points={BoxData2[2].points}
              flag={0}
            />
          </div>
        </div>
        <PremiumCities />
        <WhyUs />
        <VirtualOfficeBenefits />
        <ReviewSlider />
        <FrequentQuestions />
      </div>
    </CustomLayout>
  );
}

export default page;
