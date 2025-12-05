import { useEffect, useRef, useState } from 'react';
import { ProjectsGrid } from './ProjectsGrid';

/**
 * ProjectsSection component.
 * Full projects section for single-page layout.
 * Includes scroll-triggered animations.
 */

export function ProjectsSection() {
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
      className="py-24 md:py-32"
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
            <span className="font-mono text-accent dark:text-accent-light text-sm">02.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-800 dark:text-cream-50">
              Projects
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-ink-200 dark:bg-ink-700 max-w-xs" />
          </div>
          <p className="text-ink-500 dark:text-ink-400 text-lg max-w-2xl mb-12">
            A selection of projects I've worked on. Each one taught me something new.
          </p>
        </div>

        {/* Projects grid */}
        <div
          className={`
            transition-all duration-700 delay-200 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <ProjectsGrid />
        </div>
      </div>
    </div>
  );
}



