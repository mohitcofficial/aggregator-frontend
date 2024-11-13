import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BlogCard from "../card/BlogCard";
import Link from "next/link";
import classes from "./BlogSection.module.css";

function BlogSection() {
  const fontSize = { lg: 28, md: 26, sm: 26, xs: 24 };
  return (
    <div className={classes.container}>
      <p className={classes.heading}>
        <span>Blogs</span> Section
        <Link
          href={"https://blog.virtualxcel.in/"}
          className={classes.openInNewLink}
        >
          <OpenInNewIcon sx={{ fontSize: fontSize, marginTop: "4px" }} />
        </Link>
      </p>
      <div className={classes.blogContainer}>
        <BlogCard
          index={1}
          heading={
            "The Rise of Co-Working Spaces in the Modern Business Landscape"
          }
          content={
            "In recent years, co-working spaces have revolutionized the traditional office environment, offering flexible and cost-effective solutions for startups, freelancers, and established businesses alike. These dynamic workspaces foster collaboration, innovation, and networking opportunities, making them an ideal choice for professionals seeking a vibrant community. With amenities like high-speed internet, meeting rooms, and recreational areas, co-working spaces provide a productive and engaging atmosphere that adapts to the evolving needs of today's workforce."
          }
        />
        <BlogCard
          index={2}
          heading={"The Benefits of Virtual Offices for Remote Businesses"}
          content={
            "Virtual offices have emerged as a game-changer for remote businesses, providing a professional address and essential services without the need for a physical presence. This setup allows entrepreneurs and small businesses to establish credibility and expand their reach while keeping overhead costs low. "
          }
        />
        <BlogCard
          index={3}
          heading={
            "Simplifying Business and GST Registration for Entrepreneurs"
          }
          content={
            "Navigating the complexities of business and GST registration can be a daunting task for entrepreneurs. Our platform simplifies this process by providing comprehensive support and guidance, ensuring that your business complies with all legal requirements. "
          }
        />
      </div>
    </div>
  );
}

export default BlogSection;
