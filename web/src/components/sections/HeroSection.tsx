import { useLanguage } from '../../lib/language-provider';

const HeroSection = () => {
  const { t } = useLanguage();
  const scrollContactSection = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="my-20 flex h-[380px] items-center justify-center">
      <div className="relative z-20 mt-16">
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-start sm:text-center">
          <h1 className="text-foreground text-2xl leading-tight font-bold sm:text-3xl md:text-4xl">
            {t('heroTitle')}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">{t('heroSubtitle')}</p>
        </div>
        <div className="flex max-w-4xl flex-row justify-start gap-6 px-6 py-6 text-lg sm:justify-center">
          <button
            onClick={scrollContactSection}
            className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg px-8 py-1 align-middle font-medium transition-colors"
          >
            <p className="pt-1">{t('contactTitle')}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
