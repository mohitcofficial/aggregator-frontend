import React from "react";
import classes from "./OndemandServices.module.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LPModal from "../lpItems/LPModal";

function OnDemandServices() {
  const fontSize = { lg: 20, md: 18, sm: 16, xs: 16 };
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.box1}>
          <p className={classes.text}>
            Unlock more than just a Virtual Office address with us!
          </p>
          <h2 className={classes.heading}>
            <div className={classes.round}></div>
            On Demand Services
          </h2>
          <ul className={classes.servicesContainer}>
            <li className={classes.listItem}>
              <TaskAltIcon sx={{ color: "green", fontSize: fontSize }} />
              Permanent Signage
            </li>
            <li className={classes.listItem}>
              <TaskAltIcon sx={{ color: "green", fontSize: fontSize }} />
              Fixed Seat
            </li>
            <li className={classes.listItem}>
              <TaskAltIcon sx={{ color: "green", fontSize: fontSize }} />
              Day Pass
            </li>
            <li className={classes.listItem}>
              <TaskAltIcon sx={{ color: "green", fontSize: fontSize }} />
              Meeting Rooms
            </li>
            <li className={classes.listItem}>
              <TaskAltIcon sx={{ color: "green", fontSize: fontSize }} />
              Private Cabins
            </li>
          </ul>
        </div>
        <div>
          <LPModal>
            <button className={classes.callBackButton}>Request Callback</button>
          </LPModal>
        </div>
      </div>
    </div>
  );
}

export default OnDemandServices;
