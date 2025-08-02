import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function Portfolio() {
  const { t } = useTranslation();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="portfolio-main">
      <section id='home' ref={(el) => (sectionRefs.current[0] = el)} className="portfolio-section home">
        <Home />
      </section>
      <svg className="section-divider" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C240 20 480 40 720 20C960 0 1200 40 1440 20V60H0Z" fill="#E5E7EB" />
      </svg>
      <section id='projects' ref={(el) => (sectionRefs.current[1] = el)} className="portfolio-section projects">
        <Projects />
      </section>
      <svg className="section-divider" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C240 20 480 40 720 20C960 0 1200 40 1440 20V60H0Z" fill="#E5E7EB" />
      </svg>
      <section id='skills' ref={(el) => (sectionRefs.current[2] = el)} className="portfolio-section skills">
        <Skills />
      </section>
      <svg className="section-divider" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C240 20 480 40 720 20C960 0 1200 40 1440 20V60H0Z" fill="#E5E7EB" />
      </svg>
      <section ref={(el) => (sectionRefs.current[3] = el)} className="portfolio-section resume">
        <Resume />
      </section>
      <svg className="section-divider" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C240 20 480 40 720 20C960 0 1200 40 1440 20V60H0Z" fill="#E5E7EB" />
      </svg>
      <section ref={(el) => (sectionRefs.current[4] = el)} className="portfolio-section contact">
        <Contact />
      </section>
    </main>
  );
}

export default Portfolio;