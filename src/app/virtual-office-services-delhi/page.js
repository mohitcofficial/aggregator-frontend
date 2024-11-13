import LPFooter from "@/components/lpItems/LPFooter";
import LPHeader from "@/components/lpItems/LPHeader";
import classes from "./page.module.css";
import VirtualOfficeBenefits from "@/components/content/VirtualOfficeBenefits";
import WhyUs from "@/components/items/WhyUs";
import ImagesBox from "@/components/lpItems/delhi/ImagesBox";
import LPPriceItem from "@/components/lpItems/LPPriceItem";
import dynamic from "next/dynamic";
import LPBanner from "@/components/lpItems/LPBanner";
import LPSlider from "@/components/items/LPSlider";

const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
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
    "cheapest virtual office in Delhi",
    "Delhi business address",
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
    "affordable business address Delhi",
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
        <WhyUs />
        <VirtualOfficeBenefits />
        <ReviewSlider />
      </div>
      <LPFooter />
    </>
  );
}

export default page;
