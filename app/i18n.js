/* eslint-disable import/no-unresolved */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en.json';
import ja from './lang/ja';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },
    lng: 'ja',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
