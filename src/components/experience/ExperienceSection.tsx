import { useEffect, useRef, useState } from 'react';
import { ExperienceTimeline } from './ExperienceTimeline';

/**
 * ExperienceSection component.
 * Full experience section for single-page layout.
 * Includes scroll-triggered animations.
 */

export function ExperienceSection() {
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
            <span className="font-mono text-accent dark:text-accent-light text-sm">03.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-800 dark:text-cream-50">
              Experience
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-ink-200 dark:bg-ink-700 max-w-xs" />
          </div>
          <p className="text-ink-500 dark:text-ink-400 text-lg max-w-2xl mb-12">
            My professional journey and the places where I've grown as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div
          className={`
            transition-all duration-700 delay-200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}


