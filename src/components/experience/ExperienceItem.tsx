import { ExperienceItem as ExperienceItemType } from '../../types';

/**
 * ExperienceItem component.
 * Displays a single experience entry in the timeline.
 * Props:
 * - experience: ExperienceItem data object
 * - isLast: Whether this is the last item (hides connecting line)
 */

interface ExperienceItemProps {
  experience: ExperienceItemType;
  isLast?: boolean;
}

export function ExperienceItem({ experience, isLast = false }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="
            absolute left-[7px] top-3 bottom-0
            w-0.5
            bg-ink-200 dark:bg-ink-700
          "
        />
      )}

      {/* Timeline dot */}
      <div
        className="
          absolute left-0 top-1.5
          w-4 h-4
          rounded-full
          bg-accent dark:bg-accent-light
          border-4 border-cream-50 dark:border-ink-900
          shadow-sm
        "
      />

      {/* Content Card */}
      <div
        className="
          bg-white dark:bg-ink-800
          border border-ink-100 dark:border-ink-700
          rounded-xl
          p-5
          transition-all duration-300
          hover:shadow-lg hover:shadow-ink-200/20 dark:hover:shadow-ink-900/30
        "
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            {/* Role */}
            <h3
              className="
                font-display text-lg font-bold
                text-ink-800 dark:text-cream-50
              "
            >
              {experience.role}
            </h3>

            {/* Company and location */}
            <div className="flex items-center gap-2 mt-1">
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-ink-600 dark:text-ink-300
                    hover:text-accent dark:hover:text-accent-light
                    transition-colors duration-200
                    font-medium
                  "
                >
                  {experience.company}
                </a>
              ) : (
                <span className="text-ink-600 dark:text-ink-300 font-medium">
                  {experience.company}
                </span>
              )}
              <span className="text-ink-300 dark:text-ink-600">•</span>
              <span className="text-ink-500 dark:text-ink-400 text-sm">
                {experience.location}
              </span>
            </div>
          </div>

          {/* Date badge */}
          <span
            className="
              inline-flex self-start
              px-3 py-1
              text-xs font-mono font-medium
              bg-accent/10 text-accent
              dark:bg-accent/20 dark:text-accent-light
              rounded-full
              whitespace-nowrap
            "
          >
            {experience.startDate} — {experience.endDate}
          </span>
        </div>

        {/* Bullet points - always visible */}
        <div className="mt-4 border-t border-ink-100 dark:border-ink-700 pt-4">
          <ul className="space-y-3">
            {experience.bullets.map((bullet, index) => (
              <li
                key={index}
                className="
                  flex items-start gap-3
                  text-ink-600 dark:text-ink-400
                  text-sm leading-relaxed
                "
              >
                <span
                  className="
                    mt-1.5 w-1.5 h-1.5 rounded-full
                    bg-accent dark:bg-accent-light
                    flex-shrink-0
                  "
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
