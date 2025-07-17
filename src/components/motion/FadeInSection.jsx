'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function FadeInSection({
  children,
  className,
  delay = 0,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => el && observer.unobserve(el);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out transform',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
}
