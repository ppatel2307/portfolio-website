/**
 * TypeScript interfaces for data types used across the portfolio.
 * Import these types wherever you need type-safe data structures.
 */

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name or component reference
}

export interface PersonalInfo {
  name: string;
  headline: string;
  shortBio: string;
  location: string;
  email: string;
  avatarUrl?: string;
  socialLinks: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string; // Use "Present" for current positions
  bullets: string[];
  companyUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Libraries' | 'Other';
}

export interface HighlightStat {
  value: string;
  label: string;
}

