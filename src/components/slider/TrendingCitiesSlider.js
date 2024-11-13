"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CustomSkeleton from "../CustomSkeleton";
import UserApiServices from "@/services/User.api.services";
import classes from "./TrendingCitiesSlider.module.css";
import SearchModal from "../modal/SearchModal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getInitialSettings } from "@/utils/sliderSettings";

function TrendingCitiesSlider() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliderSettings, setSliderSettings] = useState(getInitialSettings(1));
  const fontSize2 = { lg: 13, md: 12, sm: 12, xs: 12 };
  const fontSize = { lg: 28, md: 24, sm: 24, xs: 24 };

  const fetchTrendingCityData = async () => {
    setLoading(true);
    try {
      const data = await UserApiServices.getTrendingCities();
      setCities(data?.cities || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingCityData();
  }, []);
  useEffect(() => {
    setSliderSettings(getInitialSettings(cities.length));
  }, [cities]);

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>
        Most <span>Preferred Cities</span> in India
      </h2>
      {loading ? (
        <CustomSkeleton height={180} />
      ) : (
        <div className={classes.innerContainer}>
          <div className={classes.rightBox}>
            <Slider {...sliderSettings} key={cities.length}>
              {cities.map((city, index) => (
                <Link
                  key={index}
                  href={`/virtual-office/${city?.stateId?.slug}/${city?.slug}`}
                >
                  <div className={classes.imageContainer}>
                    <Image
                      className={classes.image}
                      src={city?.bannerImage[0]?.url}
                      alt="Image"
                      fill={true}
                    />
                    <div className={classes.content}>
                      <p className={classes.name}>{city.name}</p>
                      <p className={classes.text}>
                        Starting at
                        <span className={classes.price}>
                          <CurrencyRupeeIcon sx={{ fontSize: fontSize2 }} />
                          {799}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <div>
        <SearchModal>
          <button className={classes.visitAllButton}>
            Browse more Virtual Office locations
            <ArrowForwardIcon sx={{ fontSize: fontSize }} />
          </button>
        </SearchModal>
      </div>
    </div>
  );
}

export default TrendingCitiesSlider;
