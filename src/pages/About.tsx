import { SectionWrapper } from '../components/common/SectionWrapper';
import { SectionHeader } from '../components/common/SectionHeader';
import { AboutSummary } from '../components/about/AboutSummary';
import { SkillsGrid } from '../components/about/SkillsGrid';

/**
 * About page component.
 * Displays personal bio and skills.
 * Data sourced from personalInfo.ts.
 */

export function About() {
  return (
    <>
      {/* Bio Section */}
      <SectionWrapper>
        <SectionHeader
          title="About Me"
          subtitle="Get to know a little more about who I am and what I do."
        />
        <AboutSummary />
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
