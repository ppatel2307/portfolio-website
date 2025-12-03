import { Button } from '../common/Button';
import { personalInfo } from '../../data/personalInfo';

/**
 * Hero component for the Home page.
 * Displays name, headline, tagline, and CTA buttons.
 * Data sourced from personalInfo.ts.
 */

export function Hero() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
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
                font-display text-4xl sm:text-5xl md:text-6xl
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
                max-w-xl
                leading-relaxed
                mb-10
                opacity-0 animate-slide-up animation-delay-300
              "
            >
              I build things for the web and beyond. Passionate about creating
              elegant solutions to complex problems.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                flex flex-wrap gap-4
                opacity-0 animate-slide-up animation-delay-400
              "
            >
              <Button to="/projects" variant="primary">
                View Projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button to="/contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="
                relative
                opacity-0 animate-fade-in animation-delay-200
              "
            >
              {/* Decorative border */}
              <div
                className="
                  absolute -inset-4
                  bg-gradient-to-br from-accent/20 via-accent/10 to-transparent
                  rounded-2xl
                  blur-sm
                "
              />
              {/* Image container */}
              <div
                className="
                  relative
                  w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
                  rounded-2xl
                  overflow-hidden
                  border-2 border-ink-100 dark:border-ink-700
                  shadow-2xl shadow-ink-200/30 dark:shadow-ink-900/50
                "
              >
                <img
                  src="/images/home.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent decoration */}
              <div
                className="
                  absolute -bottom-3 -right-3
                  w-24 h-24
                  bg-accent/20 dark:bg-accent/30
                  rounded-full
                  blur-2xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
