import CustomLayout from "@/components/CustomLayout";
import classes from "./page.module.css";
import VirtualOfficeBanner from "@/components/banner/VirtualOfficeBanner";
import PriceItem from "@/components/items/PriceItem";
import WhyUs from "@/components/items/WhyUs";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Documentation from "@/components/items/Documentation";
import VirtualOfficeText from "@/components/content/VirtualOfficeText";
import VirtualOfficeBenefits from "@/components/content/VirtualOfficeBenefits";
import TrendingCitiesSlider from "@/components/slider/TrendingCitiesSlider";
import TrendingStatesSlider from "@/components/slider/TrendingStates";
import SimilarStateSlider from "@/components/slider/SimilarStateSlider";
import { virtualOfficeContent } from "../data/content";
import SEOContent from "@/components/content/SEOContent";
import dynamic from "next/dynamic";

const ProcessFlowBar = dynamic(
  () => import("../../components/items/ProcessFlowBar"),
  {
    ssr: false,
  },
);

export const metadata = {
  title: "Virtual Offices & Business Addresses Across India",
  description:
    "Discover the flexibility of our virtual offices at Virtualxcel. Gain a prestigious business address, professional support, and remote services tailored to your needs. Elevate your business presence today.",
  keywords: [
    "Virtual Office",
    "Virtual Office Address",
    "Premium Virtual Offce",
    "Virtual Office near me",
    "Virtual Office for Startups",
    "virtual office space in delhi",
    "cheap virtual office space in delhi",
    "virtual office space in noida",
    "virtual office address in gurgaon",
    "virtual office space in gurgaon",
  ],
};

export default function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <VirtualOfficeBanner />
        <VirtualOfficeText />
        <PriceItem />
        <TrendingStatesSlider />
        <TrendingCitiesSlider />
        <Documentation />
        <WhyUs />
        <ProcessFlowBar />
        <VirtualOfficeBenefits />
        <FrequentQuestions />
        <SEOContent content={virtualOfficeContent.india} />
      </div>
    </CustomLayout>
  );
}
