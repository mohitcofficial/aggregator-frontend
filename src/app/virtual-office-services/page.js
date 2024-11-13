import LPFooter from "@/components/lpItems/LPFooter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import LP1 from "../../../public/images/LP1.jpg";
import classes from "./page.module.css";

import VirtualOfficeBenefits from "@/components/content/VirtualOfficeBenefits";
import WhyUs from "@/components/items/WhyUs";
import LPBanner from "@/components/lpItems/LPBanner";
import LPModal from "@/components/lpItems/LPModal";
import dynamic from "next/dynamic";
import LPPriceItem from "@/components/lpItems/LPPriceItem";
import LPHeader from "@/components/lpItems/LPHeader";
const LPCitiesSlider = dynamic(
  () => import("../../components/lpItems/LPCitiesSlider"),
  {
    ssr: false,
  }
);
const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Best Virtual Offices & Business Addresses Across India",
  description:
    "Discover Virtualxcel: Your gateway to the perfect virtual office address. Elevate your professional presence and expand your business seamlessly.",
  keywords: [
    "Best Virtual Office Address for your Business",
    "Best Business Address registration plans accross india",
    "virtual office space in delhi",
    "cheap virtual office space in delhi",
    "virtual office space in india",
    "Virtual Office",
    "Virtual Office Address",
    "Virtual Office Space",
    "Virtual Business Address",
    "Mailing Address",
    "GST Registration",
    "Business Registration",
    "Virtual Office for GST Registration",
    "Virtual Office for Business Registration",
    "Virtual Office Address for GST Registration",
    "Virtual Office Address for Business Registration",
    "Virtual Office in Delhi",
    "Virtual Office in Gurgaon ",
    "Virtual Office in Mumbai",
    "Virtual Office in Bangalore",
    "Virtual Office in Kolkata ",
    "Virtual Office in Pune",
    "Virtual Office in Hyderabad ",
    "Virtual Office in Chennai",
    "Virtual Office in Kochi ",
    "Virtual Office in Kerala ",
    "Virtual Office in Chennai ",
    "virtual office address for company registration",
    "virtual office address for gst registration",
    "virtual office address hyderabad",
    "virtual office address in bangalore",
    "virtual office address in delhi",
    "virtual office address in hyderabad",
    "virtual office address in noida",
    "virtual office address india",
    "virtual office address mumbai",
    "virtual office address",
    "virtual office mailing address",
    "virtual office address in kolkata",
    "virtual office address in gurgaon",
    "virtual office address mail forwarding",
    "virtual office address chennai",
    "virtual office address gurgaon",
    "virtual office address in mumbai",
    "virtual office for gst registration",
    "virtual office for gst registration mumbai",
    "virtual office for gst registration delhi",
    "virtual office for gst registration in bangalore",
    "gst virtual office",
    "virtual office for gst",
    "virtual office in bangalore for gst registration",
    "virtual office for gst registration bangalore",
    "virtual office for gst registration in mumbai",
    "gst registration for virtual office",
    "virtual office in mumbai for gst registration",
    "gst registration virtual office",
    "virtual office address for gst registration",
    "virtual office for gst registration gurgaon",
    "virtual office for gst registration in delhi",
    "virtual office gst registration",
    "free virtual office for gst in delhi",
    "free virtual office for gst registration",
    "low cost virtual office for gst registration",
    "noida virtual office gst",
    "virtual office address with gst registration",
    "virtual office for company gst",
    "virtual office for company gst noida",
    "virtual office for gst bangalore",
    "virtual office for gst registration in india",
    "virtual office for gst registration kolkata",
    "virtual office gst",
    "virtual office in kochi gst registration",
    "virtual office in kolkata with gst registration",
    "virtual office karnataka for gst registration",
    "virtual office pune business and gst",
    "virtual office pune business and gst pune",
    "virtual office with gst in kolkata",
    "virtual office for company registration",
    "virtual office address for company registration",
    "can i register a company with virtual office address",
    "can i register a company with virtual office address kerala",
    "can i use virtual office address for company registration",
    "virtual office for company gst",
    "virtual office for company gst noida",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBanner />
        <LPCitiesSlider />
        <LPPriceItem />
        <div className={classes.container2}>
          <div className={classes.marginBlock}>
            <div className={classes.leftContainer}>
              <p className={classes.heading}>
                Embracing the Evolution of Virtual Offices Across India
              </p>
              <p className={classes.text}>
                Establish your company's footprint in India with a virtual
                office. Benefit from a prestigious business address in key
                locations, comprehensive mail handling, professional call
                answering, and on-demand access to meeting rooms and desks.
                Leverage our global network for seamless business operations and
                enhanced credibility in the market.
              </p>
              <LPModal>
                <button className={classes.buyNowButton}>BUY NOW</button>
              </LPModal>
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
        <WhyUs />
        <VirtualOfficeBenefits />
        <ReviewSlider />
      </div>
      <LPFooter />
    </>
  );
}

export default page;
