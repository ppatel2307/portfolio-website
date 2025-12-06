import { personalInfo } from '../../data/personalInfo';

/**
 * Hero component for the Home page.
 * Displays name, headline, and tagline centered.
 * Data sourced from personalInfo.ts.
 */

export function Hero() {
  return (
    <div className="min-h-[50vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16 w-full text-center">
        {/* Greeting */}
        <p
          className="
            text-accent dark:text-accent-light
            font-mono text-sm md:text-base
            mb-4
            opacity-0 animate-fade-in
          "
        >
          Hi, my name is
        </p>

        {/* Name */}
        <h1
          className="
            font-display text-5xl sm:text-6xl md:text-7xl
            font-bold
            text-ink-800 dark:text-cream-50
            mb-4
            opacity-0 animate-slide-up animation-delay-100
          "
        >
          {personalInfo.name}
          <span className="text-accent">.</span>
        </h1>

        {/* Headline */}
        <h2
          className="
            font-display text-xl sm:text-2xl md:text-3xl
            font-semibold
            text-ink-500 dark:text-ink-300
            mb-6
            opacity-0 animate-slide-up animation-delay-200
          "
        >
          {personalInfo.headline}
        </h2>

        {/* Short description */}
        <p
          className="
            text-lg md:text-xl
            text-ink-600 dark:text-ink-400
            max-w-2xl mx-auto
            leading-relaxed
            opacity-0 animate-slide-up animation-delay-300
          "
        >
          I build things for the web and beyond. Passionate about creating
          elegant solutions to complex problems.
        </p>
      </div>
    </div>
  );
}
