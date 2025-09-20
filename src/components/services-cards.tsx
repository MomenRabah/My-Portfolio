import { useLanguage } from '@/lib/language-provider';
import { cn } from '@/lib/utils';
import { IconBrain, IconDeviceDesktop, IconTestPipe, IconTerminal2 } from '@tabler/icons-react';
import { motion } from 'motion/react';

interface ServicesCardsProps {
  sectionInView?: boolean;
}

export default function ServicesCards({ sectionInView = true }: ServicesCardsProps) {
  const { t } = useLanguage();
  const features = [
    {
      title: t('ServiceTitle1'),
      description: t('ServiceDisc1'),
      icon: <IconTerminal2 className="h-8 w-8" stroke={1.5} />,
    },
    {
      title: t('ServiceTitle2'),
      description: t('ServiceDisc2'),
      icon: <IconDeviceDesktop className="h-8 w-8" stroke={1.5} />,
    },
    {
      title: t('ServiceTitle3'),
      description: t('ServiceDisc3'),
      icon: <IconTestPipe className="h-8 w-8" stroke={1.5} />,
    },
    {
      title: t('ServiceTitle4'),
      description: t('ServiceDisc4'),
      icon: <IconBrain className="h-8 w-8" stroke={1.5} />,
    },
  ];
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature 
          key={feature.title} 
          {...feature} 
          index={index} 
          sectionInView={sectionInView} 
          delay={0.2 + index * 0.1} 
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  sectionInView,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  sectionInView?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      className={cn(
        'group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay || 0.2 }}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-black dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-justify text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </motion.div>
  );
};
