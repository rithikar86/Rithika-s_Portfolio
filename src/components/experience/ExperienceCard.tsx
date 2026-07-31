import { useEffect, useRef, useState } from 'react';
import { ArrowRight, type LucideIcon } from 'lucide-react';

type ExperienceCardProps = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  tags: string[];
  icon: LucideIcon;
  index: number;
};

export default function ExperienceCard({
  role,
  company,
  period,
  location,
  points,
  tags,
  icon: Icon,
  index,
}: ExperienceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = rowRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealDelayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300';

  return (
    <div
      ref={rowRef}
      className={`experience-row ${isVisible ? 'is-visible' : ''} ${revealDelayClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="experience-marker" aria-hidden="true">
        <span className={`experience-marker-core ${isHovered ? 'is-hovered' : ''}`} />
      </div>

      <article className={`experience-card ${isHovered ? 'is-hovered' : ''}`}>
        <div className="flex items-start gap-4">
          <div className="experience-icon">
            <Icon size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{role}</h3>
              <span className="text-sm font-medium text-[var(--color-text-muted)]">{period}</span>
            </div>
            <p className="mt-1 font-medium text-[var(--color-primary)]">{company}</p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{location}</p>

            <ul className="mt-4 space-y-2">
              {points.map((point) => (
                <li key={point} className="experience-bullet flex items-start gap-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>{point}</span>
                  <ArrowRight size={14} className="experience-bullet-arrow mt-[0.35rem] text-[var(--color-primary)]" />
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-primary)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
