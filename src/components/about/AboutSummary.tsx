import { personalInfo } from '../../data/personalInfo';

/**
 * AboutSummary component.
 * Displays the user's photo with My Story intro.
 * Data sourced from personalInfo.ts.
 */

export function AboutSummary() {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Avatar */}
      <div className="flex justify-center md:justify-start">
        <div
          className="
            w-72 h-72 md:w-full md:max-w-md md:h-auto md:aspect-square
            rounded-2xl
            bg-gradient-to-br from-accent/20 to-accent/5
            dark:from-accent/30 dark:to-accent/10
            flex items-center justify-center
            border-2 border-accent/20
            overflow-hidden
          "
        >
          {personalInfo.avatarUrl ? (
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-display text-6xl text-accent/40">
              {personalInfo.name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Story intro content */}
      <div>
        <h3
          className="
            font-display text-3xl md:text-4xl font-bold
            text-ink-800 dark:text-cream-50
            mb-3
          "
        >
          My Story
        </h3>
        
        <p
          className="
            text-ink-500 dark:text-ink-400
            mb-6
            text-lg
          "
        >
          The experiences that shaped who I am today.
        </p>

        <p
          className="
            text-xl md:text-2xl
            text-ink-700 dark:text-ink-200
            leading-relaxed
            font-medium
          "
        >
          You want someone who can think, build, collaborate, and add to the culture. 
          So here's my story, told the way I lived it, and the traits it built along the way.
        </p>

        {/* Location badge */}
        <div className="mt-8 flex items-center gap-2 text-ink-500 dark:text-ink-400">
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
