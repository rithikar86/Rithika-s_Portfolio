import { useState } from 'react';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  badge?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  icon: Icon,
  badge = 'Featured',
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`project-card group relative w-full min-w-[300px] overflow-hidden rounded-[16px] border border-slate-800/80 bg-[#131B2E]/90 p-6 shadow-lg transition-all duration-300 ${
        isHovered ? 'is-hovered' : ''
      }`}
    >
      <div className="relative z-10 flex items-start justify-between">
        <div className={`project-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 transition-all duration-300 ${isHovered ? 'is-hovered' : ''}`}>
          <Icon size={22} />
        </div>

        <div className={`project-badge rounded-full border border-slate-700/50 bg-slate-800/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300 transition-all duration-300 ${isHovered ? 'is-hovered' : ''}`}>
          {badge}
        </div>
      </div>

      <h3 className={`mt-6 text-lg font-semibold transition-colors duration-300 ${isHovered ? 'text-sky-400' : 'text-slate-50'}`}>
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700/50 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300 transition-all duration-300 group-hover:border-sky-500/40 group-hover:bg-sky-400/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-sky-400">
        <span>View project</span>
        <ArrowUpRight size={16} />
      </div>
    </article>
  );
}
