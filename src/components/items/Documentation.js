import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import classes from "./Documentation.module.css";
import CallIcon from "@mui/icons-material/Call";

function Documentation() {
  const documentTypes = [
    {
      heading: "Sole Proprietorship",
      subheading: "Individual / Proprietor",
      icon: PersonIcon,
      description:
        "For individuals, freelancers and businesses operating as a sole proprietorship.",
      points: [
        "Aadhaar Card Copy / Passport Copy",
        "PAN Card Copy",
        "One Recent Passport Size Photograph",
        "Cancelled Cheque / Passbook Front Page Copy",
      ],
      note: "Requirements may vary based on the business type, location and selected service",
    },

    {
      heading: "LLP & Partnership",
      subheading: "Partnership Firms",
      icon: PeopleIcon,
      description:
        "For LLPs and partnership firms applying for virtual office services.",
      points: [
        "Aadhaar Card / Passport Copy of All Partners",
        "PAN Card Copy of All Partners",
        "Passport Size Photograph of All Partners",
        "Cancelled Cheque / Passbook Front Page Copy",
        "PAN Card Copy of the Business",
        "GST Certificate, if applicable",
        "Certificate of Incorporation, if applicable",
      ],
      note: "Additional documents may be required depending on the business structure and service.",
    },

    {
      heading: "Public & Private Company",
      subheading: "Company / Corporate Entity",
      icon: BusinessIcon,
      description:
        "For Private Limited, Public Limited and other eligible registered companies.",
      points: [
        "Aadhaar Card / Passport Copy of Directors",
        "PAN Card Copy of Directors",
        "Passport Size Photograph of Directors",
        "Cancelled Cheque / Passbook Front Page Copy",
        "PAN Card Copy of the Company",
        "GST Certificate, if applicable",
        "Certificate of Incorporation, if applicable",
      ],
      note: "Requirements may vary depending on the company type, location and selected service.",
    },
  ];

  return (
    <section className={classes.container}>
      <div className={classes.container2}>
        {/* Section Heading */}
        <div className={classes.headingWrapper}>
          <span className={classes.eyebrow}>KYC DOCUMENTATION</span>

          <h2 className={classes.heading}>
            <span>KYC Documents</span> required for Virtual Office
          </h2>

          <p className={classes.intro}>
            The documents required for a virtual office depend on the type of
            business. Find the applicable document checklist below and keep the
            required documents ready for verification.
          </p>
        </div>

        {/* Document Cards */}
        <div className={classes.documentsGrid}>
          {documentTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article className={classes.documentCard} key={item.heading}>
                {/* Card Header */}
                <div className={classes.cardHeader}>
                  <div className={classes.iconWrapper}>
                    <Icon />
                  </div>

                  <div className={classes.cardTitleWrapper}>
                    <h3 className={classes.cardTitle}>{item.heading}</h3>

                    <span className={classes.cardSubheading}>
                      {item.subheading}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={classes.cardDescription}>{item.description}</p>

                <div className={classes.divider} />

                {/* Documents Heading */}
                <div className={classes.documentsHeading}>
                  <span>Required Documents</span>

                  <span className={classes.documentCount}>
                    {String(item.points.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Document List */}
                <ul className={classes.documentList}>
                  {item.points.map((point, index) => (
                    <li className={classes.documentItem} key={point}>
                      <span className={classes.number}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={classes.check}>✓</span>

                      <span className={classes.documentText}>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Important Note */}
                <div className={classes.note}>
                  <span className={classes.noteIcon}>i</span>

                  <p>{item.note}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Information */}
        <div className={classes.bottomContainer}>
          <div className={classes.bottomInfo}>
            <div className={classes.bottomIcon}>✓</div>

            <div>
              <strong>Not sure which documents are required?</strong>

              <p>
                Document requirements can vary based on the business structure,
                location and selected virtual office service. Our team can
                assist with the applicable documentation requirements.
              </p>
            </div>
          </div>
          <a
            href="tel:09871001079"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.callExpertButton}
          >
            <CallIcon sx={{ fontSize: { lg: 20, sm: 18, xs: 18 } }} />
            <span>Talk to Expert</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Documentation;
