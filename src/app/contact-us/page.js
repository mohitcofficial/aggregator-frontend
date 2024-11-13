import ContactUsBanner from "@/components/banner/ContactUsBanner";
import ContactPageCard from "@/components/card/ContactPageCard";
import ContactUsFormContainer from "@/components/content/ContactUsFormContainer";
import CustomLayout from "@/components/CustomLayout";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import classes from "./page.module.css";

export const metadata = {
  title: "Connect With Us",
  description:
    "Get in touch with Virtualxcel today. Whether you have inquiries, feedback, or partnership proposals, our team is here to assist you. Reach out to us easily and start your journey towards a vibrant coworking experience.",
};

function page() {
  const fontSize = { xs: 40, sm: 40, md: 50, lg: 60 };
  return (
    <CustomLayout>
      <div className={classes.container}>
        <ContactUsBanner />
        <div className={classes.container2}>
          <div className={classes.boxContainer}>
            <ContactPageCard
              icon={
                <CallIcon
                  sx={{ color: "rgb(63, 63, 63)", fontSize: fontSize }}
                />
              }
              heading={"Phone"}
              text={"+91 9871001079"}
              buttonText={"Call"}
            />
            <ContactPageCard
              icon={
                <WhatsAppIcon
                  sx={{ color: "rgb(63, 63, 63)", fontSize: fontSize }}
                />
              }
              heading={"WhatsApp"}
              text={"+91 9871001079"}
              buttonText={"Chat"}
            />
            <ContactPageCard
              icon={
                <EmailIcon
                  sx={{ color: "rgb(63, 63, 63)", fontSize: fontSize }}
                />
              }
              heading={"Email"}
              text={"sales@virtualxcel.in"}
              buttonText={"E-Mail"}
            />
          </div>
        </div>

        <ContactUsFormContainer />

        <div className={classes.mapContainer}>
          <span className={classes.heading2}>Connect with us physically</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4087973325654!2d77.2177403753315!3d28.52742987572236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18b0950c389%3A0xebbb242665d51b64!2sSalcon%20Rasvilas!5e0!3m2!1sen!2sin!4v1724412053664!5m2!1sen!2sin"
            className={classes.frame}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </CustomLayout>
  );
}

export default page;
