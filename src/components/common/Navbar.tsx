import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import { personalInfo } from '../../data/personalInfo';
import { ThemeToggle } from './ThemeToggle';

/**
 * Navbar component.
 * Renders navigation links from navLinks.ts data.
 * Features:
 * - Active route highlighting
 * - Mobile responsive hamburger menu
 * - Theme toggle button
 */

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-cream-50/90 dark:bg-ink-900/90
        backdrop-blur-xl
        border-b border-ink-100 dark:border-ink-800
      "
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <NavLink
            to="/"
            className="
              font-display font-bold text-xl
              text-ink-800 dark:text-cream-50
              hover:text-accent dark:hover:text-accent-light
              transition-colors duration-300
            "
            onClick={closeMobileMenu}
          >
            {personalInfo.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  relative px-4 py-2 rounded-full
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? 'text-accent dark:text-accent-light'
                      : 'text-ink-600 dark:text-ink-300 hover:text-ink-800 dark:hover:text-cream-100'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        className="
                          absolute bottom-0 left-1/2 -translate-x-1/2
                          w-1 h-1 rounded-full
                          bg-accent dark:bg-accent-light
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <div className="ml-4 pl-4 border-l border-ink-200 dark:border-ink-700">
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                text-ink-600 dark:text-cream-200
                hover:bg-ink-100 dark:hover:bg-ink-800
                transition-colors duration-300
              "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-300 ease-out
            ${isMobileMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'}
          `}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`
                  px-4 py-3 rounded-xl
                  text-base font-medium
                  transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? 'text-accent dark:text-accent-light bg-accent/10'
                      : 'text-ink-600 dark:text-ink-300 hover:text-ink-800 dark:hover:text-cream-100 hover:bg-ink-100 dark:hover:bg-ink-800'
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
