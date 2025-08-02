import { useTranslation } from 'react-i18next';

function Resume() {
  const { t } = useTranslation();

  return (
    <section id="resume">
      <div className="container">
        <h1>{t('resume.title')}</h1>
        <div className="resume-card">
          <p>{t('resume.description')}</p>
          <a href="/assets/resume.pdf" download>
            {t('resume.download')}
            <span className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="download-icon"
                width="18"
                height="18"
              >
                <path d="M12 16l-6-6h12l-6 6zm0-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;