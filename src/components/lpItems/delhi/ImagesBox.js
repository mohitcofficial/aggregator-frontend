import Image from "next/image";
import EastDelhi from "../../../../public/images/services/Delhi/EastDelhi.jpg";
import NorthDelhi from "../../../../public/images/services/Delhi/NorthDelhi.jpeg";
import SouthDelhi from "../../../../public/images/services/Delhi/SouthDelhi.jpg";
import WestDelhi from "../../../../public/images/services/Delhi/WestDelhi.png";
import LPModal from "../LPModal";
import classes from "./ImagesBox.module.css";

function ImagesBox() {
  const data = [
    {
      image: NorthDelhi,
      name: "North Delhi",
      price: 999,
    },
    {
      image: EastDelhi,
      name: "East Delhi",
      price: 999,
    },
    {
      image: SouthDelhi,
      name: "South Delhi",
      price: 999,
    },
    {
      image: WestDelhi,
      name: "West Delhi",
      price: 999,
    },
  ];

  return (
    <div className={classes.container}>
      {data.map((item, index) => (
        <div key={index} className={classes.box}>
          <LPModal>
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
              </div>
            </div>
          </LPModal>
        </div>
      ))}
    </div>
  );
}

export default ImagesBox;
