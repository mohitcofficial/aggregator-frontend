import { defaultCitySeoContent } from "@/app/data/content";

export const citySeoContent = {
  mumbai: {
    documents: [
      "PAN Card",
      "Aadhaar Card or valid identity proof",
      "Business or company registration documents, if applicable",
      "Proof of business address, where applicable",
      "GST-related documents, if applicable",
      "Bio Metrics (Extra Charges)",
    ],
  },
  pune: {
    documents: [
      "PAN Card",
      "PAN Card",
      "Aadhaar Card or valid identity proof",
      "Business or company registration documents, if applicable",
      "Proof of business address, where applicable",
      "GST-related documents, if applicable",
      "Bio Metrics (Extra Charges)",
    ],
  },
  nashik: {
    documents: [
      "PAN Card",
      "PAN Card",
      "Aadhaar Card or valid identity proof",
      "Business or company registration documents, if applicable",
      "Proof of business address, where applicable",
      "GST-related documents, if applicable",
      "Bio Metrics (Extra Charges)",
    ],
  },
};

export function getCitySeoContent(cityName, citySlug) {
  const customContent = citySeoContent[citySlug] || {};

  const content = {
    ...defaultCitySeoContent,
    ...customContent,
  };

  const replaceCity = (value) => {
    if (typeof value === "string") {
      return value.replaceAll("{city}", cityName);
    }

    if (Array.isArray(value)) {
      return value.map(replaceCity);
    }

    if (value && typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value).map(([key, val]) => [key, replaceCity(val)]),
      );
    }

    return value;
  };

  return replaceCity(content);
}
