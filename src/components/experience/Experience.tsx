import { ArrowRight, MapPin } from 'lucide-react';
import { internships } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-cream-200/50">
      <div className="section-pad max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-500 mb-3">
              Experience
            </p>
            <h2 className="font-display font-semibold text-ink-900 text-3xl lg:text-4xl leading-tight tracking-tight">
              Experience Web &amp; AI Like Never Before
            </h2>
            <p className="mt-4 text-ink-500 leading-relaxed max-w-md">
              Hands-on internships across full-stack development and UI/UX design — building real
              products, shipping features, and designing user-first interfaces.
            </p>
            <a
              href="#projects"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold px-5 py-3 transition-all"
            >
              Explore Full Experience
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {internships.map((job, i) => (
              <article
                key={job.company}
                className="card-surface card-hover p-6 lg:p-7 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-rust-50 text-rust-500 shrink-0">
                    <job.icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display font-semibold text-ink-900 text-lg">
                        {job.role}
                      </h3>
                      <span className="text-xs text-ink-400 font-medium">{job.period}</span>
                    </div>
                    <p className="text-rust-500 font-medium text-sm mt-0.5">{job.company}</p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-ink-400">
                      <MapPin size={13} /> {job.location}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-ink-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rust-400 shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-cream-200 text-ink-600 border border-cream-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
