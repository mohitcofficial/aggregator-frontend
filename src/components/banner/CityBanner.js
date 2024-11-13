import Image from "next/image";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";
import classes from "./StateBanner.module.css";

function CityBanner({ image, city, stateName }) {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={image}
          width={800}
          height={400}
          alt=""
          layout="responsive"
        />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.heading}>
          <p>Virtual Office in</p>
          <p className={classes.gradientText}>{city}</p>
        </div>
        <div className={classes.location}>
          <Link style={{ color: "transparent" }} href="/virtual-office">
            <span className={classes.bannerLink}>Virtual Office</span>
          </Link>
          <KeyboardDoubleArrowRightIcon />
          {stateName}
          <KeyboardDoubleArrowRightIcon />
          {city}
        </div>
      </div>
    </div>
  );
}

export default CityBanner;
