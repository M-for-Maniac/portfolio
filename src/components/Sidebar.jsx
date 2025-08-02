import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { scrollToSection } from '../utils/scroll';

function Sidebar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(window.location.hash || '#home');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'resume', label: t('nav.resume') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(e, sectionId);
    setActiveSection(`#${sectionId}`);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="burger-toggle fixed top-4 left-4 z-[1100] text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-600 px-2 py-1 text-xl rounded-lg hover:scale-110 transition-transform duration-300 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('nav.toggle')}
      >
        ☰
      </button>
      <nav className={`sidebar fixed top-0 left-0 w-64 h-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-6 z-[1000] transition-transform duration-300 ${isOpen ? 'open translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <button
          className="sidebar-close text-2xl bg-none border-none text-gray-800 dark:text-gray-100 cursor-pointer mb-6 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label={t('nav.close')}
        >
          ✕
        </button>
        <ul className="flex flex-col justify-center flex-1 gap-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-base font-medium text-gray-800 dark:text-gray-100 py-3 px-4 rounded-lg no-underline hover:bg-green-700 dark:hover:bg-orange-500 hover:text-white transition-all duration-300 ${activeSection === `#${item.id}` ? 'bg-green-700 dark:bg-orange-500 text-white' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 mt-4">
          <button
            className="dark-mode-toggle bg-none border-none text-gray-800 dark:text-gray-100 text-xl cursor-pointer p-3 rounded-lg hover:scale-110 transition-transform duration-300"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️ ' : '🌙 '}
           | theme
          </button>
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
}

export default Sidebar;