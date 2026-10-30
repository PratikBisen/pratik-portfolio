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
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface SkillGroup {
  category: string;
  description?: string;
  status: 'practiced' | 'learning' | 'exploring';
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
  status: 'verified' | 'needs-verification';
}
