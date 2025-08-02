import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projects">
      <div className="container">
        <h1>{t('projects.title')}</h1>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;