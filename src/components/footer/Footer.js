import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
import classes from "./Footer.module.css";
import Image from "next/image";
import TransparentLogo from "../../../public/images/FooterTransparentLogo.png";
import { WebsiteURLs } from "@/app/data/Links";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={`${classes.box1} ${classes.box3}`}>
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
          <div className={classes.slogan}>Collaborate. Create. Cowork.</div>
          <div className={classes.handlesLink}>
            <a
              href={WebsiteURLs.facebook}
              target="_blank"
              className={classes.icon}
            >
              <FacebookIcon sx={{ fontSize: 22 }} />
            </a>
            <a
              href={WebsiteURLs.instagram}
              target="_blank"
              className={classes.icon}
            >
              <InstagramIcon sx={{ fontSize: 22 }} />
            </a>
            <a
              href={WebsiteURLs.linkedin}
              target="_blank"
              className={classes.icon}
            >
              <LinkedInIcon sx={{ fontSize: 22 }} />
            </a>
            <a
              href={WebsiteURLs.twitter}
              target="_blank"
              className={classes.icon}
            >
              <XIcon sx={{ fontSize: 18 }} />
            </a>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Services</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.virtualOffice}
              >
                Virtual Office
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.gstRegistration}
              >
                GST Plan
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.businessRegistration}
              >
                Business Plan
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.mailingAddress}
              >
                Mailing Address
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.coworkingSpace}
              >
                Coworking Spaces
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Pages</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.home}
              >
                Home
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.aboutUs}
              >
                About Us
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.contactus}
              >
                Contact Us
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.partnership}
              >
                Partner With Us
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.blog}
              >
                Blog
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.box1}>
          <div className={classes.heading}>Others</div>
          <div className={classes.content}>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.privacyPolicy}
              >
                Privacy Policy
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.termsAndConditions}
              >
                Terms & Conditions
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.refundPolicy}
              >
                Refund Policy
              </Link>
            </p>
            <p className={classes.links}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href={WebsiteURLs.cookiesPolicy}
              >
                Cookies Policy
              </Link>
            </p>
          </div>
        </div>
        <div className={`${classes.box2} ${classes.box1}`}>
          <div className={classes.heading}>Connect with us</div>

          <div className={classes.option}>
            <a className={classes.aTag} href={WebsiteURLs.tel}>
              <CallIcon
                sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
              />
              <p className={classes.text}>+91 9871001079</p>
            </a>
          </div>
          <div className={classes.option}>
            <a href={WebsiteURLs.mailTo} className={classes.aTag}>
              <EmailIcon
                sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
              />
              <p className={classes.text}>sales@virtualxcel.in</p>
            </a>
          </div>
          <div className={classes.option2}>
            <div className={classes.text2} style={{ alignItems: "center" }}>
              <LocationOnIcon
                sx={{ color: "rgb(254, 173, 22);", marginRight: "8px" }}
              />
              <p>293, Lane-2, Westend Marg,</p>
            </div>
            <p className={classes.text2} style={{ margin: "0 0 4px 32px" }}>
              Near Saket Metro Station Gate No – 02,
            </p>
            <p className={classes.text2} style={{ margin: "0 0 4px 32px" }}>
              Saket, New Delhi, Delhi 110030
            </p>
          </div>
        </div>
      </div>
      <div className={classes.container2}>
        <div className={classes.bottomLeft}>
          Copyright © 2024, Virtualxcel. All Rights Reserved
        </div>
        <div className={classes.bottomRight}>Virtualxcel Solutions Pvt Ltd</div>
      </div>
    </div>
  );
}

export default Footer;
