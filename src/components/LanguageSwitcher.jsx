import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <div className="language-switcher flex gap-2">
      <button
        className={`language-button p-3 rounded-lg text-xl ${i18n.language === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100'} hover:bg-orange-500 hover:text-white transition-all duration-300`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
      >
        🇬🇧
      </button>
      <button
        className={`language-button p-3 rounded-lg text-xl ${i18n.language === 'fa' ? 'bg-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100'} hover:bg-orange-500 hover:text-white transition-all duration-300`}
        onClick={() => handleLanguageChange('fa')}
        aria-label="Switch to Persian"
      >
        🇮🇷
      </button>
      <button
        className={`language-button p-3 rounded-lg text-xl ${i18n.language === 'ar' ? 'bg-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100'} hover:bg-orange-500 hover:text-white transition-all duration-300`}
        onClick={() => handleLanguageChange('ar')}
        aria-label="Switch to Arabic"
      >
        🇦🇪
      </button>
    </div>
  );
}

export default LanguageSwitcher;