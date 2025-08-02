import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="container">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.description')}</p>
        <div className="contact-grid">
          <div className="contact-card">
            <span className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="contact-icon"
                width="24"
                height="24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </span>
            <p>{t('contact.email')}</p>
            <a href="mailto:Mehrbod.sarabi@gmail.com">Mehrbod.sarabi@gmail.com</a>
          </div>
          <div className="contact-card">
            <span className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="contact-icon"
                width="24"
                height="24"
              >
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 15.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </span>
            <p>{t('contact.linkedin')}</p>
            <a href="https://www.linkedin.com/in/mehrbod-sarabi-b172a4142/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/mehrbod-sarabi
            </a>
          </div>
          <div className="contact-card">
            <span className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="contact-icon"
                width="24"
                height="24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .2 2.7.7 2.7.7.2 0 1.6-.5 1.6-.5 2.2-1.6 2.2-3.2 2.2-3.2.7-.2 1.2-.9 1.2-1.7 0-1.2-.8-2.2-1.8-2.5.2-.2.5-.5.5-.5 1.6-.7 3.3 1.2 3.3 1.2.5 1.5 1.8 2.7 3.3 2.7.2 0 .5-.1.5-.1v3.1c0 .3.3.7.8.6C20.6 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </span>
            <p>{t('contact.github')}</p>
            <a href="https://github.com/m-for-maniac" target="_blank" rel="noopener noreferrer">
              github.com/m-for-maniac
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;