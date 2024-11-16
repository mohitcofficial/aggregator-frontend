import UserApiServices from "@/services/User.api.services";

export default async function sitemap() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const generateUrlEntries = (data, pathPrefix, priority) => {
    if (!data || !data.length) return [];
    return data.map((item) => ({
      url: `${BASE_URL}${pathPrefix}/${item.slug}`,
      priority,
    }));
  };

  const staticUrls = [
    { url: `${BASE_URL}`, priority: 1 },
    { url: `${BASE_URL}/virtual-office`, priority: 0.99 },
    { url: `${BASE_URL}/business-registration`, priority: 0.98 },
    { url: `${BASE_URL}/gst-registration`, priority: 0.97 },
    { url: `${BASE_URL}/mailing-address`, priority: 0.96 },
    { url: `${BASE_URL}/coworking-space`, priority: 0.9 },
    { url: `${BASE_URL}/desk`, priority: 0.89 },
    { url: `${BASE_URL}/cabin`, priority: 0.88 },
    { url: `${BASE_URL}/day-pass`, priority: 0.87 },
    { url: `${BASE_URL}/partnership`, priority: 0.6 },
    { url: `${BASE_URL}/contact-us`, priority: 0.6 },
    { url: `${BASE_URL}/about-us`, priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.5 },
    { url: `${BASE_URL}/cookies-policy`, priority: 0.5 },
    { url: `${BASE_URL}/refund-policy`, priority: 0.5 },
    { url: `${BASE_URL}/terms-and-conditions`, priority: 0.5 },
  ];

  try {
    const [statesData, citiesData] = await Promise.all([
      UserApiServices.getAllStates(),
      UserApiServices.getAllCities(),
    ]);

    const stateEntries = generateUrlEntries(
      statesData?.states,
      "/virtual-office",
      0.95
    );
    const cityEntries = generateUrlEntries(
      citiesData?.cities,
      "/virtual-office",
      0.94
    );

    return [...staticUrls, ...stateEntries, ...cityEntries];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticUrls;
  }
}
