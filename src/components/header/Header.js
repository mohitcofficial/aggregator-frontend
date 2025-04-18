"use client";
import { WebsiteURLs } from "@/app/data/Links";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TransparentLogo from "../../../public/images/NewTransparentLogo4.png";
import classes from "./Header.module.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import SearchModal from "../modal/SearchModal";
import { phoneNumber1, phoneNumber2 } from "@/app/data/ContactInformation";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [dropDownActive, setDropDownActive] = useState(false);
  const [dropDownActive2, setDropDownActive2] = useState(false);
  const [boxShadow, setBoxShadow] = useState("none");

  const handleScroll = () => {
    if (window?.scrollY > lastScrollY && window?.scrollY > 64) {
      setIsVisible(false);
    } else {
      setBoxShadow(
        window.scrollY === 0 ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.1)"
      );
      setIsVisible(true);
    }
    setLastScrollY(window?.scrollY);
  };

  const handleDropDownClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className={classes.navContainer}>
      <div
        className={`${classes.topnav} ${
          isVisible ? classes.show : classes.hide
        }`}
      >
        <div className={classes.topNavContent}>
          <span>
            <CallIcon
              sx={{
                color: "#000",
                marginRight: "6px",
                fontSize: { xs: 14, sm: 16, md: 18, lg: 18 },
              }}
            />
            <span>+91 {phoneNumber1}</span>
            <span className={classes.phoneNumber2}>, +91 {phoneNumber2}</span>
          </span>
          |
          <span>
            <EmailIcon
              sx={{
                color: "#000",
                marginRight: "6px",
                fontSize: { xs: 14, sm: 16, md: 18, lg: 18 },
              }}
            />
            sales@virtualxcel.in
          </span>
        </div>
      </div>
      <nav
        style={{ boxShadow }}
        className={`${classes.navbar} ${
          isVisible ? classes.show : classes.hide
        }`}
      >
        <div className={classes.navContent}>
          <Link href={WebsiteURLs.home}>
            <div className={classes.imageContainer}>
              <Image
                className={classes.image}
                src={TransparentLogo}
                alt="Image"
                priority={true}
                quality={true}
              />
            </div>
          </Link>
          <ul className={classes.navlist}>
            <li
              onClick={() => {
                setActiveNavItem("home");
              }}
              className={`${classes.listItem}
              ${activeNavItem === "home" ? classes.active : ""}`}
            >
              <Link
                className={classes.aTag}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                href={WebsiteURLs.home}
              >
                Home
              </Link>
            </li>
            <li
              className={`${classes.listItem} ${
                activeNavItem === "virtual-offices" ? classes.active : ""
              } ${classes.listItemwithDropdown}`}
              onClick={() => {
                setActiveNavItem("virtual-offices");
              }}
              onMouseEnter={() => setDropDownActive(true)}
              onMouseLeave={() => setDropDownActive(false)}
            >
              <Link
                className={classes.aTag}
                style={{ display: "flex", alignItems: "center" }}
                href={WebsiteURLs.virtualOffice}
              >
                Virtual Offices
                <ArrowDropDownIcon
                  sx={{ width: "20px", height: "20px", marginBottom: "1px" }}
                />
              </Link>
              {dropDownActive && (
                <ul className={classes.hoveredDropdown}>
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("business-plan");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "business-plan" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href={WebsiteURLs.businessRegistration}
                    >
                      Business Plan
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("gst-plan");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "gst-plan" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href={WebsiteURLs.gstRegistration}
                    >
                      GST Plan
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("mailing-address");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "mailing-address" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href={WebsiteURLs.mailingAddress}
                    >
                      Mailing Address
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`${classes.listItem} ${
                activeNavItem === "coworking-spaces" ? classes.active : ""
              } ${classes.listItemwithDropdown2}`}
              onClick={() => {
                setActiveNavItem("coworking-spaces");
              }}
              onMouseEnter={() => setDropDownActive2(true)}
              onMouseLeave={() => setDropDownActive2(false)}
            >
              <Link
                className={classes.aTag}
                style={{ display: "flex", alignItems: "center" }}
                href={WebsiteURLs.coworkingSpace}
              >
                Coworking Spaces
                <ArrowDropDownIcon
                  sx={{ width: "20px", height: "20px", marginBottom: "1px" }}
                />
              </Link>
              {dropDownActive2 && (
                <ul className={classes.hoveredDropdown2}>
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("day-pass");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "day-pass" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                        height: "100%",
                        display: "block",
                        padding: "6px",
                      }}
                      href={WebsiteURLs.dayPass}
                    >
                      Day Pass
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("cabins");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "cabins" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href={WebsiteURLs.cabin}
                    >
                      Cabins & Meeting Rooms
                    </Link>
                  </li>
                  <hr className={classes.line} />
                  <li
                    onClick={(event) => {
                      handleDropDownClick(event);
                      if (!(event.metaKey || event.ctrlKey))
                        setActiveNavItem("desk");
                    }}
                    className={`${classes.dropListItem} ${
                      activeNavItem === "desk" ? classes.active : ""
                    }`}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        padding: "6px",
                      }}
                      href={WebsiteURLs.desk}
                    >
                      Dedicated Desk
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onClick={() => {
                setActiveNavItem("partnership");
              }}
              className={`${classes.listItem} ${
                activeNavItem === "partnership" ? classes.active : ""
              }`}
            >
              <Link
                className={classes.aTag}
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.partnership}
              >
                Partnership
              </Link>
            </li>
            <li
              onClick={() => {
                setActiveNavItem("contact");
              }}
              className={`${classes.listItem} ${
                activeNavItem === "contact" ? classes.active : ""
              }`}
            >
              <Link
                className={classes.aTag}
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.contactus}
              >
                Contact Us
              </Link>
            </li>
            <div>
              <SearchModal>
                <li className={`${classes.listItem}`}>
                  <SearchIcon
                    sx={{
                      fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
                      "&:hover": {
                        color: "#000",
                        transform: "scale(1.025)",
                      },
                    }}
                  />
                </li>
              </SearchModal>
            </div>
          </ul>
          <div className={classes.rightNav}>
            <SearchModal>
              <div className={classes.searchButton}>
                <SearchIcon
                  sx={{
                    fontSize: { xs: 26, sm: 26, md: 28, lg: 28 },
                    "&:hover": {
                      color: "#000",
                      transform: "scale(1.025)",
                    },
                  }}
                />
              </div>
            </SearchModal>
            <div
              onClick={() => setHamMenuOpen((prev) => !prev)}
              className={classes.hamMenu}
            >
              <MenuIcon
                sx={{
                  fontSize: { xs: 44, sm: 44, md: 44, lg: 44 },
                  padding: "0 2px",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        style={{ top: hamMenuOpen ? 0 : "-100vh" }}
        className={classes.mobileNavMenu}
      >
        <div className={classes.closeButtonContainer}>
          <CloseIcon
            className={classes.closeButton}
            onClick={() => setHamMenuOpen((prev) => !prev)}
            sx={{
              fontSize: { xs: 44, sm: 48, md: 52, lg: 56 },
              padding: "4px",
            }}
          />
        </div>
        <ul className={classes.mobileNavList}>
          <li className={classes.mobileNavListItem}>
            <Link href={WebsiteURLs.home}>
              <span>Home</span>
              <KeyboardArrowRightIcon
                sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 20 } }}
              />
            </Link>
          </li>
          <li className={classes.mobileNavListItem}>
            <span>Virtual Office</span>
            <KeyboardArrowDownIcon
              sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 20 } }}
            />
          </li>
          <ul className={classes.dropMobileList}>
            <li
              onClick={(event) => {
                handleDropDownClick(event);
                setActiveNavItem("business-registration");
                setHamMenuOpen(false);
              }}
              className={`${classes.mobileDropListItem} ${
                activeNavItem === "business-registration" ? classes.active : ""
              }`}
            >
              <Link
                className={classes.aTag3}
                style={{ textDecoration: "none", color: "inherit" }}
                href="/business-plan"
              >
                <span>Business Plan</span>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: { xs: 20, sm: 22, md: 24, lg: 20 } }}
                />
              </Link>
            </li>
            <li
              onClick={(event) => {
                handleDropDownClick(event);
                setActiveNavItem("gst-registration");
                setHamMenuOpen(false);
              }}
              className={`${classes.mobileDropListItem} ${
                activeNavItem === "gst-registration" ? classes.active : ""
              }`}
            >
              <Link
                className={classes.aTag3}
                style={{ textDecoration: "none", color: "inherit" }}
                href="/gst-plan"
              >
                <span>GST Plan</span>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: { xs: 20, sm: 22, md: 24, lg: 20 } }}
                />
              </Link>
            </li>
            <li
              onClick={(event) => {
                handleDropDownClick(event);
                setActiveNavItem("mailing-address");
                router.push("mailing-address");
                setHamMenuOpen(false);
              }}
              className={`${classes.mobileDropListItem} ${
                activeNavItem === "mailing-address" ? classes.active : ""
              }`}
            >
              <Link
                className={classes.aTag3}
                style={{ textDecoration: "none", color: "inherit" }}
                href="/mailing-address"
              >
                <span>Mailing Address</span>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: { xs: 20, sm: 22, md: 24, lg: 20 } }}
                />
              </Link>
            </li>
          </ul>
          <li className={classes.mobileNavListItem}>
            <span>Coworking Space</span>
            <KeyboardArrowDownIcon
              sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 20 } }}
            />
          </li>
          <ul className={classes.dropMobileList}>
            <li
              onClick={(event) => {
                handleDropDownClick(event);
                setActiveNavItem("day-pass");
                setHamMenuOpen(false);
              }}
              className={`${classes.mobileDropListItem} ${
                activeNavItem === "day-pass" ? classes.active : ""
              }`}
            >
              <Link
                className={classes.aTag3}
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.dayPass}
              >
                <span>Day Pass</span>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: { xs: 20, sm: 22, md: 24, lg: 20 } }}
                />
              </Link>
            </li>
            <li
              onClick={(event) => {
                handleDropDownClick(event);
                setActiveNavItem("cabin");
                setHamMenuOpen(false);
              }}
              className={`${classes.mobileDropListItem} ${
                activeNavItem === "cabin" ? classes.active : ""
              }`}
            >
              <Link
                className={classes.aTag3}
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.cabin}
              >
                <span>Cabin</span>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: { xs: 20, sm: 22, md: 24, lg: 20 } }}
                />
              </Link>
            </li>
            <li
              onClick={(event) => {
                handleDropDownClick(event);
                setActiveNavItem("desk");
                router.push("desk");
                setHamMenuOpen(false);
              }}
              className={`${classes.mobileDropListItem} ${
                activeNavItem === "desk" ? classes.active : ""
              }`}
            >
              <Link
                className={classes.aTag3}
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.desk}
              >
                <span>Desk</span>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: { xs: 20, sm: 22, md: 24, lg: 20 } }}
                />
              </Link>
            </li>
          </ul>
          <li className={classes.mobileNavListItem}>
            <Link href={WebsiteURLs.partnership}>
              <span>Partnership</span>
              <KeyboardArrowRightIcon
                sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 20 } }}
              />
            </Link>
          </li>
          <li className={classes.mobileNavListItem}>
            <Link href={WebsiteURLs.contactus}>
              <span>Contact Us</span>
              <KeyboardArrowRightIcon
                sx={{ fontSize: { xs: 24, sm: 26, md: 28, lg: 20 } }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
