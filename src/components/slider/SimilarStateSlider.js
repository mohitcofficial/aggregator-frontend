"use client";

import UserApiServices from "@/services/User.api.services";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CustomSkeleton from "../CustomSkeleton";
import classes from "./SimilarStateSlider.module.css";
import Link from "next/link";
import { getInitialSettings } from "@/utils/sliderSettings";

function SimilarStateSlider({ id }) {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliderSettings, setSliderSettings] = useState(getInitialSettings(0));

  const fetchStateData = async () => {
    setLoading(true);
    try {
      const data = await UserApiServices.getSimilarStates(id);
      setStates(data?.similarStates || []);
    } catch (error) {
      console.error("Error fetching states:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSliderSettings(getInitialSettings(states.length));
  }, [states]);

  useEffect(() => {
    fetchStateData();
  }, [id]);

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>
        Most <span>Preferred States</span> in India
      </h2>
      {loading ? (
        <CustomSkeleton height={180} />
      ) : (
        <div className={classes.innerContainer}>
          <div className={classes.rightBox}>
            <Slider {...sliderSettings}>
              {states.map((state, index) => (
                <Link
                  key={state.id || index}
                  href={`/virtual-office/${state.slug}`}
                  passHref
                >
                  <div className={classes.imageContainer}>
                    <Image
                      className={classes.image}
                      src={state.bannerImage[0]?.url}
                      alt={`${state.name} image`}
                      fill
                    />
                    <div className={classes.content}>
                      <p className={classes.name}>{state.name}</p>
                      <p className={classes.text}>
                        Starting at
                        <span className={classes.price}>
                          <CurrencyRupeeIcon
                            sx={{
                              fontSize: { lg: 13, md: 12, sm: 12, xs: 12 },
                            }}
                          />
                          799
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
    </div>
  );
}

export default SimilarStateSlider;
