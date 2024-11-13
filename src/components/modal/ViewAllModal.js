"use client";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";
import classes from "./ViewAllModal.module.css";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ViewAllModal({ children, trendingCities, statesData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const fontSize = { xs: 26, sm: 28, md: 30, lg: 32 };

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.modalInnerContainer}>
          <div className={classes.buttonContainer}>
            <CloseIcon
              sx={{ fontSize: fontSize }}
              className={classes.closeButton}
              onClick={handleClose}
            />
          </div>
          <h2 className={classes.heading}>Premium Locations</h2>
          <div className={classes.content}>
            {trendingCities.map((item, index) => (
              <a
                key={index}
                className={classes.button}
                href={`/virtual-office/${item?.stateId?.slug}/${item.slug}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <h2 className={classes.heading}>Pick From States</h2>
          <div className={classes.content}>
            {statesData.map((item, index) => (
              <a
                key={index}
                className={classes.button2}
                href={`/virtual-office/${item.slug}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
