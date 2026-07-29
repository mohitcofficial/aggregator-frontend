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
import IndependenceDayOffer from "@/components/discount/IndependenceDayOffer";

const ReviewSlider = dynamic(
  () => import("../components/slider/ReviewSlider"),
  {
    ssr: false,
  },
);

export const metadata = {
  title:
    "Virtual Office & GST Registration Across India | 100+ Locations | Virtualxcel",

  description:
    "Get affordable Virtual Office addresses for GST Registration, Company Registration, Business Registration, and Professional Mailing Address across India. 100+ premium locations, fast documentation, compliance support, and instant assistance. Trusted by startups, freelancers, and growing businesses.",

  keywords: [
    "Virtual Office India",
    "Virtual Office",
    "Virtual Office for GST Registration",
    "GST Registration Virtual Office",
    "Virtual Office for Company Registration",
    "Business Registration Address",
    "Virtual Business Address",
    "Registered Office Address",
    "Professional Business Address",
    "Coworking Space India",
    "Coworking Office",
    "Shared Office Space",
    "Office Space for Rent",
    "Meeting Room",
    "Private Cabin",
    "Startup Office",
    "Virtual Office Delhi",
    "Virtual Office Noida",
    "Virtual Office Gurgaon",
    "Virtual Office Bangalore",
    "Virtual Office Mumbai",
    "Virtual Office Hyderabad",
    "Virtual Office Pune",
    "Virtual Office Chennai",
    "Virtual Office Ahmedabad",
    "Virtual Office Jaipur",
    "Virtual Office Kolkata",
    "Virtual Office Lucknow",
    "Virtual Office Chandigarh",
    "Affordable Virtual Office",
    "Best Virtual Office Provider",
    "Business Address India",
    "GST Office Address",
    "Company Incorporation Address",
    "Virtualxcel",
  ],

  authors: [{ name: "Virtualxcel" }],

  creator: "Virtualxcel",

  publisher: "Virtualxcel",

  metadataBase: new URL("https://virtualxcel.in"),

  alternates: {
    canonical: "/",
  },

  // openGraph: {
  //   title:
  //     "Virtual Office & GST Registration Across India | Virtualxcel",

  //   description:
  //     "Affordable Virtual Offices across India for GST Registration, Company Registration, and Professional Business Addresses. Trusted by startups and businesses nationwide.",

  //   url: "https://virtualxcel.in",

  //   siteName: "Virtualxcel",

  //   locale: "en_IN",

  //   type: "website",

  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Virtualxcel - Virtual Office India",
  //     },
  //   ],
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title:
  //     "Virtual Office & GST Registration Across India | Virtualxcel",

  //   description:
  //     "Affordable Virtual Office solutions with GST & Company Registration support across India.",

  //   images: ["/og-image.jpg"],
  // },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Business Services",
};

export default function Home() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <Banner />
        {/* <IndependenceDayOffer />  */}
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
