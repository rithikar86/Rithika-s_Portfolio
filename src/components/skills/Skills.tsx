import { expertise } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="section-pad max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-500 mb-3">
            Expertise
          </p>
          <h2 className="font-display font-semibold text-ink-900 text-3xl lg:text-4xl tracking-tight">
            Explore Our Expertise
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Five pillars that define my work — from production web apps to local AI solutions and
            mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {expertise.map((card, i) => (
            <article
              key={card.title}
              className={`card-surface card-hover p-7 group animate-fade-up ${
                i === 3 ? 'lg:col-span-3' : ''
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="grid place-items-center h-14 w-14 rounded-2xl bg-rust-50 text-rust-500 group-hover:bg-rust-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  <card.icon size={26} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-ink-900 text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">{card.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-cream-200 text-ink-600 border border-cream-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
