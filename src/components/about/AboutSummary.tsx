import { personalInfo } from '../../data/personalInfo';

/**
 * AboutSummary component.
 * Displays the user's bio and location info.
 * Data sourced from personalInfo.ts.
 */

export function AboutSummary() {
  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {/* Avatar placeholder */}
      <div className="md:col-span-1 flex justify-center md:justify-start">
        <div
          className="
            w-48 h-48 md:w-full md:h-auto md:aspect-square
            rounded-2xl
            bg-gradient-to-br from-accent/20 to-accent/5
            dark:from-accent/30 dark:to-accent/10
            flex items-center justify-center
            border-2 border-accent/20
          "
        >
          {personalInfo.avatarUrl ? (
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <span className="font-display text-6xl text-accent/40">
              {personalInfo.name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Bio content */}
      <div className="md:col-span-2">
        <h3
          className="
            font-display text-2xl font-bold
            text-ink-800 dark:text-cream-50
            mb-4
          "
        >
          A bit about me
        </h3>
        
        <div
          className="
            text-ink-600 dark:text-ink-300
            leading-relaxed
            space-y-4
          "
        >
          {personalInfo.shortBio.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>

        {/* Location badge */}
        <div className="mt-6 flex items-center gap-2 text-ink-500 dark:text-ink-400">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{personalInfo.location}</span>
        </div>
      </div>
    </div>
  );
}

