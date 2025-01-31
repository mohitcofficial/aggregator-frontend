import classes from "./page.module.css";

import CustomLayout from "@/components/CustomLayout";
import WavyBackground2 from "@/components/background/WavyBackground2";
import CommonBanner from "@/components/banner/CommonBanner";
import CoworkingPriceCard from "@/components/card/CoworkingPriceCard";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Private Cabins for Premium Comfort | VirtualXcel",
  description:
    "Elevate your workspace with VirtualXcel's exclusive private cabins, perfect for teams and individuals seeking privacy and comfort.",
  keywords:
    "private cabins, premium comfort, VirtualXcel, private workspace, team workspace, cheap cabins near me, cheapest private cabins, best private cabins",
  author: "Virtualxcel",
};

function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <CommonBanner value={5} />
        <div className={classes.container2}>
          <WavyBackground2 />
          <CoworkingPriceCard id={2} />
        </div>
        <div className={classes.container2}>
          <WavyBackground2 />
          <CoworkingPriceCard id={3} />
        </div>
        <ReviewSlider />
      </div>
    </CustomLayout>
  );
}

export default page;
