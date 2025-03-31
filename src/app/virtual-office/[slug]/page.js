import CustomLayout from "@/components/CustomLayout";
import UserApiServices from "@/services/User.api.services";
import classes from "./page.module.css";
import { notFound } from "next/navigation";
import StateBanner from "@/components/banner/StateBanner";
import FrequentQuestions from "@/components/frequent-questions/FrequentQuestions";
import Footer from "@/components/footer/Footer";
import SimilarStateSlider from "@/components/slider/SimilarStateSlider";
import FilterContainer from "@/components/items/FilterContainer";

async function fetchPageData(slug) {
  try {
    const data = await UserApiServices.getStateInfoFromSlug(slug);
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
  const { slug } = params;

  try {
    const data = await fetchPageData(slug);
    if (!data) notFound();

    return (
      <CustomLayout>
        <div className={classes.container}>
          <StateBanner
            state={data?.state?.name}
            image={data?.state?.bannerImage[0]?.url}
          />
          <FilterContainer
            id={data?.state?._id}
            type="city"
            name={data?.state?.name}
          />
          <SimilarStateSlider id={data?.state?._id} />
          <FrequentQuestions />
        </div>
      </CustomLayout>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const pageData = await fetchPageData(slug);

  return {
    title: pageData?.state?.metaData?.metaTitle || "Virtualxcel",
    description: pageData?.state?.metaData.metaDescription || "Virtualxcel",
    keywords: pageData?.state?.metaData.metaKeyword || "Virtualxcel",
  };
}
