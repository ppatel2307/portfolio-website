/**
 * SectionWrapper component.
 * Provides consistent padding, max-width, and optional background variants.
 * Wrap page sections in this component for uniform layout.
 * Props:
 * - children: Section content
 * - className: Additional CSS classes
 * - variant: 'default' | 'alternate' for background variations
 * - id: (optional) Section ID for anchor links
 */

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alternate';
  id?: string;
}

export function SectionWrapper({
  children,
  className = '',
  variant = 'default',
  id,
}: SectionWrapperProps) {
  const baseStyles = 'py-16 md:py-24';
  
  const variants = {
    default: 'bg-transparent',
    alternate: 'bg-cream-100/50 dark:bg-ink-800/50',
  };

  return (
    <section id={id} className={`${baseStyles} ${variants[variant]} ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

