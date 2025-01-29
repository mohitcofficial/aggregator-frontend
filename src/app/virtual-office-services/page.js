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
import NewYearOffer from "@/components/discount/NewYearOffer";
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
  title: "Best Virtual Office Address Across India",
  description:
    "Discover Virtualxcel: Your gateway to the perfect virtual office address. Elevate your professional presence and expand your business seamlessly.",
  keywords: [
    "Virtual Office",
    "Virtual Office Address",
    "Virtual Office for Startups",
    "Best Virtual Office Address",
    "virtual office in delhi",
  ],
};
function page() {
  return (
    <>
      <LPHeader />
      <div className={classes.container}>
        <LPBanner />
        <NewYearOffer />
        <LPCitiesSlider />
        <LPPriceItem />
        <div className={classes.container2}>
          <div className={classes.marginBlock}>
            <div className={classes.leftContainer}>
              <p className={classes.heading}>
                Embracing the Evolution of Virtual Offices Across India
              </p>
              <p className={classes.text}>
                Establish your companys footprint in India with a virtual
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
