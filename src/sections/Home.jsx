import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../utils/scroll';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-8">
      <img
        src="./assets/images/profile.jpg"
        alt={t('home.profile_alt')}
        className="w-40 h-40 rounded-full mb-6 border-4 border-orange-500 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
      />
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
        {t('home.title')}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6 text-center">
        {t('home.description')}
      </p>
      <a
        href="#projects"
        onClick={(e) => scrollToSection(e, 'projects')}
        className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-md hover:from-orange-600 hover:to-orange-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
      >
        {t('home.cta')}
      </a>
    </div>
  );
}

export default Home;