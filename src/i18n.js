import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const availableLanguages = ["en", "hi", "ru", "chi"];

const options = {
  order: ["navigator", "htmlTag", "path", "subdomain"],
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",  
    fallbackNS: "translation",  
    debug: true,
    whitelist: availableLanguages,
    detection: options,  
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
