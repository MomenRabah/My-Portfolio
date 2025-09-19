import { useLanguage } from '@/lib/language-provider';
import ServicesCards from '../services-cards';

function Services() {
  const { t } = useLanguage();

  return (
    <div className="relative z-20 mt-16">
      <div className="flex flex-col items-start justify-center px-8 text-start md:items-center md:px-8 md:text-center lg:px-10">
        <h2 className="text-primary mb-4 text-2xl font-bold md:text-4xl">{t('servicesTitle')}</h2>
        <p className="text-muted-foreground md:text-lx text-lg">{t('servicesDescription')}</p>
      </div>
      <ServicesCards />
    </div>
  );
}

export default Services;
