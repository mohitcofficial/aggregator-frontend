import axios from "axios";
import { USER_URLs } from "./http.services";

export default {
  sendMail: async function (body) {
    const { data } = await axios.post(USER_URLs.sendMail, body);
    return data;
  },
  getSimilarStates: async function (id) {
    const { data } = await axios.get(`${USER_URLs.getSimilarStates}/${id}`, {
      withCredentials: true,
    });
    return data;
  },
  getSimilarCities: async function (stateId, cityId) {
    const { data } = await axios.get(
      `${USER_URLs.getSimilarCities}/${stateId}/${cityId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  },
  getSimilarLocations: async function (cityId, locationId) {
    const { data } = await axios.get(
      `${USER_URLs.getSimilarLocations}/${cityId}/${locationId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  },
  getCitiesWithInAState: async function (stateId) {
    const { data } = await axios.get(
      `${USER_URLs.getCitiesWithInAState}/${stateId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  },
  getLocationsWithInACity: async function (cityId) {
    const { data } = await axios.get(
      `${USER_URLs.getLocationsWithInACity}/${cityId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  },

  getStateInfoFromSlug: async function (slug) {
    const { data } = await axios.get(
      `${USER_URLs.getStateInfoFromSlug}/${slug}`,
      {
        withCredentials: true,
      }
    );
    return data;
  },
  getCityInfoFromSlug: async function (stateSlug, citySlug) {
    const { data } = await axios.get(
      `${USER_URLs.getCityInfoFromSlug}/${stateSlug}/city/${citySlug}`,
      {
        withCredentials: true,
      }
    );
    return data;
  },
  getLocationInfoFromSlug: async function (stateSlug, citySlug, locationSlug) {
    const { data } = await axios.get(
      `${USER_URLs.getLocationInfoFromSlug}/${stateSlug}/city/${citySlug}/location/${locationSlug}`,
      {
        withCredentials: true,
      }
    );
    return data;
  },
  getAllStates: async function () {
    const { data } = await axios.get(`${USER_URLs.getAllStates}`, {
      withCredentials: true,
    });
    return data;
  },
  getAllCities: async function () {
    const { data } = await axios.get(`${USER_URLs.getAllCities}`, {
      withCredentials: true,
    });
    return data;
  },
  getTrendingCities: async function () {
    const { data } = await axios.get(`${USER_URLs.getTrendingCities}`, {
      withCredentials: true,
    });
    return data;
  },
  getTrendingStates: async function () {
    const { data } = await axios.get(`${USER_URLs.getTrendingStates}`, {
      withCredentials: true,
    });
    return data;
  },
};
