export type SiteMeta = {
  title: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  short: string;
  bullets: string[];
  description?: string; // Back-compat for existing pages
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  linkedIn: string;
};

export type SuccessStory = {
  id: string;
  title: string;
  description: string;
  value: string;
  year: number;
};

export const siteMeta: SiteMeta = {
  title: 'FinTrust Advisors',
  description:
    'Independent financial advisory firm helping clients plan, invest, and grow with confidence.',
};

export const services: ServiceItem[] = [
  {
    id: 'srv-wealth-planning',
    title: 'Wealth Planning',
    short: 'Holistic planning aligned to your goals.',
    bullets: [
      'Retirement readiness',
      'Tax-aware strategies',
      'Education funding plans',
      'Cash flow and risk analysis',
    ],
    description: 'Holistic planning aligned to your goals.',
  },
  {
    id: 'srv-investment-management',
    title: 'Investment Management',
    short: 'Disciplined, research-driven portfolios.',
    bullets: [
      'Strategic asset allocation',
      'Ongoing rebalancing',
      'Factor and risk budgeting',
      'Impact and ESG customization',
    ],
    description: 'Disciplined, research-driven portfolios.',
  },
  {
    id: 'srv-estate-trust',
    title: 'Estate & Trust',
    short: 'Protect and transfer wealth efficiently.',
    bullets: [
      'Estate structure reviews',
      'Trust coordination',
      'Philanthropic planning',
      'Beneficiary strategies',
    ],
    description: 'Protect and transfer wealth efficiently.',
  },
  {
    id: 'srv-business-owners',
    title: 'Business Owner Advisory',
    short: 'Solutions for founders and families.',
    bullets: [
      'Liquidity and exit readiness',
      'Concentrated position management',
      'Succession planning',
      'Executive compensation',
    ],
    description: 'Solutions for founders and families.',
  },
];

export const team: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Alex Morgan',
    role: 'Managing Partner',
    bio: '20+ years advising families and institutions on multi-asset portfolios.',
    imageSrc: '/images/team/alex-morgan.jpg',
    linkedIn: 'https://www.linkedin.com/in/example-alex',
  },
  {
    id: 'tm-2',
    name: 'Priya Shah',
    role: 'Director, Planning',
    bio: 'CFP professional focused on holistic planning, tax-awareness, and risk.',
    imageSrc: '/images/team/priya-shah.jpg',
    linkedIn: 'https://www.linkedin.com/in/example-priya',
  },
  {
    id: 'tm-3',
    name: 'Daniel Kim',
    role: 'Head of Research',
    bio: 'Leads investment research and portfolio construction with a factor lens.',
    imageSrc: '/images/team/daniel-kim.jpg',
    linkedIn: 'https://www.linkedin.com/in/example-daniel',
  },
];

export const successStories: SuccessStory[] = [
  {
    id: 'ss-1',
    title: 'Family Office Transition',
    description:
      'Consolidated accounts, optimized tax lots, and introduced a factor-based core.',
    value: '$2.5M in realized tax savings over 3 years',
    year: 2023,
  },
  {
    id: 'ss-2',
    title: 'Founder Liquidity Event',
    description:
      'Designed a glidepath from concentrated equity to diversified portfolio.',
    value: 'Reduced single-stock exposure by 70% within 12 months',
    year: 2024,
  },
  {
    id: 'ss-3',
    title: 'Nonprofit Endowment Policy',
    description:
      'Modernized IPS, rebalanced mandates, and lowered total fees.',
    value: '30 bps reduction in all-in expenses',
    year: 2022,
  },
];

// Backward-compatible exports for existing pages
export type CaseStudy = { id: string; title: string; summary: string };

export const caseStudies: CaseStudy[] = [
  { id: 'c1', title: 'Case Study One', summary: 'Placeholder summary.' },
  { id: 'c2', title: 'Case Study Two', summary: 'Placeholder summary.' },
];
