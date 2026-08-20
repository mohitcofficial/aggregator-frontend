import classes from "./SEOContent.module.css";

export default function SEOContent({ content }) {
  return (
    <section className={classes.container}>
      <div className={classes.contentContainer}>
        <h1 className={classes.mainHeading}>{content.title}</h1>
        {content.intro?.map((paragraph, index) => (
          <p className={classes.mainIntro} key={index}>
            {paragraph}
          </p>
        ))}

        {/* Sections */}
        {content.sections?.map((section, index) => (
          <div className={classes.subSection} key={index}>
            <h2 className={classes.heading2}>{section.heading}</h2>

            {/* Paragraphs */}
            {section.paragraphs?.map((paragraph, index) => (
              <p className={classes.para} key={index}>
                {paragraph}
              </p>
            ))}

            {/* List */}
            {section.list && (
              <ul className={classes.list}>
                {section.list.map((item, index) => (
                  <li className={classes.listItem} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Subsections */}
            {section.subsections?.map((subsection, index) => (
              <div className={classes.subSection2} key={index}>
                <h3 className={classes.heading3}>{subsection.heading}</h3>

                {subsection.paragraphs?.map((paragraph, index) => (
                  <p className={classes.para} key={index}>
                    {paragraph}
                  </p>
                ))}

                {subsection.list && (
                  <ul>
                    {subsection.list.map((item, index) => (
                      <li className={classes.listItem} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
