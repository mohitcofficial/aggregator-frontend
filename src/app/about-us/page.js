import Image from "next/image";
import PrivacyPolicyImage from "../../../public/images/PrivacyPolicy.jpeg";
import { WebsiteURLs } from "../data/Links";
import classes from "./page.module.css";

import CustomLayout from "@/components/CustomLayout";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(
  () => import("../../components/slider/ReviewSlider"),
  {
    ssr: false,
  }
);

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
              About Us
            </p>
            <p className={classes.subHeading}>Last Updated 21 June ,2024</p>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={` ${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading1}>
                Welcome to VirtualXcel Solutions Private Limited!
              </h2>
              <p className={classes.text}>
                We are pioneers in providing innovative virtual office solutions
                across India. Established to meet the growing demands of modern
                businesses, our mission is to empower entrepreneurs and
                companies by offering flexible, scalable, and cost-effective
                workspace solutions tailored to diverse needs.
              </p>
            </div>
          </div>
          <div className={` ${classes.outerBlock}`}>
            <div className={classes.block}>
              <h2 className={classes.heading2}>Our Vision and Mission</h2>
              <p className={classes.text}>
                <span className={classes.bold}>Vision:</span>
                Our vision is to redefine the workspace landscape in India by
                providing virtual office solutions that inspire creativity,
                foster collaboration, and drive business growth.
                <br />
                <br />
                <span className={classes.bold}>Mission:</span>
                We aim to support businesses of all sizes by offering
                exceptional virtual office services that enhance productivity,
                streamline operations, and create a professional image without
                the traditional overhead costs associated with physical office
                spaces.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <h2 className={classes.heading2}>Who We Are</h2>
              <p className={classes.text}>
                VirtualXcel was founded by a team of seasoned professionals with
                extensive experience in the business and real estate sectors. We
                understand the challenges that businesses face in today’s
                dynamic environment, and our goal is to provide innovative
                solutions that enable our clients to focus on their core
                operations while we take care of their virtual office needs.
              </p>
              <br />
              <p className={`${classes.bold} ${classes.text}`}>
                Our Core Values
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  <span className={classes.bold}>Customer-Centricity:</span>
                  We prioritize our clients’ needs and strive to deliver
                  personalized services that exceed expectations.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Integrety</span>
                  We believe in transparency and honesty in all our
                  interactions, fostering trust with our clients and partners.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Inovation</span>
                  We continuously seek new ways to enhance our services,
                  adopting the latest technologies and trends in the industry.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Collaboration</span>
                  We promote a collaborative environment that encourages
                  networking and synergy among our clients.
                </li>
              </ul>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <p className={classes.heading1}>Our Services</p>
              <p className={classes.heading2}>Virtual Office Solutions</p>
              <p className={classes.text}>
                At VirtualXcel, our virtual office solutions are designed to
                provide businesses with a prestigious presence without the high
                costs of maintaining a physical office. Our offerings include:
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  <span className={classes.bold}>
                    Professional Business Address:
                  </span>
                  Establish your company’s credibility with a registered
                  business address in prime locations across India, ensuring you
                  stand out in the competitive marketplace.
                  <br />
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>
                    Mail Handling & Forwarding:{" "}
                  </span>
                  We offer reliable mail handling services, ensuring that your
                  correspondence is received and forwarded promptly to your
                  desired location.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>
                    Dedicated Phone Services:
                  </span>
                  Enhance your business communication with a dedicated phone
                  number and professional call handling services, projecting a
                  polished image to clients and partners.
                </li>
              </ul>
              <p className={classes.heading2}>Coworking Spaces</p>
              <p className={classes.text}>
                Our coworking spaces are thoughtfully designed to foster
                creativity and collaboration. We provide:
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  <span className={classes.bold}>Flexible Workspaces:</span>
                  Choose from hot desks, dedicated desks, or private offices
                  based on your requirements, allowing you to scale your
                  workspace as your business grows.
                  <br />
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Mordern Amenities:</span>
                  Our coworking spaces are equipped with high-speed internet,
                  ergonomic furniture, and essential office supplies, creating a
                  conducive environment for productivity.
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>Community Networking:</span>
                  Join a vibrant community of entrepreneurs, freelancers, and
                  professionals, opening avenues for collaboration and
                  networking.
                </li>
              </ul>
              <p className={classes.heading2}>Meeting & Conference Rooms</p>
              <p className={classes.text}>
                For those crucial business meetings and presentations,
                VirtualXcel offers state-of-the-art meeting and conference rooms
                equipped with the latest technology, ensuring a professional
                atmosphere for your discussions.
              </p>
              <ul className={classes.points}>
                <li className={classes.text}>
                  <span className={classes.bold}>
                    Fully Equiped Facilities:
                  </span>
                  Our meeting rooms come with audio-visual equipment,
                  whiteboards, and high-speed internet to facilitate smooth
                  presentations and collaborations.
                  <br />
                </li>
                <li className={classes.text}>
                  <span className={classes.bold}>
                    Flexible Booking Options:
                  </span>
                  Reserve our meeting spaces on an hourly, daily, or monthly
                  basis to suit your specific needs.
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <p className={classes.heading1}>Why Choose VirtualXcel?</p>
              <p className={classes.heading3}>1. Flexibility</p>
              <p className={classes.text}>
                In today’s fast-paced business environment, flexibility is
                crucial. At VirtualXcel, we offer tailored solutions that allow
                you to choose the services that best fit your needs, whether you
                are a startup looking to establish a presence or an established
                business needing to scale quickly
              </p>
              <p className={classes.heading3}>2. Cost-Effectiveness</p>
              <p className={classes.text}>
                Maintaining a physical office can be expensive, with costs for
                rent, utilities, and maintenance adding up. Our virtual office
                solutions provide a cost-effective alternative, allowing you to
                allocate resources to growth and innovation instead.
              </p>
              <p className={classes.heading3}>3. Professional Image</p>
              <p className={classes.text}>
                In a competitive landscape, presenting a professional image is
                paramount. With our prestigious business addresses and dedicated
                phone services, you can project an image of professionalism and
                reliability to your clients and partners.
              </p>
              <p className={classes.heading3}>4. Seamless Operations</p>
              <p className={classes.text}>
                We understand the importance of smooth operations for your
                business. Our reliable services ensure that your administrative
                tasks, such as mail handling and communication, are managed
                efficiently, allowing you to focus on what truly matters –
                growing your business.
              </p>
              <p className={classes.heading3}>5. Strategic Locations</p>
              <p className={classes.text}>
                With virtual office services available in major cities across
                India, you can establish your presence in key markets without
                the burden of physical office space. Our strategic locations
                enhance your visibility and accessibility in the business
                community.
              </p>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <p className={classes.heading2}>
                Our Commitments & Sustainability
              </p>
              <p className={classes.text}>
                At VirtualXcel, we are committed to sustainable practices. By
                promoting virtual office solutions, we contribute to reducing
                the carbon footprint associated with traditional office spaces.
                Our aim is to create a positive impact on the environment while
                providing our clients with exceptional services.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
            <div className={classes.block}>
              <p className={classes.heading2}>Our Team</p>
              <p className={classes.text}>
                Our dedicated team of professionals is the backbone of
                VirtualXcel. With a diverse range of expertise, our staff is
                committed to ensuring that you receive exceptional service and
                support at every stage of your business journey. We believe in
                fostering a culture of collaboration, innovation, and continuous
                improvement.
              </p>
            </div>
          </div>
          <div className={`${classes.outerBlock}`}>
            <div className={classes.block}>
              <p className={classes.heading2}>Join Us Today !</p>
              <p className={classes.text}>
                Embarking on a new business journey or looking to expand your
                existing operations? Join the VirtualXcel family today and
                experience the benefits of our innovative virtual office
                solutions. Let us help you excel in your business endeavors
                while enjoying the flexibility and convenience of modern
                workspace solutions.
              </p>
            </div>
          </div>
          <div
            className={`${classes.lightGrayBackground} ${classes.outerBlock}`}
          >
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
          <ReviewSlider />
        </div>
      </div>
    </CustomLayout>
  );
}

export default page;
