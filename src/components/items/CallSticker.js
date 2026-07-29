import classes from "./CallSticker.module.css";
import CallIcon from "@mui/icons-material/Call";

function CallSticker() {
  const fontSize = { xs: 34, sm: 36, md: 38, lg: 40 };
  return (
    <a
      href="tel:09871001079"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.call}
    >
      <CallIcon className={classes.icon} sx={{ fontSize: fontSize }} />
    </a>
  );
}

export default CallSticker;
