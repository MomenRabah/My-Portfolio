'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/language-provider';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote?: string;
    name?: string;
    title?: string;
    image?: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const { language } = useLanguage();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [language]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      while (scrollerRef.current.childElementCount > items.length) {
        scrollerRef.current.removeChild(scrollerRef.current.lastChild as Node);
      }

      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      const isRtl = language === 'ar';
      let animationDirection;

      if (direction === 'left') {
        animationDirection = isRtl ? 'reverse' : 'forwards';
      } else {
        animationDirection = isRtl ? 'forwards' : 'reverse';
      }

      containerRef.current.style.setProperty('--animation-direction', animationDirection);

      containerRef.current.setAttribute('data-rtl', isRtl ? 'true' : 'false');
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-full overflow-hidden',
        language === 'ar'
          ? '[mask-image:linear-gradient(to_left,transparent,white_20%,white_80%,transparent)]'
          : '[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && (language === 'ar' ? 'rtl-scroll' : 'animate-scroll'),
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className="border-secondary bg-background relative w-[120px] max-w-full shrink-0 rounded-2xl border border-b-0 px-3 py-4 sm:w-[150px] sm:px-4 sm:py-6 md:w-[180px]"
            key={item.title || item.name || idx}
          >
            {item.image ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src={item.image}
                  alt={item.title || ''}
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
                />
                {/* <span className="text-lg font-medium text-center">
                  {item.title}
                </span> */}
              </div>
            ) : (
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-xs leading-[1.6] font-normal text-neutral-800 sm:text-sm dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-xs leading-[1.6] font-normal text-neutral-500 sm:text-sm dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-xs leading-[1.6] font-normal text-neutral-500 sm:text-sm dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
