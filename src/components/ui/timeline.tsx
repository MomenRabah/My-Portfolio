'use client';
import { useMotionValueEvent, useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../lib/language-provider';

interface TimelineEntry {
  title: string;
  date: string;
  role: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="relative z-50 flex w-full max-w-4xl flex-col gap-16" ref={containerRef}>
      <div className="flex flex-col items-start justify-center px-8 text-start md:items-center md:px-8 md:text-center lg:px-10">
        <h2 className="text-primary mb-4 text-2xl font-bold md:text-4xl">{t('experienceTitle')}</h2>
        <p className="text-muted-foreground md:text-lx text-lg">{t('experienceDescription')}</p>
      </div>

      <div ref={ref} className="relative flex flex-col gap-18">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start md:gap-10">
            <div className="sticky top-40 z-40 mt-16 flex max-w-3xs flex-col items-center self-start ps-20 md:mt-0 md:w-full ltr:justify-start md:ltr:flex-row rtl:justify-end md:rtl:flex-row-reverse">
              <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white ltr:left-3 rtl:right-3 dark:bg-black">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <div className="hidden flex-col gap-2 md:flex">
                <h3 className="text-primary text-xl font-bold md:text-xl">{item.title}</h3>
                <p className="text-primary font-medium">{item.role}</p>
                <p className="font-regular text-muted-foreground text-sm">{item.date}</p>
              </div>
            </div>

            <div className="relative flex w-full flex-col gap-4 pe-10">
              <div className="flex flex-col gap-2 md:hidden">
                <h3 className="text-primary text-xl font-bold md:text-xl">{item.title}</h3>
                <p className="text-primary font-medium">{item.role}</p>
                <p className="font-regular text-muted-foreground text-sm">{item.date}</p>
              </div>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ltr:left-8 rtl:right-8 dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="from-secondary via-primary absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[0%] via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
