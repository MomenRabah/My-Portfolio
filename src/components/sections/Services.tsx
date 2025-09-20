import { useLanguage } from '@/lib/language-provider';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import ServicesCards from '../services-cards';

function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <div className="relative z-20 mt-16" ref={sectionRef}>
      <motion.div 
        className="flex flex-col items-start justify-center px-8 text-start md:items-center md:px-8 md:text-center lg:px-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-primary mb-4 text-2xl font-bold md:text-4xl">{t('servicesTitle')}</h2>
        <p className="text-muted-foreground md:text-lx text-lg">{t('servicesDescription')}</p>
      </motion.div>
      <ServicesCards sectionInView={isInView} />
    </div>
  );
}

export default Services;
