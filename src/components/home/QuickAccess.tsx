import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ResumeModal } from './ResumeModal';

/**
 * QuickAccess component for the Home page.
 * Provides quick navigation cards to different sections of the portfolio.
 */

interface QuickLinkProps {
  to?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: string;
}

function QuickLink({ to, onClick, icon, title, description, color, delay }: QuickLinkProps) {
  const content = (
    <>
      {/* Icon */}
      <div
        className={`
          w-14 h-14 rounded-xl
          flex items-center justify-center
          ${color}
          mb-4
          group-hover:scale-110
          transition-transform duration-300
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          font-display text-xl font-bold
          text-ink-800 dark:text-cream-50
          mb-2
          group-hover:text-accent dark:group-hover:text-accent-light
          transition-colors duration-200
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-sm text-ink-500 dark:text-ink-400
          leading-relaxed
        "
      >
        {description}
      </p>

      {/* Arrow indicator */}
      <div
        className="
          mt-4 flex items-center gap-2
          text-accent dark:text-accent-light
          text-sm font-medium
          opacity-0 group-hover:opacity-100
          translate-x-0 group-hover:translate-x-1
          transition-all duration-300
        "
      >
        <span>Explore</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </>
  );

  const className = `
    group
    relative
    bg-white dark:bg-ink-800
    border border-ink-100 dark:border-ink-700
    rounded-2xl
    p-6
    cursor-pointer
    transition-all duration-300
    hover:shadow-xl hover:shadow-ink-200/30 dark:hover:shadow-ink-900/50
    hover:border-accent/30 dark:hover:border-accent/30
    hover:-translate-y-1
    opacity-0 animate-slide-up ${delay}
  `;

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${className} text-left w-full`}>
      {content}
    </button>
  );
}

export function QuickAccess() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const quickLinks = [
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: 'Resume',
      description: 'View my qualifications, skills, and professional experience at a glance.',
      color: 'bg-gradient-to-br from-accent to-accent-dark',
      onClick: () => setIsResumeOpen(true),
    },
    {
      to: '/about',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: 'About Me',
      description: 'Get to know me beyond my resume — my story, passions, and what drives me.',
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    },
    {
      to: '/projects',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      title: 'Projects',
      description: 'Explore the apps, tools, and systems I\'ve built from concept to deployment.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      to: '/experience',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      title: 'Experience',
      description: 'See where I\'ve worked and the impact I\'ve made in real-world roles.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      to: '/contact',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: 'Contact',
      description: 'Let\'s connect! Reach out for opportunities, questions, or just to say hello.',
      color: 'bg-gradient-to-br from-rose-500 to-rose-600',
    },
  ];

  const delays = ['animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400', 'animation-delay-500'];

  return (
    <>
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 opacity-0 animate-fade-in">
            <h2
              className="
                font-display text-2xl md:text-3xl font-bold
                text-ink-800 dark:text-cream-50
              "
            >
              Jump straight to what you're looking for
            </h2>
          </div>

          {/* Quick Links Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <QuickLink
                key={link.title}
                to={link.to}
                onClick={link.onClick}
                icon={link.icon}
                title={link.title}
                description={link.description}
                color={link.color}
                delay={delays[index]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}

