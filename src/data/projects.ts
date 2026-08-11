import { Bot, Users, Cpu, Film, FileText, ShoppingCart, Shield } from 'lucide-react';

export type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  details: string;
  icon: typeof Bot;
  accent: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: 'Private Document Intelligence AI',
    subtitle: 'Local RAG-powered PDF Q&A',
    tech: ['LangChain', 'FAISS', 'Ollama', 'RAG', 'LLMs', 'Llama 3.2'],
    details:
      'Built a local AI application to query PDF documents using natural language. Used LangChain for pipelines, FAISS for vector embeddings/semantic search, and Ollama with Llama 3.2 to run without cloud APIs.',
    icon: Bot,
    accent: 'from-accent-500/20 to-accent-700/5',
    github: 'https://github.com/rithikar86',
  },
  {
    title: 'CIETM Conference Management System',
    subtitle: 'Full-stack conference platform',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    details:
      'Full-stack application for CIETM-2026 National Level Conference with separate participant and admin interfaces, registration workflows, and full CRUD operations.',
    icon: Users,
    accent: 'from-lime-500/20 to-lime-700/5',
    github: 'https://github.com/rithikar86',
  },
  {
    title: 'Customer Segmentation (RFM Analysis)',
    subtitle: 'RFM-driven segmentation portal',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Python (Pandas, NumPy)'],
    details:
      'Customer segmentation portal using RFM logic to generate recommendations and group customers into High-Value, Loyal, Potential, and At-Risk categories.',
    icon: Cpu,
    accent: 'from-accent-500/20 to-accent-700/5',
    github: 'https://github.com/rithikar86',
  },
  {
    title: 'Movie Search Application',
    subtitle: 'Debounced API search web app',
    tech: ['React.js', 'REST APIs', 'JavaScript', 'CSS3'],
    details:
      'Responsive search web app integrating third-party APIs with debounced search inputs to optimize performance.',
    icon: Film,
    accent: 'from-lime-500/20 to-lime-700/5',
    github: 'https://github.com/rithikar86',
  },
];

export const portfolioProjects = [
  {
    title: 'Private Document Intelligence AI',
    desc: 'Local AI application to query PDF documents using natural language & vector embeddings without cloud APIs.',
    tags: ['LangChain', 'FAISS DB', 'Ollama', 'Llama 3.2', 'RAG', 'Python'],
    icon: FileText,
    feature: true,
    gallery: 'https://photos.google.com/',
  },
  {
    title: 'CIETM Conference Management System',
    desc: 'Full-stack platform for CIETM-2026 National Conference with separate participant & admin interfaces, paper submission workflows, and CRUD operations.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    icon: Users,
    gallery: 'https://photos.google.com/',
  },
  {
    title: 'Customer Segmentation (RFM Analysis)',
    desc: 'E-commerce analytics portal using RFM logic to segment customers into High-Value, Loyal, Potential, and At-Risk groups.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Python'],
    icon: ShoppingCart,
    gallery: 'https://photos.google.com/',
  },
  {
    title: 'Women Safety App',
    desc: 'Emergency Android application featuring double-shake SOS detection, live GPS tracking, auto-SMS notifications, and loud local alarm.',
    tags: ['Android Studio', 'Java', 'Firebase', 'Google Maps API', 'GPS'],
    icon: Shield,
    gallery: 'https://photos.google.com/',
  },
  {
    title: 'Movie Search Application',
    desc: 'Web application integrating third-party movie APIs with debounced search input optimization.',
    tags: ['React.js', 'REST APIs', 'JavaScript', 'CSS3'],
    icon: Film,
    gallery: 'https://photos.google.com/',
  },
];
