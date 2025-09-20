import profile from '../../assets/profile.jpg';
import { useLanguage } from '../../lib/language-provider';
import { motion, useInView } from 'motion/react';
import { ContainerTextFlip } from '../ui/container-text-flip';
import { WobbleCard } from '../ui/wobble-card';
import { useRef } from 'react';

function AboutMe() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <div className="mx-6" ref={sectionRef}>
      <WobbleCard
        className="px-2 py-10 md:px-16 md:py-16"
        containerClassName="z-50 relative shadow-2xl/10 border-2 border-secondary flex flex-col rounded-2xl max-w-4xl w-full items-center"
      >
        <div className="mb-8 flex w-full flex-row justify-between px-4">
          <motion.div 
            className="flex flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img className="h-16 w-16 rounded-3xl" src={profile} alt="profile" />
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold">{t('aboutMeTitle')}</h2>
              <p className="text-muted-foreground text-sm md:text-base">{t('aboutMeSubtitle')}</p>
            </div>
          </motion.div>
          <p className="text-muted-foreground hidden text-base font-medium sm:block">2025</p>
        </div>
        <motion.div 
          className="group flex flex-col px-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-justify text-base">
            <span>{t('aboutMeDesc1')}</span>

            <ContainerTextFlip
              words={['code', 'رمــازاً']}
              className="text-primary dark:text-primary inline-flex items-center bg-transparent px-2 py-1 text-lg font-semibold dark:bg-transparent"
            />

            <span>{t('aboutMeDesc2')}</span>
          </p>
        </motion.div>
      </WobbleCard>
    </div>
  );
}

export default AboutMe;
