import { NavItem, ProfileData, SocialLink } from '../types/portfolio';

export const PROFILE: ProfileData = {
  name: 'Pratik Bisen',
  role: 'Information Technology Engineering Student',
  headline: 'IT engineering student building thoughtful software and practical web projects.',
  location: 'Nanded, India',
  email: 'pratikbisen982@gmail.com',
  github: 'https://github.com/PratikBisen',
  linkedin: 'https://www.linkedin.com/in/pratikbisen/',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/PratikBisen',
    ariaLabel: 'Visit Pratik Bisen’s GitHub profile',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pratikbisen/',
    ariaLabel: 'Connect with Pratik Bisen on LinkedIn',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:pratikbisen982@gmail.com',
    ariaLabel: 'Send an email to Pratik Bisen',
  },
];
