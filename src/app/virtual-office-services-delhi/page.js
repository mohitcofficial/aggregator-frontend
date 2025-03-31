import LPFooter from "@/components/lpItems/LPFooter";
import LPHeader from "@/components/lpItems/LPHeader";
import classes from "./page.module.css";
import VirtualOfficeBenefits from "@/components/content/VirtualOfficeBenefits";
import WhyUs from "@/components/items/WhyUs";
import ImagesBox from "@/components/lpItems/delhi/ImagesBox";
import LPPriceItem from "@/components/lpItems/LPPriceItem";
import dynamic from "next/dynamic";
import LPBanner from "@/components/lpItems/LPBanner";
import LPSlider from "@/components/lpItems/LPSlider";
import OnDemandServices from "@/components/items/OnDemandServices";

const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

const ProcessFlowBar = dynamic(
  () => import("../../components/items/ProcessFlowBar"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Best Virtual Offices & Prime Business Addresses in Delhi",
  description:
    "Discover the finest virtual office solutions in Delhi with Virtualxcel. Secure a prestigious business address and elevate your company's presence.",
  keywords: [
    "virtual office Delhi",
    "virtual office in Delhi",
    "best office in Delhi",
    "Virtual Office",
    "Virtual Office Address",
    "Premium Virtual Offce",
    "Virtual Office near me",
    "Virtual Office for Startups",
    "cheapest virtual office in Delhi",
    "virtual office in South Delhi",
    "virtual office in North Delhi",
    "virtual office in West Delhi",
    "virtual office in East Delhi",
    "virtual office in Saket",
    "virtual office in Saket",
    "virtual office in Janakpuri",
    "virtual office in Nehru Place",
    "virtual office in Cannaught Place",
    "virtual office in Rajouri Garden",
    "virtual office in Lajpat Nagar",
    "virtual office in Hauz Khaz",
    "virtual office in Malviya Nagar",
    "virtual office in Greater Kailash",
    "virtual office in Rohini",
    "virtual office in Pitampura",
    "prestigious virtual office Delhi",
    "virtual office solutions Delhi",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBanner name={"Delhi"} />
        <ImagesBox />
        <LPSlider name={"Delhi"} />
        <LPPriceItem />
        <ProcessFlowBar />
        <OnDemandServices />
        <WhyUs />
        <VirtualOfficeBenefits />
        <ReviewSlider />
      </div>
      <LPFooter />
    </>
  );
}

export default page;
