import classes from "./NeedExpertPoster.module.css";
import Image from "next/image";
import BackgroundImage from "../../../public/images/NeedExpert.jpeg";
import GetHelpButton from "../buttons/GetHelpButton";

function NeedExpertPoster() {
  return (
    <div className={classes.container}>
      <Image
        className={classes.image}
        src={BackgroundImage}
        alt=""
        width={100}
        height={100}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw"
      />
      <div className={classes.textContent}>
        <span className={classes.text1}>Need Professional Advice ?</span>
        <span className={classes.text2}>
          Connect to out experts directly over call or physical meet.
        </span>
        <GetHelpButton />
      </div>
    </div>
  );
}

export default NeedExpertPoster;
