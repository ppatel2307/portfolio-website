import { PersonalInfo, Skill, HighlightStat } from '../types';

/**
 * Personal information configuration.
 * Edit this file to update your name, bio, contact info, and social links.
 * Used by: Hero, AboutSummary, ContactLinks, Footer
 */
export const personalInfo: PersonalInfo = {
  name: 'Poojan Patel',
  
  headline: 'CS Student & Software Engineer',
  
  shortBio: `I'm a Computer Science student at the University of Maryland, College Park, 
with a minor in Science, Technology, Ethics,and Society(STEP). My passion lies at the intersection of software 
engineering and robotics — I love building systems that interact with the physical world 
in meaningful ways.

From developing embodied AI companions to architecting cloud-based solutions, I thrive on 
creating elegant solutions to complex problems. When I'm not coding, you can find me 
exploring new technologies, mentoring the next generation of engineers, or tinkering 
with hardware projects.`,
  
  location: 'Ellicott City, MD',
  
  email: 'ppatel00@terpmail.umd.edu',
  
  avatarUrl: '/images/abtme.jpeg',
  
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/ppatel00',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/ppatel00',
      icon: 'linkedin',
    },
  ],
};

/**
 * Skills grouped by category.
 * Edit this array to update your skills displayed on the About page.
 */
export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'C/C++', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'HTML/CSS', category: 'Languages' },
  { name: 'OCaml', category: 'Languages' },
  { name: 'Rust', category: 'Languages' },
  
  // Frameworks & Tools
  { name: 'Git', category: 'Frameworks' },
  { name: 'ReactJS', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'Express.js', category: 'Frameworks' },
  { name: 'ROS2', category: 'Frameworks' },
  { name: 'Firebase', category: 'Frameworks' },
  { name: 'MongoDB', category: 'Frameworks' },
  { name: 'Vim', category: 'Tools' },
  
  // Libraries
  { name: 'pandas', category: 'Libraries' },
  { name: 'NumPy', category: 'Libraries' },
  { name: 'Matplotlib', category: 'Libraries' },
  { name: 'OpenCV', category: 'Libraries' },
  { name: 'Dask', category: 'Libraries' },
];

/**
 * Highlight statistics for the home page.
 * Edit these to showcase your key achievements/stats.
 */
export const highlightStats: HighlightStat[] = [
  { value: '2+', label: 'Years of Experience' },
  { value: '3+', label: 'Internships' },
  { value: '8+', label: 'Languages' },
  { value: 'May 2026', label: 'Expected Graduation' },
];
