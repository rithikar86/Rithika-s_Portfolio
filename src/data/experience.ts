import { Briefcase, Layers, GraduationCap, Code2, PenTool } from 'lucide-react';

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  icon: typeof Briefcase;
};

export const experiences: Experience[] = [
  {
    role: 'Software Development Intern',
    company: 'Cognifyz Technologies',
    period: 'Sep – Oct 2025',
    location: 'Virtual',
    bullets: [
      'Developed software features and fixed application issues using JavaScript and Python.',
    ],
    icon: Briefcase,
  },
  {
    role: 'UI/UX Design Intern',
    company: 'Zop Technologies',
    period: 'Jun – Jul 2025',
    location: 'Kodaikanal',
    bullets: [
      'Designed wireframes and interactive prototypes for the Isha CallTaxi mobile application using Figma.',
    ],
    icon: Layers,
  },
];

export const education = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Coimbatore Institute of Engineering and Technology',
    period: '2023 – 2027',
    score: '87%',
    icon: GraduationCap,
  },
  {
    degree: 'Senior Secondary (XII)',
    school: 'Tamil Nadu State Board',
    period: '2023',
    score: '82%',
    icon: GraduationCap,
  },
];

export const internships = [
  {
    role: 'Software Development Intern',
    company: 'Cognifyz Technologies',
    period: 'Sep – Oct 2025',
    location: 'Virtual',
    icon: Code2,
    points: [
      'Developed software features and debugged application issues using JavaScript and Python.',
    ],
    tags: ['JavaScript', 'Python', 'Feature Development', 'Debugging'],
  },
  {
    role: 'UI/UX Design Intern',
    company: 'Zop Technologies, Kodaikanal',
    period: 'Jun – Jul 2025',
    location: 'On-site',
    icon: PenTool,
    points: [
      'Designed wireframes, user research flows, and interactive prototypes for the Isha CallTaxi mobile app using Figma.',
    ],
    tags: ['Figma', 'Wireframes', 'User Research', 'Isha CallTaxi'],
  },
];
