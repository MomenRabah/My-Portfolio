import { useLanguage } from '../../lib/language-provider';
import { Timeline } from '../ui/timeline';

function Experience() {
  const { t } = useLanguage();
  const experienceData = [
    {
      title: 'Innosoft SA',
      date: '2025 - Present',
      role: 'Software Engineer',
      content: (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-justify">{t('experience1_desc')}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">{t('Projects')}</h3>
            <div className="flex flex-row flex-wrap gap-2 text-xs md:text-sm">
              <p className="bg-background/80 border-secondary text-primary rounded-lg border-1 px-4 pt-1 align-middle">
                {t('experience1_project1')}
              </p>
              <p className="bg-background/80 border-secondary text-primary rounded-lg border-1 px-4 pt-1 align-middle">
                {t('experience1_project2')}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">{t('Technologies')}</h3>
            <div className="flex flex-row flex-wrap gap-2 text-xs md:text-sm">
              <p className="bg-background/80 border-secondary text-primary rounded-lg border-1 px-4 pt-1 align-middle">
                React
              </p>
              <p className="bg-background/80 border-secondary text-primary rounded-lg border-1 px-4 pt-1 align-middle">
                Angular
              </p>
              <p className="bg-background/80 border-secondary text-primary rounded-lg border-1 px-4 pt-1 align-middle">
                TypeScript
              </p>
              <p className="bg-background/80 border-secondary text-primary rounded-lg border-1 px-4 pt-1 align-middle">
                Playwright
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Crystalat Est',
      date: '2023 - 2024',
      role: 'Marketing Assistant',
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-justify">{t('experience2_desc')}</p>
        </div>
      ),
    },
    {
      title: 'Crystalat Est',
      date: '2021 - 2023',
      role: 'Graphic Designer',
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-justify">{t('experience3_desc')}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <Timeline data={experienceData} />
    </div>
  );
}

export default Experience;
