/**
 * Reusable Card component.
 * Provides consistent styling for card-like containers.
 * Props:
 * - children: Card content
 * - className: Additional CSS classes
 * - hover: Whether to show hover effects
 */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const baseStyles = `
    bg-white dark:bg-ink-800
    border border-ink-100 dark:border-ink-700
    rounded-2xl
    overflow-hidden
  `;

  const hoverStyles = hover
    ? `
      transition-all duration-300 ease-out
      hover:shadow-xl hover:shadow-ink-200/20 
      hover:-translate-y-1
      dark:hover:shadow-ink-900/50
    `
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

