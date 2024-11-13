import WifiIcon from "@mui/icons-material/Wifi";
import CoffeeIcon from "@mui/icons-material/Coffee";
import GroupsIcon from "@mui/icons-material/Groups";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import PrintIcon from "@mui/icons-material/Print";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PowerIcon from "@mui/icons-material/Power";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SecurityIcon from "@mui/icons-material/Security";
import AirIcon from "@mui/icons-material/Air";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MoodIcon from "@mui/icons-material/Mood";

const style = { color: "white", fontSize: { xs: 50, sm: 50, md: 55, lg: 60 } };

export const coworkingFacilities = [
  {
    title: "Internet Potency",
    icon: <WifiIcon sx={style} />,
  },
  {
    title: "Beverages",
    icon: <CoffeeIcon sx={style} />,
  },
  {
    title: "Meeting Rooms",
    icon: <GroupsIcon sx={style} />,
  },
  {
    title: "House Keeping",
    icon: <CleaningServicesIcon sx={style} />,
  },
  {
    title: "Printer",
    icon: <PrintIcon sx={style} />,
  },
  {
    title: "Mail Handling",
    icon: <MailOutlineIcon sx={style} />,
  },
  {
    title: "Power Backups",
    img: "/svgs/PowerBackup.svg",
    icon: <PowerIcon sx={style} />,
  },
  {
    title: "Management System",
    icon: <Diversity3Icon sx={style} />,
  },
  {
    title: "Flexible Agreement",
    icon: <EditNoteIcon sx={style} />,
  },
  {
    title: "Leisure Time",
    icon: <MoodIcon sx={style} />,
  },
  {
    title: "Security",
    icon: <SecurityIcon sx={style} />,
  },
  {
    title: "Air Conditioned",
    icon: <AirIcon sx={style} />,
  },
];
