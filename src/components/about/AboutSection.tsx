import { useEffect, useRef, useState } from 'react';
import { AboutSummary } from './AboutSummary';
import { SkillsGrid } from './SkillsGrid';

/**
 * AboutSection component.
 * Full about section with bio and skills for single-page layout.
 * Includes scroll-triggered animations.
 */

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream-100/50 dark:bg-ink-800/30"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent dark:text-accent-light text-sm">01.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-800 dark:text-cream-50">
              About Me
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-ink-200 dark:bg-ink-700 max-w-xs" />
          </div>
          <p className="text-ink-500 dark:text-ink-400 text-lg max-w-2xl mb-12">
            Get to know a little more about who I am and what I do.
          </p>
        </div>

        {/* Bio */}
        <div
          className={`
            mb-20
            transition-all duration-700 delay-200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <AboutSummary />
        </div>

        {/* Skills */}
        <div
          className={`
            transition-all duration-700 delay-400 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h3 className="font-display text-2xl font-bold text-ink-800 dark:text-cream-50 mb-8">
            Skills & Technologies
          </h3>
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
}

