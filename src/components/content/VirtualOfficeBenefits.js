import BusinessIcon from "@mui/icons-material/Business";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BalanceIcon from "@mui/icons-material/Balance";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArticleIcon from "@mui/icons-material/Article";
import GavelIcon from "@mui/icons-material/Gavel";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PercentIcon from "@mui/icons-material/Percent";
import classes from "./VirtualOfficeBenefits.module.css";

function VirtualOfficeBenefits({ id = 0 }) {
  const fontSize = { lg: 80, md: 75, sm: 70, xs: 64 };
  const headingData = [
    {
      heading1: "Expand Your Business with",
      heading2: "Virtual Office Benefits",
    },
    {
      heading1: "Benefits of our",
      heading2: "Business Plan",
    },
    {
      heading1: "Benefits of our",
      heading2: "GST Plan",
    },
  ];
  const data = [
    [
      {
        heading:
          "Optimizing Your Business Address for Maximum Impact and Trust",
        text: "The Impact of a Professional Address on Business Perceptions and Trustworthiness",
        icon: (
          <BusinessIcon
            sx={{
              color: "#ffff",
              backgroundColor: "#00a0d0",
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "10px",
              border: "4px solid #fff",
            }}
            //   className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
          />
        ),
      },
      {
        heading: "Choosing the Right Mail Handling Service",
        text: "Affordable mail handling services designed to streamline business communication efficiently.",
        icon: (
          <EmailIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "10px",
              color: "#fff",
              backgroundColor: "#FCAB14",
              border: "4px solid #fff",
            }}
            //   className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
      {
        heading: "Optimizing Bank and GST Verification",
        text: "Importance of Timely Bank and GST Verification for Smooth Business Transactions",
        icon: (
          <DomainVerificationIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "10px",
              color: "#fff",
              backgroundColor: "#00a0d0",
              border: "4px solid #fff",
            }}
            //   className={`${classes.gradientText} ${classes.color}`}
          />
        ),
      },
      {
        heading: "Cost Effective Solutions ",
        text: "Budget-friendly solutions for optimizing business operations.",
        icon: (
          <MonetizationOnIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "10px",
              border: "4px solid #fff",
              color: "#fff",
              backgroundColor: "#FCAB14",
            }}
            //   className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
      {
        heading: "Dedicated Customer Support for Your Business",
        text: "Timely resolution of customer queries and issues drives business success with dedicated customer support teams.",
        icon: (
          <SupportAgentIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "10px",
              color: "#fff",
              backgroundColor: "#00a0d0",
              border: "4px solid #fff",
            }}
            //   className={`${classes.gradientText} ${classes.color}`}
          />
        ),
      },
      {
        heading: "Meeting Spaces & Cabins Availability",
        text: "Feel free to use meeting rooms whenever you need them to suit your requirements and schedule.",
        icon: (
          <GroupsIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "10px",
              color: "#fff",
              backgroundColor: "#FCAB14",
              border: "4px solid #fff",
            }}
            //   className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
    ],
    [
      {
        heading: "Liability Protection",
        text: "Provides protection from personal liability and shields against various risks and losses.",
        icon: (
          <SecurityIcon
            // fontSize="large"
            sx={{
              color: "#ffff",
              backgroundColor: "#00a0d0",
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
          />
        ),
      },
      {
        heading: "Enhanced Financial Standing",
        text: "Facilitates easier access to bank loans and attracts trustworthy investors effortlessly.",
        icon: (
          <AccountBalanceIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              color: "#fff",
              backgroundColor: "#FCAB14",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
      {
        heading: "Increased Capital Investment and Stability",
        text: "Allows for greater capital infusion, enhancing business stability and growth potential.",
        icon: (
          <BalanceIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              color: "#fff",
              backgroundColor: "#00a0d0",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
      },
      {
        heading: "Establishes Legal Entity",
        text: "Registering your business grants it a distinct legal identity separate from its owners.",
        icon: (
          <PersonSearchIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              border: "4px solid #fff",
              color: "#fff",
              backgroundColor: "#FCAB14",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
      {
        heading: "Asset Protection",
        text: "Offers protection of company assets by limiting personal liability",
        icon: (
          <ShieldIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              color: "#fff",
              backgroundColor: "#00a0d0",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
      },
      {
        heading: "Enhanced Business Credibility",
        text: "Boosts credibility, making it easier to raise capital and attract investment for business expansion and development.",
        icon: (
          <SignalCellularAltIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              color: "#fff",
              backgroundColor: "#FCAB14",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
    ],
    [
      {
        heading: "Legal Recognition & Compliance",
        text: "Registering for GST provides a firm with legal recognition as a supplier of goods or services, thereby confirming its status as an authorized entity.",
        icon: (
          <GavelIcon
            sx={{
              color: "#ffff",
              backgroundColor: "#00a0d0",
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
          />
        ),
      },
      {
        heading: "Input Tax Credit (ITC)",
        text: "Registered businesses can offset the GST they collect on sales with the GST they pay on purchases through Input Tax Credit, reducing their overall tax liability.",
        icon: (
          <PercentIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              color: "#fff",
              backgroundColor: "#FCAB14",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
      {
        heading: "Competitive Advantage & Trust Factor",
        text: "Builds trust and credibility among clients and partners due to compliance with tax regulations.",
        icon: (
          <HandshakeIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              color: "#fff",
              backgroundColor: "#00a0d0",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
      },
      {
        heading: "Cost Effective",
        text: "Budget-friendly solutions for cost-effective business operations",
        icon: (
          <MonetizationOnIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              border: "4px solid #fff",
              color: "#fff",
              backgroundColor: "#FCAB14",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
      {
        heading: "Business Expansion Opportunities",
        text: "Eligibility to participate in government tenders and contracts requiring GST.",
        icon: (
          <BusinessIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              color: "#fff",
              backgroundColor: "#00a0d0",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
      },
      {
        heading: "GST Composition Schemes",
        text: "The Composition Scheme under GST enables small businesses to pay tax at a lower, fixed rate",
        icon: (
          <ArticleIcon
            sx={{
              fontSize: fontSize,
              borderRadius: "50%",
              padding: "20px",
              color: "#fff",
              backgroundColor: "#FCAB14",
              border: "4px solid #fff",
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        ),
        right: true,
      },
    ],
  ];
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.mapImage}></div>
        <h1 className={classes.heading0}>
          <p>{headingData[id]?.heading1}</p>
          <span>{headingData[id]?.heading2}</span>
        </h1>
        <div className={classes.cardContainer}>
          {data[id]?.map((item, index) => (
            <div
              key={index}
              className={`${classes.container2} ${
                item?.right && classes.right
              }`}
            >
              {!item?.right && item?.icon}
              <div className={`${classes.contentContainer2}`}>
                <p
                  className={`${classes.heading} ${
                    item?.right && classes.right
                  }`}
                >
                  {item?.heading}
                </p>
                <p
                  className={`${classes.text} ${item?.right && classes.right}`}
                >
                  {item?.text}
                </p>
              </div>
              {item?.right && item?.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VirtualOfficeBenefits;
