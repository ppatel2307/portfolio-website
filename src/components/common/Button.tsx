import { Link } from 'react-router-dom';

/**
 * Reusable Button component.
 * Supports both button and link variants.
 * Props:
 * - variant: 'primary' | 'secondary' | 'ghost'
 * - to: (optional) If provided, renders as a React Router Link
 * - href: (optional) If provided, renders as an anchor tag
 * - onClick: (optional) Click handler for button variant
 * - children: Button content
 */

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  to,
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-lg font-medium
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-ink-700 text-cream-50 
      hover:bg-ink-600 hover:shadow-lg hover:-translate-y-0.5
      focus:ring-ink-500
      dark:bg-cream-100 dark:text-ink-800
      dark:hover:bg-cream-200
      dark:focus:ring-cream-300
    `,
    secondary: `
      bg-transparent text-ink-700 
      border-2 border-ink-300
      hover:border-ink-500 hover:bg-ink-50
      focus:ring-ink-300
      dark:text-cream-100 dark:border-ink-500
      dark:hover:border-cream-300 dark:hover:bg-ink-800
    `,
    ghost: `
      bg-transparent text-ink-600
      hover:text-ink-800 hover:bg-ink-100
      focus:ring-ink-200
      dark:text-cream-200
      dark:hover:text-cream-50 dark:hover:bg-ink-800
    `,
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  // Render as React Router Link
  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  // Render as external anchor
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}

