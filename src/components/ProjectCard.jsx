import { useTranslation } from 'react-i18next';

function ProjectCard({ project }) {
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img src={project.thumbnail} alt={t(project.titleKey)} />
        <div className="image-overlay">
          <h3>{t(project.titleKey)}</h3>
        </div>
      </div>
      <h3>{t(project.titleKey)}</h3>
      <p>{t(project.descriptionKey)}</p>
      <p><strong>{t('projects.technologies')}:</strong> {project.technologies.join(', ')}</p>
      <ul>
        {project.features.map((featureKey) => (
          <li key={featureKey}>{t(`projects.${project.id}.features.${featureKey}`)}</li>
        ))}
      </ul>
      <ul>
        {project.challenges.map((challengeKey) => (
          <li key={challengeKey}>{t(`projects.${project.id}.challenges.${challengeKey}`)}</li>
        ))}
      </ul>
      <div className="links">
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">{t('projects.demo')}</a>}
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">{t('projects.repository')}</a>}
      </div>
    </div>
  );
}

export default ProjectCard;