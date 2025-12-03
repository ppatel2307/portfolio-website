import { experience } from '../../data/experience';
import { ExperienceItem } from './ExperienceItem';

/**
 * ExperienceTimeline component.
 * Renders a vertical timeline of experience items.
 * Data sourced from experience.ts.
 */

export function ExperienceTimeline() {
  return (
    <div className="max-w-3xl">
      {experience.map((exp, index) => (
        <ExperienceItem
          key={exp.id}
          experience={exp}
          isLast={index === experience.length - 1}
        />
      ))}
    </div>
  );
}
