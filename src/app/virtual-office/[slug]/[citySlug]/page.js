import CityBanner from "@/components/banner/CityBanner";
import CustomLayout from "@/components/CustomLayout";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import FilterContainer from "@/components/items/FilterContainer";
import SimilarCitySlider from "@/components/slider/SimilarCitySlider";
import UserApiServices from "@/services/User.api.services";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import CitySEOContent from "@/components/content/CitySEOContent";
import { getCitySeoContent } from "@/utils/seoContent";

async function fetchPageData(stateSlug, citySlug) {
  try {
    const data = await UserApiServices.getCityInfoFromSlug(stateSlug, citySlug);
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
  const { slug, citySlug } = params;

  try {
    const data = await fetchPageData(slug, citySlug);
    if (!data.success) notFound();

    const cityName = data?.city?.name;

    const seoContent = getCitySeoContent(cityName, citySlug);

    return (
      <CustomLayout>
        <div className={classes.container}>
          <CityBanner
            city={data?.city?.name}
            image={data?.city?.bannerImage[0]?.url}
            stateName={data?.city?.stateId?.name}
          />
          <FilterContainer
            id={data?.city?._id}
            type="location"
            name={data?.city?.name}
          />
          <SimilarCitySlider
            stateId={data?.city?.stateId?._id}
            cityId={data?.city?._id}
          />
          <FrequentQuestions />
          <CitySEOContent content={seoContent} />
        </div>
      </CustomLayout>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const { slug, citySlug } = params;
  const pageData = await fetchPageData(slug, citySlug);

  return {
    title: pageData?.city?.metaData?.metaTitle || "Virtualxcel",
    description: pageData?.city?.metaData.metaDescription || "Virtualxcel",
    keywords: pageData?.city?.metaData.metaKeyword || "Virtualxcel",
  };
}
