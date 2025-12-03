import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

/**
 * ProjectsGrid component.
 * Renders a grid of ProjectCard components.
 * Data sourced from projects.ts.
 */

export function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
