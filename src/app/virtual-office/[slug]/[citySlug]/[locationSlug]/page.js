import CustomLayout from "@/components/CustomLayout";
import UserApiServices from "@/services/User.api.services";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import SimilarLocationSlider from "@/components/slider/SimilarLocationSlider";
import LocationCatalogue from "@/components/items/LocationCatalogue";
import PriceItem from "@/components/items/PriceItem";

async function fetchPageData(stateSlug, citySlug, locationSlug) {
  try {
    const data = await UserApiServices.getLocationInfoFromSlug(
      stateSlug,
      citySlug,
      locationSlug
    );
    if (!data.success) {
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}

export default async function CityPage({ params }) {
  const { slug, citySlug, locationSlug } = params;

  try {
    const data = await fetchPageData(slug, citySlug, locationSlug);
    if (!data.success) notFound();

    return (
      <CustomLayout>
        <div className={classes.container}>
          <div className={classes.contentContainer}>
            <LocationCatalogue location={data?.location} />
          </div>
          <SimilarLocationSlider
            cityId={data?.location?.cityId?._id}
            locationId={data?.location?._id}
          />
          <PriceItem />
          <FrequentQuestions />
        </div>
      </CustomLayout>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const { slug, citySlug, locationSlug } = params;
  const pageData = await fetchPageData(slug, citySlug, locationSlug);

  return {
    title: pageData?.location?.metaData?.metaTitle || "Virtualxcel",
    description: pageData?.location?.metaData.metaDescription || "Virtualxcel",
    keywords: pageData?.location?.metaData.metaKeyword || "Virtualxcel",
  };
}
