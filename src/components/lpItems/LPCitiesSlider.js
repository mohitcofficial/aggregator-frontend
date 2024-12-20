"use client";
import UserApiServices from "@/services/User.api.services";
import { getInitialSettings } from "@/utils/sliderSettings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import CustomSkeleton from "../CustomSkeleton";
import classes from "./LPCitiesSlider.module.css";
import LPModal from "./LPModal";

function LPCitiesSlider() {
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

  const prices = {
    "6736e85923b7ed53cd587f9d": 999,
    "6736e59123b7ed53cd587f01": 999,
    "6738371623b7ed53cd58cc7e": 899,
  };

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
                <LPModal key={index}>
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
                          {prices[city?._id] || 799}
                        </span>
                      </p>
                    </div>
                  </div>
                </LPModal>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <div>
        <LPModal>
          <button className={classes.visitAllButton}>
            View All Virtual Office locations
            <ArrowForwardIcon sx={{ fontSize: fontSize }} />
          </button>
        </LPModal>
      </div>
    </div>
  );
}

export default LPCitiesSlider;
