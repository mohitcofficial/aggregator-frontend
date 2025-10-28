"use client";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import classes from "./Banner.module.css";
import toast from "react-hot-toast";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";
import Background2 from "../../../public/images/Background2.jpeg";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import UserApiServices from "@/services/User.api.services";
import { WebsiteURLs } from "@/app/data/Links";
import ViewAllModal from "../modal/ViewAllModal";
// import LocationsModal from "../LocationsModal";

function Banner() {
  const router = useRouter();
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  const [trendingCities, setTrendingCities] = useState([]);
  const [statesData, setStatesData] = useState([]);

  async function fetchData() {
    try {
      const [statesData, citiesData, trendingCities] = await Promise.all([
        UserApiServices.getAllStates(),
        UserApiServices.getAllCities(),
        UserApiServices.getTrendingCities(),
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
      setStatesData(statesData?.states);
      setTrendingCities(trendingCities?.cities);
    } catch (error) {
      console.error("Error fetching states or cities:", error);
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
    if (input.length > 0 && newArray.length != 1) setDropdown2Open(true);
    if (newArray.length === 0) {
      setFilteredData([]);
    } else {
      setFilteredData([...newArray]);
    }
  }, [input]);

  const handleSearch = () => {
    if (input.length == 0) {
      toast("Please Enter Location!", {
        icon: "⚠️",
      });
      return;
    }
    const inputSlug = input.trim().toLowerCase().replace(/\s+/g, "-");

    const foundLocation = data.find((item) => item.slug === inputSlug);

    if (!foundLocation) {
      toast("Invalid Location!", {
        icon: "⚠️",
      });
      return;
    }

    if (foundLocation.type === "state")
      router.push(`${WebsiteURLs.virtualOffice}/${foundLocation.slug}`);
    else if (foundLocation.type === "city")
      router.push(
        `${WebsiteURLs.virtualOffice}/${foundLocation.stateSlug}/${foundLocation.slug}`
      );
  };
  const handleSearch2 = (item) => {
    if (item?.name?.length == 0) {
      toast("Please Enter Location!", {
        icon: "⚠️",
      });
      return;
    }

    if (item.type === "state")
      router.push(`${WebsiteURLs.virtualOffice}/${item.slug}`);
    else if (item.type === "city")
      router.push(
        `${WebsiteURLs.virtualOffice}/${item.stateSlug}/${item.slug}`
      );
  };

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.backgroundImage}>
          <Image className={classes.image} src={Background2} alt="Image" />
        </div>
        <div className={classes.textContent}>
          <h1 className={classes.heading1}>
            <div>Unlock Your</div>
            <div className={classes.gradientText}>Productivity</div>
            <div>Potential</div>
            with Us
          </h1>
          <div className={classes.searchField}>
            <div className={classes.locationIcon}>
              <LocationOnIcon
                sx={{
                  color: "rgb(254, 173, 22)",
                  fontSize: { xs: 28, sm: 32, md: 34, lg: 36 },
                }}
              />
            </div>
            <div className={classes.dropdown2}>
              <input
                className={classes.inputField}
                type="text"
                onFocus={() => {
                  setDropdown2Open(true);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setDropdown2Open(false);
                  }, 150);
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {input.length === 0 && (
                <div className={`${classes.typewriter}`}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      deleteSpeed: 20,
                      strings: [
                        "PAN India locations available.",
                        "Search your preferred location.",
                        "Delhi ?",
                        "Bangalore ?",
                        "Goa ?",
                        "Gurgaon ?",
                        "Kerala ?",
                      ],
                      pauseFor: 800,
                    }}
                  />
                </div>
              )}
              {dropdown2Open && (
                <ul className={classes.dropdown2List}>
                  {filteredData.map((item, index) => (
                    <li
                      onClick={() => {
                        setInput(item.name);
                        handleSearch2(item);
                        setDropdown2Open(false);
                      }}
                      key={index}
                      className={classes.dropdown2ListItem}
                    >
                      {item?.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div onClick={handleSearch} className={classes.searchButton}>
              <SearchIcon
                sx={{ fontSize: { xs: 28, sm: 32, md: 34, lg: 36 } }}
              />
            </div>
          </div>
          <ViewAllModal trendingCities={trendingCities} statesData={statesData}>
            <button className={classes.viewLocationsButton}>
              View All Locations
            </button>
          </ViewAllModal>
        </div>
        <div className={classes.contactContainer}>
          <span>
            <CallIcon
              sx={{
                color: "rgb(254, 173, 22);",
                marginRight: "6px",
                fontSize: { xs: 16, sm: 18, md: 20, lg: 20 },
              }}
            />
            +91 9871001079
          </span>
          |
          <span>
            <EmailIcon
              sx={{
                color: "rgb(254, 173, 22);",
                marginRight: "6px",
                fontSize: { xs: 16, sm: 18, md: 20, lg: 20 },
              }}
            />
            sales@virtualxcel.in
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
