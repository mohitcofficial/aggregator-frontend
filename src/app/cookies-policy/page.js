import CustomLayout from "@/components/CustomLayout";
import Image from "next/image";
import PrivacyPolicyImage from "../../../public/images/PrivacyPolicy.jpeg";
import { WebsiteURLs } from "../data/Links";
import classes from "./page.module.css";

export const metadata = {
  title: "Cookies Policy",
  keywords:
    "Virtualxcel, cookie policy, cookies usage, website cookies, cookies information, enhance experience, cookies management, coworking space website",
  description:
    "Learn about Virtualxcel's cookies policy. Find out how we use cookies to enhance your experience on our coworking space website.",
};

function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={PrivacyPolicyImage}
            fill={true}
            alt=""
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
          />
          <div className={classes.headingContainer}>
            <p className={`${classes.heading} ${classes.gradientText2}`}>
              Cookies Policy
            </p>
            <p className={classes.subHeading}>Last Updated 21 June ,2024</p>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={` ${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>
                Cookies Policy for Virtualxcel
              </h2>
              <p className={classes.text}>
                This Cookies Policy explains what Cookies are and how We use
                them. You should read this policy so You can understand what
                type of cookies We use, or the information We collect using
                Cookies and how that information is used. This Cookies Policy
                has been created with the help of the Cookies Policy Generator.
                <br />
                <br />
                Cookies do not typically contain any information that personally
                identifies a user, but personal information that we store about
                You may be linked to the information stored in and obtained from
                Cookies. For further information on how We use, store and keep
                your personal data secure, see our Privacy Policy.
                <br />
                <br />
                We do not store sensitive personal information, such as mailing
                addresses, account passwords, etc. in the Cookies We use.
              </p>
            </div>
          </div>
          <div className={` ${classes.outerBlock}`}>
            <div className={classes.block}>
              <p className={classes.heading2}>Interpretation</p>
              <p className={classes.text}>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <p className={classes.heading2}>Definitions</p>
              <p className={classes.text}>
                For the purposes of this Cookies Policy:
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  <span className={classes.bold}>Company</span>
                  (referred to as either "the Company", "We", "Us" or "Our" in
                  this Cookies Policy) refers to My Company LLC, Lower Ground
                  Floor, Saket Salcon Rasvilas, Saket District Centre, Sector 6,
                  Pushp Vihar, Next to Select City Walk Mall, Delhi 110017.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Cookies</span>
                  means small files that are placed on Your computer, mobile
                  device or any other device by a website, containing details of
                  your browsing history on that website among its many uses.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Website</span>
                  refers to Virtualxcel, accessible from
                  <a
                    style={{ marginLeft: "4px" }}
                    className={classes.link}
                    href={WebsiteURLs.home}
                  >
                    {WebsiteURLs.home}
                  </a>
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>You</span>
                  means the individual accessing or using the Website, or a
                  company, or any legal entity on behalf of which such
                  individual is accessing or using the Website, as applicable.
                </li>
              </ul>
            </div>
          </div>

          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <p className={classes.heading1}>The use of the Cookies</p>
              <p className={classes.heading2}>Type of Cookies We Use</p>
              <p className={classes.text}>
                Cookies can be "Persistent" or "Session" Cookies. Persistent
                Cookies remain on your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close your web browser.
                <br />
                <br />
                We use both session and persistent Cookies for the purposes set
                out below:
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  <span className={classes.bold}>
                    Necessary / Essential Cookies
                  </span>
                  <br />
                  <br />
                  Type: Session Cookies
                  <br />
                  <br />
                  Administered by: Us
                  <br />
                  <br />
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
                  <br />
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Functionality Cookies</span>
                  <br />
                  <br />
                  Type: Persistent Cookies
                  <br />
                  <br />
                  Administered by: Us
                  <br />
                  <br />
                  Purpose: These Cookies allow us to remember choices You make
                  when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.
                </li>
              </ul>
              <p className={classes.heading2}>Your Choices Regarding Cookies</p>
              <p className={classes.text}>
                If You prefer to avoid the use of Cookies on the Website, first
                You must disable the use of Cookies in your browser and then
                delete the Cookies saved in your browser associated with this
                website. You may use this option for preventing the use of
                Cookies at any time.
                <br />
                <br />
                If You do not accept Our Cookies, You may experience some
                inconvenience in your use of the Website and some features may
                not function properly.
                <br />
                <br />
                If You'd like to delete Cookies or instruct your web browser to
                delete or refuse Cookies, please visit the help pages of your
                web browser.
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  For the Chrome web browser, please visit this page from
                  Google:
                  <span className={classes.bold2}>
                    <a
                      className={`${classes.link}`}
                      href="https://support.google.com/accounts/answer/32050"
                    >
                      https://support.google.com/accounts/answer/32050
                    </a>
                  </span>
                </li>
                <li className={classes.text}>
                  For the Internet Explorer web browser, please visit this page
                  from Microsoft:
                  <span className={classes.bold2}>
                    <a
                      className={`${classes.link}`}
                      href="http://support.microsoft.com/kb/278835"
                    >
                      http://support.microsoft.com/kb/278835
                    </a>
                  </span>
                </li>
                <li className={classes.text}>
                  For the Firefox web browser, please visit this page from
                  Mozilla:
                  <span className={classes.bold2}>
                    <a
                      className={`${classes.link}`}
                      href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                    >
                      https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                    </a>
                  </span>
                </li>
                <li className={classes.text}>
                  For the Safari web browser, please visit this page from Apple:
                  <span className={classes.bold2}>
                    <a
                      className={`${classes.link}`}
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    >
                      https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                    </a>
                  </span>
                </li>
              </ul>
              <p className={classes.text}>
                For any other web browser, please visit your web browser's
                official web pages.
              </p>
            </div>
          </div>

          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <p className={classes.heading2}>More Information about Cookies</p>
              <p className={classes.text}>
                You can learn more about cookies here:
                <a
                  style={{ marginLeft: "4px" }}
                  className={classes.link}
                  href="https://www.termsfeed.com/blog/cookies/"
                >
                  All About Cookies by TermsFeed.
                </a>
              </p>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <p className={classes.heading2}>Contact Us</p>
              <p className={classes.text}>
                If you have any questions about this Cookies Policy, You can
                contact us:
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  By email:
                  <span className={classes.bold2}>sales@virtualxcel.in</span>
                </li>
                <li className={classes.text}>
                  By visiting this page on our website:
                  <span className={classes.bold2}>
                    <a
                      className={`${classes.link} ${classes.link2}`}
                      href={WebsiteURLs.contactus}
                    >
                      {WebsiteURLs.contactus}
                    </a>
                  </span>
                </li>
                <li className={classes.text}>
                  By phone number:
                  <span className={classes.bold2}>+91 9871001079</span>
                </li>
                <li>
                  By mail:
                  <span className={classes.bold2}>
                    Lower Ground Floor, Saket Salcon Rasvilas, Saket District
                    Centre, Sector 6, Pushp Vihar, Next to Select City Walk
                    Mall, Delhi 110017
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}

export default page;
