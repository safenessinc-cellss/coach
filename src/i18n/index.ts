import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';
import pt from './locales/pt.json';
import it from './locales/it.json';  // 👈 AGREGAR ESTA LÍNEA

const resources = {
  es: { translation: es },
  en: { translation: en },
  pt: { translation: pt },
  it: { translation: it },  // 👈 AGREGAR ESTA LÍNEA
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'localStorage', 'cookie'],
      caches: ['localStorage'],
    },
  });

export default i18n;
