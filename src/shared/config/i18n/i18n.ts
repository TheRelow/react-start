import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationRu from "../../../../public/loacales/ru/translation.json";
import translationEn from "../../../../public/loacales/en/translation.json";

const resources = {
  ru: {
    translation: translationRu,
  },
  en: {
    translation: translationEn,
  },
};

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: __IS_DEV__,
    resources,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
