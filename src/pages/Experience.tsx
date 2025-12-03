import { SectionWrapper } from '../components/common/SectionWrapper';
import { SectionHeader } from '../components/common/SectionHeader';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';

/**
 * Experience page component.
 * Displays a timeline of work experience and education.
 * Data sourced from experience.ts.
 */

export function Experience() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Experience"
        subtitle="My professional journey and the places where I've grown as a developer."
      />
      <ExperienceTimeline />
    </SectionWrapper>
  );
}
