"use client";

import { useRef, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollRevealWrapper({ children, className, delay = 0 }: ScrollRevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn('scroll-reveal', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
