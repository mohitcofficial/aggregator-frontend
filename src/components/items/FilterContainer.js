"use client";
import React, { useEffect, useState } from "react";
import classes from "./FilterContainer.module.css";
import MultipleSelectDropdown from "./MultipleSelectDropdown";
import UserApiServices from "@/services/User.api.services";
import LocationCard from "../card/LocationCard";
import CityCard from "../card/CityCard";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import Image from "next/image";
import OfferImage from "../../../public/images/Offer.jpeg";

function FilterContainer({ id, type = "city", name }) {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [found, setFound] = useState(true);
  const [loading, setLoading] = useState(true);
  const fontSize = { xs: 30, sm: 34, md: 40, lg: 48 };

  const fetchCityData = async () => {
    setLoading(true);
    try {
      const data = await UserApiServices.getCitiesWithInAState(id);
      setData(data?.cities);
      setFilteredData(data?.cities);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchLocationData = async () => {
    setLoading(true);
    try {
      const data = await UserApiServices.getLocationsWithInACity(id);
      setData(data?.locations);
      setFilteredData(data?.locations);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (type === "city") fetchCityData();
    else fetchLocationData();
  }, []);

  const handleFilter = (event) => {
    const button = event.target;
    button.classList.remove(classes.bouncy);
    void button.offsetWidth;
    button.classList.add(classes.bouncy);
    if (selectedLocations.length === 0) {
      setFound(true);
      setFilteredData(data);
      return;
    }
    const newFilteredData = [];

    selectedLocations.map((item) => {
      const temp = data.filter((it) => it.name.includes(item));
      newFilteredData.push(...temp);
    });
    if (newFilteredData.length === 0) setFound(false);
    else setFound(true);
    setFilteredData(newFilteredData);
  };

  const handleResetInput = () => {
    setFilteredData(data);
    setFound(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading2}>
        Premium {type === "city" ? "Cities" : "Locations"} in
        <p className={classes.boldText}>{name}</p>
      </div>
      <MultipleSelectDropdown
        data={data}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        handleFilter={handleFilter}
        handleResetInput={handleResetInput}
        type={type}
      />
      <div className={classes.contentContainer}>
        <div className={classes.cardContainer}>
          {found &&
            type === "location" &&
            filteredData.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          {found &&
            type === "city" &&
            filteredData.map((city, index) => (
              <CityCard key={index} city={city} />
            ))}
          {!found && (
            <p className={classes.warningText}>
              Sorry, no data available for this location
            </p>
          )}
        </div>
        <div className={classes.stickyContainer}>
          <div className={classes.offerContainer}>
            <Image
              className={classes.image}
              src={OfferImage}
              alt="Image"
              fill={true}
            />
            <div className={classes.offerTextContainer}>
              <p className={classes.offerText}>
                Get up to <span>10%</span> off on Virtual Offices !
              </p>
              <p>Terms & Conditions Applied</p>
            </div>
          </div>
          <div className={classes.contactContainer}>
            <div className={classes.headingContainer}>
              <p className={classes.heading}>
                Still Struggling with GST Registration ?
              </p>
              <p className={classes.subHeading}>We got you !</p>
            </div>
            <div className={classes.personContainer}>
              <PersonIcon
                sx={{ fontSize: fontSize }}
                className={classes.personIcon}
              />
              <div className={classes.infoContainer}>
                <p className={classes.personName}>Mohit Chandra</p>
                <p className={classes.personEmail}>sales@virtualxcel.in</p>
              </div>
            </div>
            <Link className={classes.callButton} href={"Tel:09871001079"}>
              Call +91 9871001079
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterContainer;
