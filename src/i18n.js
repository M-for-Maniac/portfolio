import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './data/translations/en.json';
import fa from './data/translations/fa.json';
import ar from './data/translations/ar.json';

const resources = {
  en: { translation: en },
  fa: { translation: fa },
  ar: { translation: ar },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    debug: true, // Enable debug for translation issues
  })
  .then(() => {
    console.log('i18next initialized successfully');
  })
  .catch((error) => {
    console.error('i18next initialization failed:', error);
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' || lng === 'fa' ? 'rtl' : 'ltr';
  localStorage.setItem('i18nextLng', lng);
});

document.documentElement.dir = i18n.language === 'ar' || i18n.language === 'fa' ? 'rtl' : 'ltr';

export default i18n;