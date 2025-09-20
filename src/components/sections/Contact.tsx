import { useLanguage } from '@/lib/language-provider';
import { motion, useInView } from 'motion/react';
import { WobbleCard } from '../ui/wobble-card';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from '@tabler/icons-react';
import { useRef } from 'react';

function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <div id="contact-section" className="mx-6 mb-20" ref={sectionRef}>
      <WobbleCard
        className="px-4 py-10 md:px-16 md:py-16"
        containerClassName="z-50 relative shadow-2xl/10 border-2 border-secondary rounded-2xl max-w-4xl w-full items-center justify-center"
      >
        <motion.div 
          className="relative z-50 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="mb-6 flex flex-col items-start justify-center gap-4 md:items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-primary text-2xl font-bold md:text-3xl">{t('contactTitle')}</h2>
            <p className="text-muted-foreground text-sm md:text-base">{t('contactSubtitle')}</p>
          </motion.div>
          <motion.div 
            className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="tel:+966542206772"
              className="border-secondary hover:border-primary group flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors sm:px-4"
            >
              <div className="bg-secondary/60 rounded-full p-3 transition-colors">
                <IconPhone className="text-primary h-6 w-6" stroke={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-regular text-muted-foreground text-xs">{t('phone')}</p>
                <p className="text-sm font-medium" dir="ltr">
                  +966 54 220 6772
                </p>
              </div>
            </a>

            <a
              href="mailto:moamenr24@gmail.com"
              className="border-secondary hover:border-primary group flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors sm:px-4"
            >
              <div className="bg-secondary/60 rounded-full p-3 transition-colors">
                <IconMail className="text-primary h-6 w-6" stroke={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-regular text-muted-foreground text-xs">{t('email')}</p>
                <p className="text-sm font-medium" dir="ltr">
                  moamenr24@gmail.com
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div 
            className="mt-8 flex flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="https://github.com/MomenRabah?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              dir="rtl"
              className="border-secondary hover:border-primary bg-secondary/50 flex items-center gap-2 rounded-lg border px-4 py-1 transition-all"
            >
              <span className="pt-1 font-medium">GitHub</span>
              <IconBrandGithub className="text-primary h-5 w-5" stroke={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/momen-rabah-16463b223/"
              target="_blank"
              rel="noopener noreferrer"
              dir="rtl"
              className="border-secondary hover:border-primary bg-secondary/50 flex items-center gap-2 rounded-lg border px-4 py-1 transition-all"
            >
              <span className="pt-1 font-medium">LinkedIn</span>
              <IconBrandLinkedin className="text-primary h-5 w-5" stroke={1.5} />
            </a>
          </motion.div>
        </motion.div>
      </WobbleCard>
    </div>
  );
}

export default Contact;
