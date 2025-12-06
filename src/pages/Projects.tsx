import { SectionWrapper } from '../components/common/SectionWrapper';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectsGrid } from '../components/projects/ProjectsGrid';
import { SkillsGrid } from '../components/about/SkillsGrid';

/**
 * Projects page component.
 * Displays a grid of project cards and skills.
 * Data sourced from projects.ts.
 */

export function Projects() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader
          title="Projects"
          subtitle="A selection of projects I've worked on. Each one taught me something new."
        />
        <ProjectsGrid />
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper variant="alternate">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with on a regular basis."
        />
        <SkillsGrid />
      </SectionWrapper>
    </>
  );
}
