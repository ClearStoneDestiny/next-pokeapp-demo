import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from ".";

export const defaultNS = "common";
export const supportedLngs = ["en"] as const;
export const defaultLng = "en";

export type SupportedLng = (typeof supportedLngs)[number];

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLng,
  fallbackLng: defaultLng,
  defaultNS,
  supportedLngs: [...supportedLngs],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
