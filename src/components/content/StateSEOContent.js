import classes from "./StateSEOContent.module.css";

export default function StateSeoContent({ content }) {
  if (!content) return null;

  return (
    <section className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.section}>
          <h2>{content.title}</h2>
          <p>{content.intro}</p>
        </div>

        {/* About State */}
        <div className={classes.section}>
          <h2>{content.aboutTitle}</h2>
          <p>{content.about}</p>
        </div>

        {/* Benefits */}
        {content.benefits?.length > 0 && (
          <div className={classes.section}>
            <h2>Benefits of Having a Virtual Office in {content.stateName}</h2>

            {content.benefits.map((item, index) => (
              <div className={classes.item} key={item.title}>
                <h3>
                  {index + 1}. {item.title}
                </h3>

                <p>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Services */}
        {content.services?.length > 0 && (
          <div className={classes.section}>
            <h2>Services Offered by Virtual Offices in {content.stateName}</h2>

            {content.services.map((item, index) => (
              <div className={classes.item} key={item.title}>
                <h3>
                  {index + 1}. {item.title}
                </h3>

                <p>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Locations */}
        {content.locations?.length > 0 && (
          <div className={classes.section}>
            <h2>{content.locationsTitle}</h2>

            {content.locations.map((location) => (
              <div className={classes.item} key={location.name}>
                <h3>Virtual Office in {location.name}</h3>

                <p>{location.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Use Cases */}
        {content.useCases?.length > 0 && (
          <div className={classes.section}>
            <h2>{content.useCasesTitle}</h2>

            <ul className={classes.list}>
              {content.useCases.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Who Can Benefit */}
        {content.audience?.length > 0 && (
          <div className={classes.section}>
            <h2>
              Who Can Benefit from a Virtual Office in {content.stateName}?
            </h2>

            {content.audience.map((item, index) => (
              <div className={classes.item} key={item.title}>
                <h3>
                  {index + 1}. {item.title}
                </h3>

                <p>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Why Virtualxcel */}
        <div className={classes.section}>
          <h2>
            Why Choose Virtualxcel for a Virtual Office in {content.stateName}?
          </h2>

          <p>{content.whyVirtualxcel}</p>
        </div>
      </div>
    </section>
  );
}
