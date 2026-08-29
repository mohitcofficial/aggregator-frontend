import classes from "./WhatsappSticker.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsappSticker() {
  const fontSize = { xs: 34, sm: 36, md: 38, lg: 40 };

  const message =
    "Hello, I would like to know more about your Virtual Office services.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=919871001079&text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.whatsapp}
    >
      <WhatsAppIcon className={classes.icon} sx={{ fontSize: fontSize }} />
    </a>
  );
}

export default WhatsappSticker;
