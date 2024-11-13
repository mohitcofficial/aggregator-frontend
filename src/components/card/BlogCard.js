import Image from "next/image";
import BlogImage1 from "../../../public/images/blog/BlogImage1.jpeg";
import BlogImage2 from "../../../public/images/blog/BlogImage2.jpeg";
import BlogImage3 from "../../../public/images/blog/BlogImage3.jpg";
import classes from "./BlogCard.module.css";
import ReadMoreButton2 from "../buttons/ReadMoreButton2";

function BlogCard({ heading, content, index }) {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        {index === 1 && (
          <Image
            className={classes.image}
            src={BlogImage1}
            alt="Image"
            fill={true}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
        )}
        {index === 2 && (
          <Image
            className={classes.image}
            src={BlogImage2}
            alt="Image"
            fill={true}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
        )}
        {index === 3 && (
          <Image
            className={classes.image}
            src={BlogImage3}
            alt="Image"
            fill={true}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
        )}
      </div>
      <p className={classes.heading}>{heading}</p>
      <p className={classes.content}>{content}</p>
      <div className={classes.buttonContainer}>
        <ReadMoreButton2 />
      </div>
    </div>
  );
}

export default BlogCard;
