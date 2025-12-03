import { skills } from '../../data/personalInfo';
import { Skill } from '../../types';

/**
 * SkillsGrid component.
 * Displays skills grouped by category.
 * Data sourced from personalInfo.ts (skills array).
 */

export function SkillsGrid() {
  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<Skill['category'], Skill[]>
  );

  const categoryOrder: Skill['category'][] = [
    'Languages',
    'Frameworks',
    'Tools',
    'Libraries',
    'Other',
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {categoryOrder.map((category) => {
        const categorySkills = groupedSkills[category];
        if (!categorySkills || categorySkills.length === 0) return null;

        return (
          <div key={category}>
            <h4
              className="
                font-display text-lg font-semibold
                text-ink-700 dark:text-cream-100
                mb-4
                flex items-center gap-2
              "
            >
              <span
                className="
                  w-2 h-2 rounded-full
                  bg-accent dark:bg-accent-light
                "
              />
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <span
                  key={skill.name}
                  className="
                    px-3 py-1.5
                    text-sm font-medium
                    bg-ink-100 dark:bg-ink-700
                    text-ink-600 dark:text-ink-300
                    rounded-lg
                    hover:bg-ink-200 dark:hover:bg-ink-600
                    transition-colors duration-200
                  "
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

