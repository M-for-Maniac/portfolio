export const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${sectionId}`);
  }
};