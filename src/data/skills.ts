import { Code2, Layers, Database as DatabaseIcon, Server, Brain, Code, Cpu, Globe, Wrench } from 'lucide-react';

export const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Python', 'JavaScript'],
  },
  {
    title: 'Frontend / Backend',
    icon: Layers,
    items: ['React.js', 'HTML5', 'CSS3', 'Express.js', 'Node.js'],
  },
  {
    title: 'Databases',
    icon: DatabaseIcon,
    items: ['MongoDB'],
  },
  {
    title: 'APIs & Practices',
    icon: Server,
    items: ['REST APIs', 'JSON', 'Git', 'GitHub'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    items: ['GenAI', 'RAG', 'LLMs', 'NLP', 'LangChain', 'FAISS DB', 'Ollama'],
  },
];

export const expertise = [
  {
    title: 'Languages',
    icon: Code,
    desc: 'Core programming languages for backend logic, scripting, and enterprise application development.',
    skills: ['Python', 'JavaScript', 'Java'],
  },
  {
    title: 'Frontend / Backend',
    icon: Globe,
    desc: 'End-to-end web application development with modern React, robust Node.js APIs, and responsive styling.',
    skills: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'Databases & Cloud',
    icon: DatabaseIcon,
    desc: 'Data persistence and cloud-backed storage for scalable, real-time application backends.',
    skills: ['MongoDB', 'Firebase', 'JSON'],
  },
  {
    title: 'AI / ML / Data Science',
    icon: Cpu,
    desc: 'Local LLM-powered assistants, RAG pipelines, vector search, and data-driven analytics.',
    skills: ['Generative AI', 'RAG', 'LLMs', 'NLP', 'LangChain', 'FAISS DB', 'Ollama', 'Llama 3.2', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    desc: 'Version control, IDEs, design tooling, and API integrations for clean development workflows.',
    skills: ['Git', 'GitHub', 'Android Studio', 'Google Maps API', 'Figma'],
  },
];
