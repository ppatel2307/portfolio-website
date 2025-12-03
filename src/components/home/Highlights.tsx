import { highlightStats } from '../../data/personalInfo';

/**
 * Highlights component for the Home page.
 * Displays key stats/achievements in a grid.
 * Data sourced from personalInfo.ts (highlightStats).
 */

export function Highlights() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlightStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                text-center
                opacity-0 animate-slide-up
                ${index === 0 ? 'animation-delay-100' : ''}
                ${index === 1 ? 'animation-delay-200' : ''}
                ${index === 2 ? 'animation-delay-300' : ''}
                ${index === 3 ? 'animation-delay-400' : ''}
              `}
            >
              <div
                className="
                  font-display text-3xl md:text-4xl font-bold
                  text-accent dark:text-accent-light
                  mb-2
                "
              >
                {stat.value}
              </div>
              <div
                className="
                  text-sm md:text-base
                  text-ink-500 dark:text-ink-400
                  font-medium
                "
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
