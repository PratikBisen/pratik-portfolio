import {
  EducationData,
  ExperienceItem,
  NavItem,
  ProfileData,
  ProjectItem,
  RepositoryItem,
  SkillCategory,
  SocialLink,
} from '../types/portfolio';

export const PROFILE: ProfileData = {
  name: 'Pratik Bisen',
  role: 'Information Technology Engineering Student',
  headline: 'IT engineering student building thoughtful software and practical web projects.',
  institution: 'Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T), Nanded',
  degree: 'Bachelor of Technology (B.Tech)',
  branch: 'Information Technology',
  gradYear: '2029',
  location: 'Nanded, Maharashtra, India',
  email: 'pratikbisen982@gmail.com',
  github: 'https://github.com/PratikBisen',
  linkedin: 'https://www.linkedin.com/in/pratikbisen/',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'open-source', label: 'Open Source', href: '#open-source' },
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

export const ABOUT_DATA = {
  studying:
    'Undergraduate Information Technology engineering student at Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T), Nanded (Class of 2029).',
  building:
    'Focused on solid software engineering foundations—from algorithmic problem solving in C/C++ to responsive web architectures, Linux automation, and production-minded backend systems.',
  approach:
    'Believer in hands-on building, code discipline, and active community participation. I learn by dissecting systems, understanding internal mechanics, and shipping practical projects.',
  ambition:
    'Aiming to engineer reliable, scalable software solutions while deepening expertise in high-performance distributed systems, practical AI/ML integration, and open-source ecosystems.',
  quickStats: [
    { label: 'Degree Track', value: 'B.Tech IT (2029)' },
    { label: 'Campus', value: 'SGGSIE&T, Nanded' },
    { label: 'Core Focus', value: 'DSA & Web Systems' },
    { label: 'Ecosystem', value: 'Linux & Git' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core algorithmic and system programming',
    iconName: 'Code2',
    skills: [
      { name: 'C', proficiency: 'comfortable', note: 'Systems foundation & memory basics' },
      { name: 'C++', proficiency: 'comfortable', note: 'STL, DSA & Object-Oriented patterns' },
      { name: 'Python', proficiency: 'comfortable', note: 'Scripting, backend logic & automation' },
      { name: 'JavaScript', proficiency: 'comfortable', note: 'Modern ES6+ syntax & DOM engine' },
      { name: 'TypeScript', proficiency: 'learning', note: 'Static types, interfaces & generics' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'Responsive user interfaces & web architecture',
    iconName: 'Globe',
    skills: [
      { name: 'HTML5', proficiency: 'comfortable', note: 'Semantic markup & accessibility' },
      { name: 'CSS3', proficiency: 'comfortable', note: 'Flexbox, Grid, animations & 3D transforms' },
      { name: 'JavaScript (ES6+)', proficiency: 'comfortable', note: 'Async/await, DOM & fetch APIs' },
      { name: 'React', proficiency: 'learning', note: 'Component lifecycle, hooks & state' },
      { name: 'Node.js', proficiency: 'learning', note: 'Runtime fundamentals & HTTP servers' },
    ],
  },
  {
    id: 'cs-foundations',
    title: 'Computer Science',
    subtitle: 'Algorithmic thinking & engineering foundations',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms', proficiency: 'comfortable', note: 'Arrays, linked lists, trees, graphs, sorting' },
      { name: 'Object-Oriented Programming', proficiency: 'comfortable', note: 'Encapsulation, inheritance, polymorphism' },
      { name: 'Problem Solving', proficiency: 'comfortable', note: 'Analytical decomposition & logic' },
      { name: 'Database Fundamentals', proficiency: 'comfortable', note: 'Relational schema, SQL queries & ACID properties' },
    ],
  },
  {
    id: 'toolchain',
    title: 'Development Environment',
    subtitle: 'Operating systems, version control & tools',
    iconName: 'Terminal',
    skills: [
      { name: 'Linux', proficiency: 'comfortable', note: 'Daily-driver OS, Bash CLI & file systems' },
      { name: 'Git', proficiency: 'comfortable', note: 'Branching, merging, rebasing & PR workflow' },
      { name: 'GitHub', proficiency: 'comfortable', note: 'Collaboration, issues, actions & pages' },
      { name: 'VS Code', proficiency: 'comfortable', note: 'Debugging, extensions & workspace tuning' },
    ],
  },
  {
    id: 'emerging',
    title: 'Emerging Interests',
    subtitle: 'Forward-looking explorations in intelligent systems',
    iconName: 'Sparkles',
    skills: [
      { name: 'Artificial Intelligence', proficiency: 'exploring', note: 'Agentic systems & prompt architectures' },
      { name: 'Machine Learning', proficiency: 'exploring', note: 'Model fundamentals & data pipelines' },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'commit-rush',
    title: 'HackIT-CommitRush Platform',
    tagline: 'Production Self-Healing Pipeline & Event Infrastructure',
    description:
      'Core contributor to the HackIT-CommitRush platform—a 21-day open-source contribution challenge system supporting automated PR scoring, webhook event intake, and leaderboard analytics.',
    problem:
      'High-volume concurrent GitHub webhooks caused pipeline degradation, session cookie mismatches across decoupled domains, and occasional cache desynchronization.',
    solution:
      'Engineered an automated consistency checker with reconciliation sweep, multi-channel alerting with cooldown, Redis queue configuration, Upstash TLS support, and decoupled CSRF authentication.',
    tags: ['Python', 'Django', 'Redis', 'Render', 'Vercel', 'Webhooks'],
    repoUrl: 'https://github.com/Hackit-DROID/HackIT-CommitRush',
    demoUrl: 'https://hack-it-commit-rush.vercel.app',
    image: '/projects/commit-rush.png',
    featured: true,
    keyFeatures: [
      'Self-healing pipeline with automated consistency sweep and auto-repair',
      'Multi-channel notification manager with deduplication and cooldowns',
      'Cross-origin SameSite cookie and CSRF handling for decoupled frontend',
      'RedisCache auto-detection configured for production Upstash TLS deployment',
    ],
    status: 'verified',
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Homepage Clone',
    tagline: 'Faithful Desktop & Mobile Web Client Interface',
    description:
      'A meticulous UI/UX replica of Spotify’s web player homepage engineered with pure semantic HTML5 and modern CSS3 layouts, replicating streaming interface ergonomics.',
    problem:
      'Replicating Spotify’s multi-pane layout hierarchy, sticky media playback bar, and fluid card grid without using heavy UI component libraries.',
    solution:
      'Utilized modular CSS Grid for playlist showcases, Flexbox for track navigation bars, custom scrollbars, and interactive hover elevation states.',
    tags: ['HTML5', 'CSS3', 'Responsive Design', 'UI Architecture'],
    repoUrl: 'https://github.com/PratikBisen/spotifyHomepageClone',
    demoUrl: 'https://pratikbisen.github.io/spotifyHomepageClone/',
    image: '/projects/spotify-clone.png',
    featured: false,
    keyFeatures: [
      'Multi-section layout mimicking Spotify desktop interface',
      'Persistent sticky bottom audio player interface with volume controls',
      'Fluid responsive grid adapting across mobile, tablet, and desktop',
      'Pure CSS micro-interactions and album card elevation animations',
    ],
    status: 'verified',
  },
  {
    id: 'simon-says',
    title: 'Simon Says Interactive Game',
    tagline: 'Deterministic Sequence Memory Game',
    description:
      'Interactive browser-based memory sequence game built in vanilla JavaScript, challenging players to replicate progressively complex color-and-sound sequences.',
    problem:
      'Managing escalating state sequences, preventing user input during sequence playback, and providing immediate perceptual feedback upon erroneous input.',
    solution:
      'Implemented an event-driven game loop state machine with deterministic array queues, CSS flash triggers, dynamic level counters, and high-score retention.',
    tags: ['JavaScript', 'DOM Manipulation', 'Game Loop', 'State Machine'],
    repoUrl: 'https://github.com/PratikBisen/Simon-Says-Game',
    demoUrl: 'https://pratikbisen.github.io/Simon-Says-Game/',
    image: '/projects/simon-says.png',
    featured: false,
    keyFeatures: [
      'Event-driven game state machine handling start, active, and game-over states',
      'Dynamic sequence tracking with random generator and user verification queue',
      'Visual flash animations and reactive feedback upon input',
      'Real-time level progression counter with instant restart capability',
    ],
    status: 'verified',
  },
  {
    id: 'responsive-sidebar',
    title: 'Responsive Sidebar Navigation',
    tagline: 'Pure CSS Collapsible Navigation Architecture',
    description:
      'A lightweight, responsive sidebar navigation system built with zero external dependencies, offering smooth collapsible states and clean accessibility.',
    problem:
      'Creating a zero-JavaScript collapsible navigation pattern that remains performant, accessible, and responsive across varying screen viewports.',
    solution:
      'Leveraged modern CSS checkbox hack, custom properties, and GPU-accelerated CSS transitions for seamless expand/collapse navigation.',
    tags: ['HTML5', 'CSS3', 'Pure CSS Navigation', 'Micro-Interactions'],
    repoUrl: 'https://github.com/PratikBisen/responsiveSidebar',
    demoUrl: 'https://pratikbisen.github.io/responsiveSidebar/',
    image: '/projects/responsive-sidebar.png',
    featured: false,
    keyFeatures: [
      'Pure CSS state toggling requiring zero JavaScript runtime',
      'Hardware-accelerated sliding and icon tooltip transitions',
      'Compact mobile drawer adaptation with backdrop blur',
      'Keyboard navigable and semantic navigation markup',
    ],
    status: 'verified',
  },
  {
    id: 'demo-medical',
    title: 'Demo Medical Platform',
    tagline: 'Collaborative Healthcare Records Prototype',
    description:
      'Collaborative medical platform project developed with TypeScript, exploring type-safe patient records organization and modern component hierarchy.',
    problem:
      'Structuring complex healthcare data models with strict type contracts to prevent runtime inconsistencies across multi-developer workflows.',
    solution:
      'Engineered structured TypeScript data interfaces, modular UI architecture, and robust client-side validation for clinical record views.',
    tags: ['TypeScript', 'Collaboration', 'Modular Architecture', 'Data Modeling'],
    repoUrl: 'https://github.com/PratikBisen/Demo-Medical-Project',
    featured: false,
    keyFeatures: [
      'Type-safe data contracts for patient medical records and appointments',
      'Modular component separation ready for clinic workflows',
      'Collaborative team Git branching and code review practices',
      'Clean client-side state flow and data validation',
    ],
    status: 'verified',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'itsa',
    role: 'Technical Main Coordinator',
    organization: 'ITSA (Information Technology Student Association) • SGGSIE&T',
    category: 'Departmental Leadership',
    period: '2024 – Present',
    description:
      'Lead technical coordinator responsible for conceptualizing, organizing, and delivering departmental academic workshops, student coding hackathons, and technical orientation for incoming engineering students.',
    highlights: [
      'Organized hands-on technical workshops covering programming foundations and web technologies',
      'Coordinated departmental student hackathons and competitive coding challenges',
      'Mentored junior students in Git version control and computer science coursework',
      'Collaborated with faculty and student council to plan technical events throughout the academic year',
    ],
    iconName: 'Award',
  },
  {
    id: 'hackit',
    role: 'Community Co-Lead',
    organization: 'HackIT Club (Ethical Hacking & Cyber Security Club) • SGGSIE&T',
    category: 'Campus Technical Organization',
    period: '2024 – Present',
    description:
      'Community co-leadership organizing cybersecurity awareness initiatives, ethical hacking discussions, hands-on Linux workshops, and collaborative security exploration sessions for campus engineers.',
    highlights: [
      'Conducted interactive sessions on Linux fundamentals, network security, and secure coding',
      'Fostered collaborative peer learning groups for Capture-The-Flag (CTF) challenges',
      'Assisted in event planning, technical logistics, and community outreach on campus',
      'Advocated for safe, responsible exploration of security tools and open-source software',
    ],
    iconName: 'Shield',
  },
  {
    id: 'commitrush',
    role: 'Core Contributor & Technical Coordinator',
    organization: 'COMMITRUSH 2026 • 21-Day Open-Source Initiative',
    category: 'Open-Source Challenge',
    period: 'Sep 2026 – Oct 2026',
    description:
      'Core contributor and technical coordinator for COMMITRUSH 2026—an intensive 21-day open-source contribution sprint designed to cultivate disciplined version control habits and collaborative software development.',
    highlights: [
      'Authored production self-healing pipeline and health monitor for webhook intake',
      'Configured Redis queue, Upstash TLS integration, and decoupled CSRF authentication',
      'Evaluated pull requests, guided participants in Git workflows, and maintained live leaderboard',
      'Successfully sustained 21 consecutive days of community engagement and open-source contributions',
    ],
    iconName: 'Terminal',
  },
];

export const OPEN_SOURCE_REPOS: RepositoryItem[] = [
  {
    name: 'Hackit-DROID/HackIT-CommitRush',
    description:
      'Automated PR evaluation, scoring pipeline, webhook intake, and leaderboard platform for the 21-day HackIT CommitRush community challenge.',
    language: 'Python',
    htmlUrl: 'https://github.com/Hackit-DROID/HackIT-CommitRush',
    demoUrl: 'https://hack-it-commit-rush.vercel.app',
    role: 'Core Contributor (Self-Healing Pipeline & Auth)',
    updatedAt: '2026-09-26',
  },
  {
    name: 'PratikBisen/spotifyHomepageClone',
    description:
      'Spotify homepage UI clone built using semantic HTML5 and modern CSS3 with responsive desktop and mobile media player controls.',
    language: 'HTML / CSS',
    htmlUrl: 'https://github.com/PratikBisen/spotifyHomepageClone',
    demoUrl: 'https://pratikbisen.github.io/spotifyHomepageClone/',
    role: 'Author & Maintainer',
    updatedAt: '2026-07-15',
  },
  {
    name: 'PratikBisen/Simon-Says-Game',
    description:
      'Interactive browser memory sequence game implementing classic Simon Says rules, dynamic state loops, and DOM manipulation.',
    language: 'JavaScript',
    htmlUrl: 'https://github.com/PratikBisen/Simon-Says-Game',
    demoUrl: 'https://pratikbisen.github.io/Simon-Says-Game/',
    role: 'Author & Maintainer',
    updatedAt: '2026-07-17',
  },
  {
    name: 'PratikBisen/responsiveSidebar',
    description:
      'Collapsible responsive sidebar navigation system engineered with pure HTML5 and CSS3 without JavaScript dependencies.',
    language: 'CSS / HTML',
    htmlUrl: 'https://github.com/PratikBisen/responsiveSidebar',
    demoUrl: 'https://pratikbisen.github.io/responsiveSidebar/',
    role: 'Author & Maintainer',
    updatedAt: '2026-05-22',
  },
  {
    name: 'PratikBisen/Demo-Medical-Project',
    description:
      'Collaborative healthcare record management system prototype developed with TypeScript and modular architecture.',
    language: 'TypeScript',
    htmlUrl: 'https://github.com/PratikBisen/Demo-Medical-Project',
    role: 'Collaborator',
    updatedAt: '2026-09-02',
  },
];

export const EDUCATION_DATA: EducationData = {
  institution: 'Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T)',
  degree: 'Bachelor of Technology (B.Tech)',
  branch: 'Information Technology',
  expectedGraduation: '2029',
  location: 'Vishnupuri, Nanded, Maharashtra, India',
  curriculum: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++)',
    'Database Management Systems',
    'Computer Organization & Architecture',
    'Operating Systems Fundamentals',
    'Computer Networks',
    'Discrete Mathematics',
    'Software Engineering Principles',
  ],
  highlights: [
    'Autonomous Government-Aided Premier Engineering Institute in Maharashtra',
    'Active student coordinator in departmental technical bodies (ITSA)',
    'Co-lead at HackIT Cybersecurity & Ethical Hacking student community',
    'Consistent focus on algorithmic problem solving and practical project development',
  ],
};
