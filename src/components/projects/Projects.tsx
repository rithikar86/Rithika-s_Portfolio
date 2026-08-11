import { useState } from 'react';
import { ArrowUpRight, Camera, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioProjects } from '@/data/projects';
import { codeSnippets } from '@/data/engineering';
import SpotlightCard from '@/components/SpotlightCard';
import CodeModal from '@/components/code/CodeModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function cardTechs(title: string): string[] {
  const found = portfolioProjects.find((p) => p.title === title);
  return found ? found.tags : [];
}

export default function Projects() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [openCode, setOpenCode] = useState<string | null>(null);

  const gridOrder = [
    { idx: 0, span: 'lg:col-span-2' },
    { idx: 1, span: 'lg:col-span-1' },
    { idx: 2, span: 'lg:col-span-3' },
    { idx: 3, span: 'lg:col-span-1' },
    { idx: 4, span: 'lg:col-span-2' },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/50 to-transparent pointer-events-none" />
      <div className="section-pad max-w-7xl mx-auto relative">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              Featured Work
            </p>
            <h2 className="font-display font-semibold text-obsidian-50 text-3xl lg:text-4xl tracking-tight">
              Your Vision, Our Expertise
            </h2>
          </div>
          <p className="text-obsidian-300 max-w-sm text-sm leading-relaxed">
            Five projects spanning full-stack web platforms, applied generative AI, and mobile
            safety tech.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {gridOrder.map(({ idx, span }) => {
            const p = portfolioProjects[idx];
            const tags = cardTechs(p.title);
            const isHighlighted = activeTech !== null && tags.includes(activeTech);
            const opacityClass = activeTech === null ? 'opacity-100' : isHighlighted ? 'opacity-100' : 'opacity-30';

            return (
              <motion.div key={p.title} variants={itemVariants} className={span}>
                <div className={`transition-all duration-300 ${opacityClass}`}>
                  <SpotlightCard
                    className="glow-card h-full group"
                    spotlightColor="rgba(56, 189, 248, 0.10)"
                  >
                    <div className="glow-card-inner h-full flex flex-col">
                      <div className="flex items-start justify-between">
                        <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                          <p.icon size={22} />
                        </div>
                        <ArrowUpRight
                          size={20}
                          className="text-obsidian-500 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                        />
                      </div>
                      <h3 className="mt-5 font-display font-semibold text-obsidian-50 text-lg lg:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-obsidian-300 leading-relaxed flex-1">{p.desc}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            onMouseEnter={() => setActiveTech(t)}
                            onMouseLeave={() => setActiveTech(null)}
                            className={`tech-badge cursor-pointer ${
                              activeTech === t ? 'tech-badge-active' : ''
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.gallery && (
                          <a
                            href={p.gallery}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-obsidian-500/30 bg-obsidian-700/40 px-3.5 py-2 text-xs font-semibold text-obsidian-200 transition-all hover:border-emerald-500/40 hover:text-emerald-400 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                          >
                            <Camera size={14} />
                            View Gallery
                          </a>
                        )}
                        {codeSnippets[p.title] && (
                          <button
                            type="button"
                            onClick={() => setOpenCode(p.title)}
                            className="inline-flex items-center gap-2 rounded-lg border border-obsidian-500/30 bg-obsidian-700/40 px-3.5 py-2 text-xs font-semibold text-obsidian-200 transition-all hover:border-emerald-500/40 hover:text-emerald-400 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)] cursor-pointer"
                          >
                            <Code2 size={14} />
                            View Code
                          </button>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <CodeModal
        open={openCode !== null}
        onClose={() => setOpenCode(null)}
        snippet={openCode ? codeSnippets[openCode] : undefined}
      />
    </section>
  );
}
