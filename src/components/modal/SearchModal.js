"use client";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useEffect, useRef, useState } from "react";
import classes from "./SearchModal.module.css";

import UserApiServices from "@/services/User.api.services";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { WebsiteURLs } from "@/app/data/Links";
import CustomSkeleton from "../CustomSkeleton";

const style = {
  position: "absolute",
  top: "%",
  left: "0%",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  bgcolor: "#52566d1a",
  backdropFilter: "blur(20px)",
  display: "flex",
  justifyContent: "center",
  boxShadow: 24,
  pt: 4,
  pb: 4,
};

export default function SearchModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");

  async function fetchData() {
    setLoading(true);
    try {
      const [statesData, citiesData] = await Promise.all([
        UserApiServices.getAllStates(),
        UserApiServices.getAllCities(),
      ]);
      const combinedData = [
        ...statesData?.states?.map((state) => ({
          type: "state",
          name: state?.name,
          slug: state?.slug,
        })),
        ...citiesData?.cities?.map((city) => ({
          type: "city",
          name: city?.name,
          slug: city?.slug,
          stateName: city?.stateId?.name,
          stateSlug: city?.stateId?.slug,
        })),
      ];
      setData(combinedData);
      setFilteredData(combinedData);
    } catch (error) {
      console.error("Error fetching states or cities:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const newArray = data.filter((item) => {
      const cur = item.name.toLowerCase();
      return cur.includes(input.toLowerCase());
    });
    if (newArray.length === 0) {
      setFilteredData([]);
    } else {
      setFilteredData([...newArray]);
    }
  }, [input]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
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
          <div className={classes.container}>
            <div className={classes.buttonContainer}>
              <button className={classes.closeButton} onClick={handleClose}>
                <CloseIcon
                  sx={{ fontSize: { xs: 38, sm: 40, md: 42, lg: 48 } }}
                />
              </button>
            </div>
            <div className={classes.searchBox}>
              <div className={classes.searchField}>
                <SearchIcon
                  sx={{ fontSize: { xs: 24, sm: 28, md: 36, lg: 40 } }}
                  className={classes.searchLabel}
                />
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Search the location"
                  autoFocus={true}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              {!loading && (
                <div className={classes.dropdown}>
                  {filteredData.map((item, index) => (
                    <Link
                      href={
                        item?.type === "state"
                          ? `${WebsiteURLs.virtualOffice}/${item.slug}`
                          : `${WebsiteURLs.virtualOffice}/${item.stateSlug}/${item.slug}`
                      }
                      className={classes.location}
                      key={index}
                    >
                      <span>{item.name}</span>
                      <ArrowForwardIosIcon
                        sx={{ fontSize: { xs: 12, sm: 14, md: 15, lg: 16 } }}
                      />
                    </Link>
                  ))}
                </div>
              )}
              {loading && <p style={{ margin: "12px 0" }}>loading...</p>}
              {filteredData.length === 0 && !loading && (
                <p className={classes.notFoundText}>No Data Found !</p>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
