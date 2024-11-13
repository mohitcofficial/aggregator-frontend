import CustomLayout from "@/components/CustomLayout";
import Image from "next/image";
import PrivacyPolicyImage from "../../../public/images/PrivacyPolicy.jpeg";
import classes from "./page.module.css";

export const metadata = {
  title: "Refund Policy",
  keywords:
    "Virtualxcel, refund policy, refund terms, membership refund, service refund, coworking space refund, refund process, refund conditions",
  description:
    "Read Virtualxcel's comprehensive refund policy. Learn about our terms, conditions, and how we handle refunds for our coworking space memberships and services.",
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
              Refund Policy
            </p>
            <p className={classes.subHeading}>Last Updated 21 June ,2024</p>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={` ${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>Virtualxcel Refund Policy</h2>
              <p className={`${classes.text} ${classes.note}`}>
                Note: Virtual office is Non-refundable and cancellation product,
                but client will still be eligible as per the given terms and
                conditions
              </p>
              <p className={`${classes.text} ${classes.bold}`}>
                Name Rejection and Changes
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  If your business name is rejected by the government, you can
                  provide a name rejection notification to receive a fresh NOC
                  and agreement.exclamation This will incur an additional
                  documentation charge of INR 1,500+GST.
                </li>
                <li className={classes.text}>
                  Changes to the agreement or NOC after your approval will be
                  evaluated first. There will be a charge of INR 1,500+GST for
                  re-documentation if changes are accepted.exclamation
                </li>
              </ul>

              <p className={`${classes.text} ${classes.bold}`}>
                Notarization and Stamp Paper
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  Notarization charges of INR 450 (which includes stamp paper up
                  to INR 100) are to be borne by the client.
                </li>
                <li className={classes.text}>
                  Additional notarization charges may vary by location.
                </li>
              </ul>

              <p className={`${classes.text} ${classes.bold}`}>
                Client Verification and KYC Approval
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  Refunds will not be granted if Aadhar-linked mobile number
                  verification or other KYC requirements are not met.exclamation
                </li>
                <li className={classes.text}>
                  Google Search didn't find relevant content If your business
                  entity is not approved by Virtualxcel's legal team, you will
                  receive a full refund minus an admin fee of INR
                  5,000+GST.exclamation
                </li>
                <li className={classes.text}>
                  In some cases, you may need to get the agreement notarized
                  yourself.
                </li>
              </ul>

              <p className={`${classes.text} ${classes.bold}`}>
                Government Regulations
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  Virtual offices cannot be used by certain businesses,
                  including online gaming, online betting, or companies from
                  specific countries.exclamation In these cases, your booking
                  will be cancelled and the KYC disapproved. You will not be
                  refunded.
                </li>
              </ul>

              <p className={`${classes.text} ${classes.bold}`}>
                Space Partner Rejection
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  If Virtualxcel approves your KYC but the space partner rejects
                  it, you will receive a full refund minus an admin fee of INR
                  2,000+GST.exclamation
                </li>
              </ul>

              <p className={`${classes.text} ${classes.bold}`}>Other</p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  Failure to provide required KYC documents within 90 days of
                  payment will result in forfeiting the virtual office
                  solution.exclamation
                </li>
                <li className={classes.text}>
                  Google Maps verification and permanent signage are not
                  included in the virtual office package and require additional
                  fees.exclamation
                </li>
                <li className={classes.text}>
                  Virtualxcel assists with document preparation but cannot
                  guarantee approval by government authorities. They will help
                  provide any missing documents upon request.
                </li>
              </ul>
              <br />
              <p className={classes.text}>
                <span className={classes.bold}>Please note:</span>
                This is a general summary of the refund policy for Virtualxcel
                Virtual Office product. It is advisable to consult the full
                terms and conditions on their website for the most up-to-date
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}

export default page;
