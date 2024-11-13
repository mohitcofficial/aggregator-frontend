import CustomLayout from "@/components/CustomLayout";
import Image from "next/image";
import PrivacyPolicyImage from "../../../public/images/PrivacyPolicy.jpeg";
import { WebsiteURLs } from "../data/Links";
import classes from "./page.module.css";

export const metadata = {
  title: "Terms and Conditions | Virtualxcel",
  description:
    "Read the terms and conditions of Virtualxcel. Understand the guidelines and policies governing the use of our services and website.",
  keywords:
    "terms and conditions, Virtualxcel terms of service, legal agreements, business policies, user guidelines",
  author: "Virtualxcel",
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
              Terms & Conditions
            </p>
            <p className={classes.subHeading}>Last Updated 21 June ,2024</p>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={` ${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>
                Terms and Conditions for Virtualxcel
              </h2>
              <p className={classes.text}>
                Please read these terms and conditions carefully before using
                Our Service.
              </p>

              <h2 className={classes.heading2}>Interpretation</h2>
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
              <h2 className={classes.heading2}>Definitions</h2>
              <p className={classes.text}>
                For the purposes of these Terms and Conditions:
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  <span className={classes.bold}>Affiliate</span>
                  means an entity that controls, is controlled by or is under
                  common control with a party, where "control" means ownership
                  of 50% or more of the shares, equity interest or other
                  securities entitled to vote for election of directors or other
                  managing authority.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Country</span>
                  refers to: Delhi, India
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Company</span>
                  (referred to as either "the Company", "We", "Us" or "Our" in
                  this Agreement) refers to My Company LLC, Lower Ground Floor,
                  Saket Salcon Rasvilas, Saket District Centre, Sector 6, Pushp
                  Vihar, Next to Select City Walk Mall, Delhi 110017.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Device</span>
                  means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Service</span>
                  refers to the Website
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Terms and Conditions</span>
                  (also referred as "Terms") mean these Terms and Conditions
                  that form the entire agreement between You and the Company
                  regarding the use of the Service. This Terms and Conditions
                  agreement has been created with the help of the.
                  <a
                    style={{ marginLeft: "4px" }}
                    className={classes.link}
                    href="https://www.termsfeed.com/terms-conditions-generator/"
                  >
                    Terms and Conditions Generator
                  </a>
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>
                    Third-party Social Media Service
                  </span>
                  means any services or content (including data, information,
                  products or services) provided by a third-party that may be
                  displayed, included or made available by the Service.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Website</span> refers to Cowork
                  Town, accessible from
                  <a
                    style={{ marginLeft: "4px" }}
                    className={classes.link}
                    href={WebsiteURLs.home}
                  >
                    {WebsiteURLs.home}{" "}
                  </a>
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>You</span>
                  means the individual accessing or using the Service, or the
                  company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </li>
              </ul>
            </div>
          </div>

          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>Acknowledgment</h2>
              <p className={classes.text}>
                These are the Terms and Conditions governing the use of this
                Service and the agreement that operates between You and the
                Company. These Terms and Conditions set out the rights and
                obligations of all users regarding the use of the Service.
                <br />
                <br />
                Your access to and use of the Service is conditioned on Your
                acceptance of and compliance with these Terms and Conditions.
                These Terms and Conditions apply to all visitors, users and
                others who access or use the Service.
                <br />
                <br />
                By accessing or using the Service You agree to be bound by these
                Terms and Conditions. If You disagree with any part of these
                Terms and Conditions then You may not access the Service.
                <br />
                <br />
                You represent that you are over the age of 18. The Company does
                not permit those under 18 to use the Service.
                <br />
                <br />
                Your access to and use of the Service is also conditioned on
                Your acceptance of and compliance with the Privacy Policy of the
                Company. Our Privacy Policy describes Our policies and
                procedures on the collection, use and disclosure of Your
                personal information when You use the Application or the Website
                and tells You about Your privacy rights and how the law protects
                You. Please read Our Privacy Policy carefully before using Our
                Service.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <h2 className={classes.heading2}>Links to Other Websites</h2>
              <p className={classes.text}>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by the Company.
                <br />
                <br />
                The Company has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any third
                party web sites or services. You further acknowledge and agree
                that the Company shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with the use of or reliance on any
                such content, goods or services available on or through any such
                web sites or services.
                <br />
                <br />
                We strongly advise You to read the terms and conditions and
                privacy policies of any third-party web sites or services that
                You visit.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <h2 className={classes.heading2}>Termination</h2>
              <p className={classes.text}>
                We may terminate or suspend Your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if You breach these Terms and Conditions.
                <br />
                <br />
                Upon termination, Your right to use the Service will cease
                immediately.
              </p>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>Limitation of Liability</h2>
              <p className={classes.text}>
                Notwithstanding any damages that You might incur, the entire
                liability of the Company and any of its suppliers under any
                provision of this Terms and Your exclusive remedy for all of the
                foregoing shall be limited to the amount actually paid by You
                through the Service or 100 USD if You haven't purchased anything
                through the Service.
                <br />
                <br />
                To the maximum extent permitted by applicable law, in no event
                shall the Company or its suppliers be liable for any special,
                incidental, indirect, or consequential damages whatsoever
                (including, but not limited to, damages for loss of profits,
                loss of data or other information, for business interruption,
                for personal injury, loss of privacy arising out of or in any
                way related to the use of or inability to use the Service,
                third-party software and/or third-party hardware used with the
                Service, or otherwise in connection with any provision of this
                Terms), even if the Company or any supplier has been advised of
                the possibility of such damages and even if the remedy fails of
                its essential purpose.
                <br />
                <br />
                Some states do not allow the exclusion of implied warranties or
                limitation of liability for incidental or consequential damages,
                which means that some of the above limitations may not apply. In
                these states, each party's liability will be limited to the
                greatest extent permitted by law.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <h2 className={classes.heading2}>
                "AS IS" and "AS AVAILABLE" Disclaimer
              </h2>
              <p className={classes.text}>
                The Service is provided to You "AS IS" and "AS AVAILABLE" and
                with all faults and defects without warranty of any kind. To the
                maximum extent permitted under applicable law, the Company, on
                its own behalf and on behalf of its Affiliates and its and their
                respective licensors and service providers, expressly disclaims
                all warranties, whether express, implied, statutory or
                otherwise, with respect to the Service, including all implied
                warranties of merchantability, fitness for a particular purpose,
                title and non-infringement, and warranties that may arise out of
                course of dealing, course of performance, usage or trade
                practice. Without limitation to the foregoing, the Company
                provides no warranty or undertaking, and makes no representation
                of any kind that the Service will meet Your requirements,
                achieve any intended results, be compatible or work with any
                other software, applications, systems or services, operate
                without interruption, meet any performance or reliability
                standards or be error free or that any errors or defects can or
                will be corrected.
                <br />
                <br />
                Without limiting the foregoing, neither the Company nor any of
                the company's provider makes any representation or warranty of
                any kind, express or implied: (i) as to the operation or
                availability of the Service, or the information, content, and
                materials or products included thereon; (ii) that the Service
                will be uninterrupted or error-free; (iii) as to the accuracy,
                reliability, or currency of any information or content provided
                through the Service; or (iv) that the Service, its servers, the
                content, or e-mails sent from or on behalf of the Company are
                free of viruses, scripts, trojan horses, worms, malware,
                timebombs or other harmful components.
                <br />
                <br />
                Some jurisdictions do not allow the exclusion of certain types
                of warranties or limitations on applicable statutory rights of a
                consumer, so some or all of the above exclusions and limitations
                may not apply to You. But in such a case the exclusions and
                limitations set forth in this section shall be applied to the
                greatest extent enforceable under applicable law.
              </p>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>Governing Law</h2>
              <p className={classes.text}>
                The laws of the Country, excluding its conflicts of law rules,
                shall govern this Terms and Your use of the Service. Your use of
                the Application may also be subject to other local, state,
                national, or international laws.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <h2 className={classes.heading2}>Disputes Resolution</h2>
              <p className={classes.text}>
                If You have any concern or dispute about the Service, You agree
                to first try to resolve the dispute informally by contacting the
                Company.
              </p>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>
                For European Union (EU) Users
              </h2>
              <p className={classes.text}>
                If You are a European Union consumer, you will benefit from any
                mandatory provisions of the law of the country in which You are
                resident.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <h2 className={classes.heading2}>
                United States Legal Compliance
              </h2>
              <p className={classes.text}>
                You represent and warrant that (i) You are not located in a
                country that is subject to the United States government embargo,
                or that has been designated by the United States government as a
                "terrorist supporting" country, and (ii) You are not listed on
                any United States government list of prohibited or restricted
                parties.
              </p>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>Termination</h2>
              <p className={classes.text}>
                We may terminate or suspend Your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if You breach these Terms and Conditions.
                <br />
                <br />
                Upon termination, Your right to use the Service will cease
                immediately.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <h1 className={classes.heading1}>Severability and Waiver</h1>
              <h2 className={classes.heading2}>Severability</h2>
              <p className={classes.text}>
                If any provision of these Terms is held to be unenforceable or
                invalid, such provision will be changed and interpreted to
                accomplish the objectives of such provision to the greatest
                extent possible under applicable law and the remaining
                provisions will continue in full force and effect.
              </p>
              <h2 className={classes.heading2}>Waiver</h2>
              <p className={classes.text}>
                Except as provided herein, the failure to exercise a right or to
                require performance of an obligation under these Terms shall not
                affect a party's ability to exercise such right or require such
                performance at any time thereafter nor shall the waiver of a
                breach constitute a waiver of any subsequent breach.
              </p>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>Translation Interpretation</h2>
              <p className={classes.text}>
                These Terms and Conditions may have been translated if We have
                made them available to You on our Service. You agree that the
                original English text shall prevail in the case of a dispute.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <h2 className={classes.heading2}>
                Changes to These Terms and Conditions
              </h2>
              <p className={classes.text}>
                We reserve the right, at Our sole discretion, to modify or
                replace these Terms at any time. If a revision is material We
                will make reasonable efforts to provide at least 30 days' notice
                prior to any new terms taking effect. What constitutes a
                material change will be determined at Our sole discretion.
                <br />
                <br />
                By continuing to access or use Our Service after those revisions
                become effective, You agree to be bound by the revised terms. If
                You do not agree to the new terms, in whole or in part, please
                stop using the website and the Service.
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
                  <span className={classes.bold2}>+91 9871001076</span>
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
