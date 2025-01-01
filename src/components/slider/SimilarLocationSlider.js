"use client";
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CustomSkeleton from "../CustomSkeleton";
import UserApiServices from "@/services/User.api.services";
import classes from "./SimilarStateSlider.module.css";
import { usePathname } from "next/navigation";

var getInitialSettings = (locationsCount) => ({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: locationsCount < 5 ? locationsCount % 5 : 5,
  slidesToScroll: 1,
  autoplay: true,
  centerPadding: "10px",
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
});

function SimilarLocationSlider({ cityId, locationId }) {
  const pathname = usePathname();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliderSettings, setSliderSettings] = useState(getInitialSettings(0));
  const fontSize2 = { lg: 13, md: 12, sm: 12, xs: 12 };

  const newPath = useMemo(() => {
    if (!pathname) return "";
    const pathSegments = pathname.split("/").filter(Boolean);
    pathSegments.pop();
    return "/" + pathSegments.join("/");
  }, [pathname]);

  const fetchCityData = async () => {
    setLoading(true);
    try {
      const data = await UserApiServices.getSimilarLocations(
        cityId,
        locationId
      );
      setLocations(data?.similarLocations || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  useEffect(() => {
    setSliderSettings(getInitialSettings(locations.length));
  }, [locations]);

  return (
    <div className={classes.container}>
      {loading && <CustomSkeleton width="300px" height={42} />}
      {loading && <CustomSkeleton height={180} />}
      {!loading && locations.length > 1 && (
        <>
          <h2 className={classes.heading}>
            Similar <span>Locations</span> in {locations[0].cityId["name"]}
          </h2>
          <div className={classes.innerContainer}>
            <div className={classes.rightBox}>
              <Slider {...sliderSettings} key={locations.length}>
                {locations.map((location, index) => (
                  <Link key={index} href={`${newPath}/${location?.slug}`}>
                    <div className={classes.imageContainer}>
                      <Image
                        className={classes.image}
                        src={location?.images[0]?.url}
                        alt="Image"
                        fill={true}
                      />
                      <div className={classes.content}>
                        <p className={classes.name}>{location.name}</p>
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
        </>
      )}
    </div>
  );
}

export default SimilarLocationSlider;
