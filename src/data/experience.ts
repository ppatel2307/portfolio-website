import { ExperienceItem } from '../types';

/**
 * Experience/work history data configuration.
 * Add, edit, or remove experience items by modifying this array.
 * Used by: ExperienceTimeline, ExperienceItem
 */
export const experience: ExperienceItem[] = [
  {
    id: 'adci-intern',
    role: 'Software & Project Management Intern',
    company: 'ADCI',
    location: 'Ellicott City, MD',
    startDate: 'Jun 2025',
    endDate: 'Aug 2025',
    bullets: [
      'Moved confidential operational documentation from hard-drive storage to a secure Firebase cloud platform, reducing office-return trips and saving onsite engineers approximately 2 hours per day',
      'Engineered a secure, production-ready web application that centralized car logs, project files, and operational documentation with role-based access controls to protect sensitive company data',
      'Collaborated with stakeholders and onsite teams in Charleston (WV), Philadelphia (PA), and Baltimore (MD) to scope requirements, launch the system company-wide, and integrate the tool into daily construction project workflows',
    ],
  },
  {
    id: 'it-solutions-intern',
    role: 'Software Intern',
    company: 'IT Solutions Point Web',
    location: 'Columbia, MD',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    bullets: [
      'Organized large volumes of archived medical records by indexing them under patient IDs, enabling fast and accurate retrieval of patient information and supporting smoother clinical and administrative workflows',
      'Built scripts to automatically categorize newly generated patient data, ensuring all new records were easily searchable',
    ],
  },
  {
    id: 'robotics-instructor',
    role: 'Robotics Instructor',
    company: 'Cesar Chavez Elementary School',
    location: 'Hyattsville, MD',
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    bullets: [
      'Designed and delivered hands-on robotics curriculum for 30+ students (grades 3-5), introducing fundamental engineering and programming concepts through project-based learning',
      'Mentored students through complete robot design-build-program lifecycle, fostering collaborative problem-solving and technical skills development',
    ],
  },
];
