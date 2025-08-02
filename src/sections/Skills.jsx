import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();
  const skills = {
    technical: [
      'technical.react',
      'technical.flask',
      'technical.python',
      'technical.sqlite',
      'technical.pandas',
      'technical.numpy',
      'technical.tailwind',
      'technical.i18next',
      'technical.web_speech',
      'technical.google_apis',
    ],
    soft: [
      'soft.problem_solving',
      'soft.resourcefulness',
      'soft.project_management',
      'soft.documentation',
    ],
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-orange-500">
        {t('skills.title')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="skill-card bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow-[0_2px_4px_rgba(0,0,0,0.06),inset_0_0_8px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
            {t('skills.technical')}
          </h2>
          <div className="skill-list flex flex-wrap gap-4 justify-center">
            {skills.technical.map((key) => (
              <span
                key={key}
                className="skill-chip bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-100 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 dark:border-gray-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:border-orange-500 hover:text-white hover:scale-105 transition-all duration-200"
              >
                {t(`skills.${key}`)}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-card bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow-[0_2px_4px_rgba(0,0,0,0.06),inset_0_0_8px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
            {t('skills.soft')}
          </h2>
          <div className="skill-list flex flex-wrap gap-4 justify-center">
            {skills.soft.map((key) => (
              <span
                key={key}
                className="skill-chip bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-100 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 dark:border-gray-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:border-orange-500 hover:text-white hover:scale-105 transition-all duration-200"
              >
                {t(`skills.${key}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;