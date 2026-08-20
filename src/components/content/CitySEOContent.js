import classes from "./StateSEOContent.module.css";

export default function CitySEOContent({ content }) {
  if (!content) return null;

  return (
    <section className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.section}>
          <h2>{content.title}</h2>
          <p>{content.intro}</p>
        </div>

        {/* Benefits */}
        <div className={classes.section}>
          <h2>{content.benefitsTitle}</h2>

          {content.benefits?.map((item, index) => (
            <div className={classes.item} key={index}>
              <h3>
                {index + 1}. {item.title}
              </h3>

              <p>{item.content}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className={classes.section}>
          <h2>{content.servicesTitle}</h2>

          {content.services?.map((item, index) => (
            <div className={classes.item} key={index}>
              <h3>
                {index + 1}. {item.title}
              </h3>

              <p>{item.content}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className={classes.section}>
          <h2>{content.useCasesTitle}</h2>

          <ul className={classes.list}>
            {content.useCases?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Documents */}
        <div className={classes.section}>
          <h2>{content.documentsNeededTitle}</h2>

          <ul className={classes.list}>
            {content.documents?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Why Virtualxcel */}
        <div className={classes.section}>
          <h2>{content.whyVirtualxcelTitle}</h2>

          <p>{content.whyVirtualxcel}</p>
        </div>
      </div>
    </section>
  );
}
