import { useState } from 'react';
import { Project } from '../../types';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

/**
 * ProjectCard component.
 * Displays a single project with title, description, tech stack, and links.
 * Features expandable details section for project description.
 * Props:
 * - project: Project data object
 */

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-6 flex flex-col h-full">
      {/* Project image placeholder */}
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-40 object-fill rounded-lg mb-4"
        />
      ) : (
        <div
          className="
            w-full h-40
            bg-gradient-to-br from-ink-100 to-ink-50
            dark:from-ink-700 dark:to-ink-800
            rounded-lg mb-4
            flex items-center justify-center
          "
        >
          <svg
            className="w-12 h-12 text-ink-300 dark:text-ink-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
        </div>
      )}

      {/* Featured badge */}
      {project.featured && (
        <span
          className="
            inline-flex self-start
            px-2 py-0.5 mb-3
            text-xs font-medium
            bg-accent/10 text-accent
            dark:bg-accent/20 dark:text-accent-light
            rounded-full
          "
        >
          Featured
        </span>
      )}

      {/* Title */}
      <h3
        className="
          font-display text-xl font-bold
          text-ink-800 dark:text-cream-50
          mb-2
        "
      >
        {project.title}
      </h3>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="
              px-2 py-1
              text-xs font-mono
              bg-ink-100 dark:bg-ink-700
              text-ink-500 dark:text-ink-400
              rounded
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="
          w-full
          flex items-center justify-between
          py-2 px-3
          bg-ink-50 dark:bg-ink-700/50
          hover:bg-ink-100 dark:hover:bg-ink-700
          rounded-lg
          text-sm font-medium
          text-ink-600 dark:text-ink-300
          transition-all duration-200
          group
        "
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-accent dark:text-accent-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {isExpanded ? 'Hide Details' : 'View Project Details'}
        </span>
        <svg
          className={`
            w-5 h-5
            text-ink-400 dark:text-ink-500
            transition-transform duration-300
            ${isExpanded ? 'rotate-180' : ''}
          `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable Description */}
      <div
        className={`
          overflow-hidden
          transition-all duration-300 ease-out
          ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="border-t border-ink-100 dark:border-ink-700 pt-4">
          <p
            className="
              text-ink-600 dark:text-ink-400
              text-sm leading-relaxed
            "
          >
            {project.description}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-auto pt-4">
        {project.link && (
          <Button href={project.link} variant="primary" className="text-sm py-2 px-4">
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </Button>
        )}
        {project.github && (
          <Button href={project.github} variant="ghost" className="text-sm py-2 px-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </Button>
        )}
      </div>
    </Card>
  );
}
