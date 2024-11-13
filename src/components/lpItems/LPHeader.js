"use client";

import React, { useState } from "react";
import classes from "./LPHeader.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import TransparentLogo from "../../../public/images/TransparentLogo4.png";

function LPHeader() {
  const router = useRouter();
  const path = usePathname();
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [navbarBg, setNavbarBg] = useState("");
  const [navBorder, setNavBorder] = useState(false);

  useEffect(() => {
    const parts = path.split("/").filter((part) => part !== "");
    const lastElement = parts[parts.length - 1];
    if (!lastElement) {
      setActiveNavItem("home");
    } else if (lastElement === "virtual-offices") {
      setActiveNavItem("virtual-offices");
    } else if (lastElement === "coworking-spaces") {
      setActiveNavItem("coworking-spaces");
    } else if (lastElement === "partnership") {
      setActiveNavItem("partnership");
    } else if (lastElement == "contactus") {
      setActiveNavItem("contact");
    } else {
      setActiveNavItem("");
    }
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && window.scrollY <= 40) {
        setNavbarBg("rgb(0, 0, 0, 0.6)");
      } else if (window.scrollY > 40 && window.scrollY < 250) {
        setNavbarBg("rgb(0, 0, 0, 0.8)");
      } else if (window.scrollY >= 250) {
        setNavBorder(true);
        setNavbarBg("#191c20");
      } else {
        setNavBorder(false);
        setNavbarBg("transparent");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={classes.navbar}
      style={{
        backgroundColor: navbarBg,
        borderBottom: navBorder ? "0.6px solid rgb(145, 145, 145)" : "none",
      }}
    >
      <div className={classes.navContainer}>
        <div className={classes.logo}>
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={TransparentLogo}
              alt="Image"
              fill={true}
              placeholder="blur"
              priority={true}
              quality={true}
            />
          </div>
        </div>

        <ul className={classes.navlist}>
          <li className={`${classes.listItem}`}>
            <a href="Mailto:sales@virtualxcel.in" className={classes.aTag}>
              <EmailIcon
                sx={{
                  color: "#FCAB14",
                  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
                }}
              />
              sales@virtualxcel.in
            </a>
          </li>
          <p style={{ color: "white", fontSize: "28px" }}>|</p>
          <li className={`${classes.listItem}`}>
            <a className={classes.aTag} href="Tel:09871001079">
              <CallIcon
                sx={{
                  color: "#FCAB14",
                  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
                }}
              />
              +91 9871001079
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LPHeader;
