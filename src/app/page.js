import Banner from "@/components/banner/Banner";
import BlogSection from "@/components/blog/BlogSection";
import CountContainer from "@/components/CountContainer";
import CustomLayout from "@/components/CustomLayout";
import NeedExpertPoster from "@/components/items/NeedExpertPoster";
import PriceItem from "@/components/items/PriceItem";
import PremiumCities from "@/components/premiumLocations/PremiumCities";
import dynamic from "next/dynamic";
import classes from "./page.module.css";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import NewYearOffer from "@/components/discount/NewYearOffer";

const ReviewSlider = dynamic(
  () => import("../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Best Virtual Offices & Coworking Servies Pan India",
  keywords:
    "Best Coworking Offices, Coworking Spaces, Virtual Offices, Cheap Coworking Spaces, Cheapest Coworking Space, Coworking Spaces near me",
  description:
    "Discover the ultimate coworking experience at Virtualxcel. Join a vibrant community of professionals in a modern workspace designed for collaboration, productivity, and success. Explore our flexible membership options and amenities today.",
};

export default function Home() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <Banner />
        <NewYearOffer />
        <CountContainer />
        <PriceItem />
        <PremiumCities />
        <BlogSection />
        <NeedExpertPoster />
        <ReviewSlider />
        <FrequentQuestions />
      </div>
    </CustomLayout>
  );
}
