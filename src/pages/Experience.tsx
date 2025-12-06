import { SectionWrapper } from '../components/common/SectionWrapper';
import { SectionHeader } from '../components/common/SectionHeader';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';
import { SkillsGrid } from '../components/about/SkillsGrid';

/**
 * Experience page component.
 * Displays a timeline of work experience and skills.
 * Data sourced from experience.ts.
 */

export function Experience() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and the places where I've grown as a developer."
        />
        <ExperienceTimeline />
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
