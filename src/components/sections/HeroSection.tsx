import { useLanguage } from '../../lib/language-provider';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-50px' });
  
  const scrollContactSection = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="my-20 flex h-[380px] items-center justify-center" ref={sectionRef}>
      <div className="relative z-20 mt-16">
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-start sm:text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-foreground text-2xl leading-tight font-bold sm:text-3xl md:text-4xl">
            {t('heroTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-muted-foreground text-lg md:text-xl">{t('heroSubtitle')}</motion.p>
        </div>
        <div className="flex max-w-4xl flex-row justify-start gap-6 px-6 py-6 text-lg sm:justify-center">
          <motion.button
            onClick={scrollContactSection}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg px-8 py-1 align-middle font-medium transition-colors"
          >
            <p className="pt-1">{t('contactTitle')}</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
