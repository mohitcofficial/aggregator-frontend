import CustomLayout from "@/components/CustomLayout";
import UserApiServices from "@/services/User.api.services";
import classes from "./page.module.css";
import { notFound } from "next/navigation";
import CityBanner from "@/components/banner/CityBanner";
import Footer from "@/components/footer/Footer";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import FilterContainer from "@/components/items/FilterContainer";
import SimilarCitySlider from "@/components/slider/SimilarCitySlider";

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
    title: pageData?.state?.metaData?.metaTitle || "Testing",
    description: pageData?.state?.metaData.metaDescription || "Testing",
    keywords: pageData?.state?.metaData.metaKeyword || "Testing",
  };
}
