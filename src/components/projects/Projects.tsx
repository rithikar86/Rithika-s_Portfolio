import { ArrowUpRight } from 'lucide-react';
import { portfolioProjects } from '@/data/projects';
import TiltCard from '@/components/TiltCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-cream-200/50">
      <div className="section-pad max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust-500 mb-3">
              Featured Work
            </p>
            <h2 className="font-display font-semibold text-ink-900 text-3xl lg:text-4xl tracking-tight">
              Your Vision, Our Expertise
            </h2>
          </div>
          <p className="text-ink-500 max-w-sm text-sm leading-relaxed">
            Five projects spanning full-stack web platforms, applied generative AI, and mobile
            safety tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {portfolioProjects.map((p, i) => (
            <TiltCard
              key={p.title}
              as="article"
              intensity={6}
              className={`card-surface p-7 group animate-fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-rust-200 ${
                p.feature ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-rust-50 text-rust-500 group-hover:bg-rust-500 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                  <p.icon size={22} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-ink-400 group-hover:text-rust-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                />
              </div>
              <h3 className="mt-5 font-display font-semibold text-ink-900 text-lg lg:text-xl">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-cream-200 text-ink-600 border border-cream-400 transition-all duration-300 group-hover:border-rust-200 group-hover:bg-rust-50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
