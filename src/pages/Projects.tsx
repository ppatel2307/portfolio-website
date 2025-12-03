import { SectionWrapper } from '../components/common/SectionWrapper';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectsGrid } from '../components/projects/ProjectsGrid';

/**
 * Projects page component.
 * Displays a grid of project cards.
 * Data sourced from projects.ts.
 */

export function Projects() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Projects"
        subtitle="A selection of projects I've worked on. Each one taught me something new."
      />
      <ProjectsGrid />
    </SectionWrapper>
  );
}
