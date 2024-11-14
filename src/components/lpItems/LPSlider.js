"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AhemdabadImage from "../../../public/images/Ahemdabad/Ahemdabad.jpeg";
import BangaloreImage from "../../../public/images/Bangalore/Bangalore.jpeg";
import DelhiImage from "../../../public/images/Delhi/Delhi.jpg";
import HaryanaImage from "../../../public/images/Gurgaon/Gurgaon.jpg";
import KolkataImage from "../../../public/images/Kolkata/Kolkata.jpg";
import MaharashtraImage from "../../../public/images/Mumbai/Mumbai.jpg";
import NoidaImage from "../../../public/images/Noida/Noida2.jpeg";
import ConnaughtPlaceImage from "../../../public/images/services/Delhi/ConnaughtPlace.jpeg";
import classes from "./LPSlider.module.css";

import DwarkaImage from "../../../public/images/services/Delhi/Dwarka.jpeg";
import LajpatNagarImage from "../../../public/images/services/Delhi/LajpatNagar.jpeg";
import NehruPlaceImage from "../../../public/images/services/Delhi/NehruPlace.jpeg";
import PitampuraImage from "../../../public/images/services/Delhi/Pitampura.jpeg";
import RohiniImage from "../../../public/images/services/Delhi/Rohini.jpg";
import SaketImage from "../../../public/images/services/Delhi/Saket.jpg";
import LPModal from "../lpItems/LPModal";

function LPSlider({ name = "India" }) {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
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
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const data = {
    India: [
      {
        image: DelhiImage,
        name: "Delhi",
        price: 799,
      },
      {
        image: HaryanaImage,
        name: "Gurgaon",
        price: 799,
      },
      {
        image: NoidaImage,
        name: "Noida",
        price: 799,
      },
      {
        image: BangaloreImage,
        name: "Bangalore",
        price: 799,
      },
      {
        image: MaharashtraImage,
        name: "Mumbai",
        price: 799,
      },
      {
        image: KolkataImage,
        name: "Kolkata",
        price: 799,
      },
      {
        image: AhemdabadImage,
        name: "Ahemdabad",
        price: 799,
      },
    ],
    Delhi: [
      {
        image: SaketImage,
        name: "Saket",
        price: 799,
      },
      {
        image: NehruPlaceImage,
        name: "Nehru Place",
        price: 799,
      },
      {
        image: ConnaughtPlaceImage,
        name: "Connaught Place",
        price: 799,
      },
      {
        image: RohiniImage,
        name: "Rohini",
        price: 799,
      },
      {
        image: PitampuraImage,
        name: "Pitampura",
        price: 799,
      },
      {
        image: DwarkaImage,
        name: "Dwarka",
        price: 799,
      },
      {
        image: LajpatNagarImage,
        name: "Lajpat Nagar",
        price: 799,
      },
    ],
  };
  const fontSize = { lg: 28, md: 24, sm: 24, xs: 24 };
  const fontSize2 = { lg: 13, md: 12, sm: 12, xs: 12 };
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>
        Most
        <span>Prefered Locations</span>
        in {name}
      </h2>
      <div className={classes.innerContainer}>
        <div className={classes.rightBox}>
          <Slider ref={sliderRef} {...settings}>
            {data[name]?.map((item, index) => (
              <LPModal key={index}>
                <div className={classes.imageContainer}>
                  <Image
                    className={classes.image}
                    src={item.image}
                    alt="Image"
                    fill={true}
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw"
                  />
                  <div className={classes.content}>
                    <p className={classes.name}>{item.name}</p>
                    <p className={classes.text}>
                      Starting at
                      <span className={classes.price}>
                        <CurrencyRupeeIcon sx={{ fontSize: fontSize2 }} />
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              </LPModal>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <LPModal>
          <button className={classes.visitAllButton}>
            Visit all Virtual Office locations
            <ArrowForwardIcon sx={{ fontSize: fontSize }} />
          </button>
        </LPModal>
      </div>
    </div>
  );
}

export default LPSlider;
