import { SectionWrapper } from '../components/common/SectionWrapper';
import { AboutSummary } from '../components/about/AboutSummary';
import { MyStory } from '../components/about/MyStory';

/**
 * About page component.
 * Displays personal bio and story.
 * Data sourced from personalInfo.ts.
 */

export function About() {
  return (
    <>
      {/* Bio & Story Intro Section */}
      <SectionWrapper>
        <AboutSummary />
      </SectionWrapper>

      {/* My Story Details Section */}
      <SectionWrapper variant="alternate">
        <MyStory />
      </SectionWrapper>
    </>
  );
}
