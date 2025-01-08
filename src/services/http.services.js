// export const BASEURL = "http://localhost:4000";
export const BASEURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const USER_URLs = {
  sendMail: `${BASEURL}/api/v1/client/send-email`,
  sendOnboardingMail: `${BASEURL}/api/v1/client/send-onboarding-email`,
  getSimilarCities: `${BASEURL}/api/v1/client/cities/similar`,
  getSimilarLocations: `${BASEURL}/api/v1/client/locations/similar`,
  getStateInfoFromSlug: `${BASEURL}/api/v1/client/state`,
  getCityInfoFromSlug: `${BASEURL}/api/v1/client/state`,
  getLocationInfoFromSlug: `${BASEURL}/api/v1/client/state`,
  getSimilarStates: `${BASEURL}/api/v1/client/states/similar`,
  getCitiesWithInAState: `${BASEURL}/api/v1/client/cities`,
  getLocationsWithInACity: `${BASEURL}/api/v1/client/locations`,
  getAllStates: `${BASEURL}/api/v1/client/states`,
  getAllCities: `${BASEURL}/api/v1/client/cities`,
  getAllLocations: `${BASEURL}/api/v1/client/locations`,
  getTrendingCities: `${BASEURL}/api/v1/client/trending/cities`,
  getTrendingStates: `${BASEURL}/api/v1/client/trending/states`,
  getKey: `${BASEURL}/api/v1/client/getkey`,
  checkout: `${BASEURL}/api/v1/client/checkout`,
  paymentverification: `${BASEURL}/api/v1/client/paymentverification`,
};
