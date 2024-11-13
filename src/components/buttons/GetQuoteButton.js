import classes from "./GetQuoteButton.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function GetQuoteButton() {
  const fontSize = { xs: 14, sm: 16, md: 18, lg: 20 };

  return (
    <button className={classes.button}>
      Get Quote
      <ArrowForwardIcon sx={{ fontSize: fontSize }} />
    </button>
  );
}

export default GetQuoteButton;
