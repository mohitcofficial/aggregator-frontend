import CustomLayout from "@/components/CustomLayout";
import OnboardingForm from "@/components/form/OnboardingForm";
import Image from "next/image";
import PartnershipImage from "../../../public/images/Partnership.jpg";
import classes from "./page.module.css";

export const metadata = {
  title: "Partner With Us",
  description:
    "Explore exciting partnership opportunities with Virtualxcel. Join forces with us to create innovative programs, events, and initiatives that empower professionals and businesses. Let's collaborate for mutual success.",
  keywords:
    "Virtual Office, Virtual Office Address, Premium Virtual Offce, Virtual Office near me, Virtual Office for Startups",
};

function page() {
  return (
    <CustomLayout>
      <div className={classes.container}>
        <Image
          src={PartnershipImage}
          alt="img"
          fill
          sizes="(max-width: 768px) 100vw"
          placeholder="blur"
          className={classes.image}
        />
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <div className={classes.heading}>
              <span className={classes.heading1}>
                <span>Collaborate with</span>
                <span className={classes.gradientText}>Virtualxcel</span>
              </span>
            </div>
            <div className={classes.subHeading}>
              Get your space onboarded on our website.
            </div>
            <div className={classes.subHeading}>
              We appreciate your interest for collaborating with us.
            </div>
            <div className={classes.text}>
              At Virtualxcel, we are passionate about fostering meaningful
              collaborations and expanding horizons. We believe in the power of
              partnerships to create shared value and drive mutual success. As
              pioneers in the coworking and virtual office space, we are excited
              about the prospect of joining forces with innovative organizations
              like yours.
            </div>
          </div>
          <div className={classes.formContainer}>
            <OnboardingForm />
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}

export default page;
