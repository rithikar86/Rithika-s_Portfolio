import { GraduationCap, BadgeCheck, Star } from 'lucide-react';
import { highlights, portfolioCertifications, education as educationData } from '@/data/achievements';

export default function Achievements() {
  return (
    <section id="certifications" className="py-20 lg:py-28">
      <div className="section-pad max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-500 mb-3">
            Achievements
          </p>
          <h2 className="font-display font-semibold text-ink-900 text-3xl lg:text-4xl tracking-tight">
            Journey Through Our Highlights
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {highlights.map((h, i) => (
            <article
              key={h.title}
              className="card-surface card-hover p-6 group animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-rust-50 text-rust-500 group-hover:bg-rust-500 group-hover:text-white transition-colors duration-300">
                  <h.icon size={22} />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-cream-200 text-ink-600 border border-cream-400">
                  <Star size={11} className="text-rust-400" />
                  {h.badge}
                </span>
              </div>
              <h3 className="mt-5 font-display font-semibold text-ink-900 text-base leading-snug">
                {h.title}
              </h3>
              <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">{h.desc}</p>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mt-6">
          <div className="card-surface p-7 animate-fade-up">
            <div className="flex items-center gap-3 mb-5">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-rust-50 text-rust-500">
                <BadgeCheck size={22} />
              </div>
              <h3 className="font-display font-semibold text-ink-900 text-xl">
                Certifications &amp; Training
              </h3>
            </div>
            <ul className="space-y-3">
              {portfolioCertifications.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rust-400 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface p-7 animate-fade-up" style={{ animationDelay: '80ms' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-rust-50 text-rust-500">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-display font-semibold text-ink-900 text-xl">Education</h3>
            </div>
            <div className="space-y-3">
              {educationData.map((e) => (
                <div
                  key={e.label}
                  className="flex items-center justify-between rounded-xl bg-cream-200/60 border border-cream-400 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-ink-800 text-sm">{e.label}</p>
                    <p className="text-xs text-ink-400 mt-0.5">{e.sub}</p>
                  </div>
                  <span className="font-display font-bold text-rust-500 text-lg">{e.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
