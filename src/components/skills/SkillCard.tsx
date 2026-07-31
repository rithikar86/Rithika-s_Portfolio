import { useState } from 'react';

type SkillCardProps = {
  icon: string;
  name: string;
  level: string;
  proficiency: number;
  description?: string;
};

export default function SkillCard({
  icon,
  name,
  level,
  proficiency,
  description = 'Skilled in building polished and performant experiences.',
}: SkillCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      className="skill-card-wrapper group"
      aria-label={`View details for ${name}`}
    >
      <div className={`skill-card ${flipped ? 'is-flipped' : ''}`}>
        <div className="skill-face skill-face-front">
          <div className="skill-icon">{icon}</div>
          <h3 className="skill-name">{name}</h3>
          <p className="skill-level">{level}</p>

          <div className="skill-progress-wrap">
            <div className="skill-progress-meta">
              <span>Proficiency</span>
              <span>{proficiency}%</span>
            </div>
            <div className="skill-progress-track">
              <div className="skill-progress-bar" style={{ width: `${proficiency}%` }} />
            </div>
          </div>
        </div>

        <div className="skill-face skill-face-back">
          <p className="skill-back-percent">{proficiency}%</p>
          <p className="skill-back-level">{level}</p>
          <p className="skill-back-desc">{description}</p>
        </div>
      </div>
    </button>
  );
}
