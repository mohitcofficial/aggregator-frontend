import WavyBackground2 from "@/components/background/WavyBackground2";
import classes from "./page.module.css";

import CommonBanner from "@/components/banner/CommonBanner";
import CustomLayout from "@/components/CustomLayout";
import CoworkingPriceCard from "@/components/card/CoworkingPriceCard";
import Reviews from "@/components/items/Reviews";

export const metadata = {
  title: "Experience Flexibility with Our Day Passes | Virtualxcel",
  description:
    "Enjoy a productive day at VirtualXcel's coworking spaces, tailored to your dynamic work style. Get the flexibility you need with our convenient day passes.",
  keywords: "day pass, coworking space, flexible workspace, VirtualXcel",
  author: "Virtualxcel",
};

function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <CommonBanner value={3} />
        <div className={classes.container2}>
          <WavyBackground2 />
          <CoworkingPriceCard id={0} />
        </div>
        <div className={classes.container2}>
          <WavyBackground2 />
          <CoworkingPriceCard id={1} />
        </div>
        <Reviews />
      </div>
    </CustomLayout>
  );
}

export default page;
