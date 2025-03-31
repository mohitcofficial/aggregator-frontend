import WavyBackground2 from "@/components/background/WavyBackground2";
import classes from "./page.module.css";

import CustomLayout from "@/components/CustomLayout";
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
  title: "Your Personal Desk Awaits | VirtualXcel",
  description:
    "Secure a dedicated desk at VirtualXcel, designed for focused and uninterrupted work. Find your perfect workspace with us.",
  keywords:
    "dedicated desk, dedicated desk plan, dedicated desk near me, coworking space, focused work, VirtualXcel, personal workspace, cheap private desk, best private dest, best coworking space, cheapest coworking space",
  author: "Virtualxcel",
};

function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <CommonBanner value={4} />
        <div className={classes.container2}>
          <WavyBackground2 />
          <CoworkingPriceCard id={4} />
        </div>
        <ReviewSlider />
      </div>
    </CustomLayout>
  );
}

export default page;
