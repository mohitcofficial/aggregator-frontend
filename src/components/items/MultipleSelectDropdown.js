"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import classes from "./MultipleSelectDropdown.module.css";
import { useMediaQuery } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, selectedLocations, theme) {
  return {
    fontWeight:
      selectedLocations.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectDropdown({
  selectedLocations,
  setSelectedLocations,
  handleFilter,
  handleResetInput,
  data,
  type,
}) {
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  let width;
  if (isExtraSmallScreen) {
    width = "100%";
  } else if (isSmallScreen) {
    width = "100%";
  } else if (isMediumScreen) {
    width = 400;
  } else if (isLargeScreen) {
    width = 500;
  } else {
    width = 500;
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedLocations(typeof value === "string" ? value.split(",") : value);
  };

  const handleReset = (event) => {
    const button = event.target;
    button.classList.remove(classes.bouncy);
    void button.offsetWidth;
    button.classList.add(classes.bouncy);
    setSelectedLocations([]);
    handleResetInput();
  };

  const inputLabel = type === "city" ? "Cities" : "Locations";

  return (
    <div className={classes.container}>
      <div className={classes.marginContainer}>
        <FormControl
          sx={{
            width: width,
          }}
        >
          <InputLabel id="demo-multiple-chip-label">{inputLabel}</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectedLocations}
            onChange={handleChange}
            input={
              <OutlinedInput id="select-multiple-chip" label={inputLabel} />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {data?.map((city) => (
              <MenuItem
                key={city?.name}
                value={city?.name}
                style={getStyles(city?.name, selectedLocations, theme)}
              >
                {city?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={classes.buttonContainer}>
          <button
            onClick={handleReset}
            className={`${classes.resetButton} ${classes.bouncyButton}`}
          >
            Reset
          </button>
          <button onClick={handleFilter} className={classes.filterButton}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
