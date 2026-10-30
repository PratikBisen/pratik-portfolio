/**
 * portfolio.ts
 * Type definitions for Pratik Bisen's portfolio.
 */

export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  ariaLabel: string;
}

export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  institution: string;
  degree: string;
  branch: string;
  gradYear: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export type SkillProficiency = 'comfortable' | 'learning' | 'exploring';

export interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
  icon?: string;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
  keyFeatures: string[];
  status: 'verified';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  category: string;
  period: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface RepositoryItem {
  name: string;
  description: string;
  language: string;
  htmlUrl: string;
  demoUrl?: string;
  stars?: number;
  forks?: number;
  role: string;
  updatedAt?: string;
}

export interface EducationData {
  institution: string;
  degree: string;
  branch: string;
  expectedGraduation: string;
  location: string;
  curriculum: string[];
  highlights: string[];
}

