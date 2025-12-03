/**
 * SectionHeader component.
 * Displays a section title with optional subtitle.
 * Used at the top of page sections for consistent styling.
 * Props:
 * - title: Main heading text
 * - subtitle: (optional) Descriptive text below the title
 * - centered: (optional) Whether to center the text
 */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className="
          font-display text-3xl md:text-4xl font-bold
          text-ink-800 dark:text-cream-50
          mb-4
        "
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="
            text-lg text-ink-500 dark:text-ink-300
            max-w-2xl
            leading-relaxed
          "
          style={centered ? { margin: '0 auto' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

