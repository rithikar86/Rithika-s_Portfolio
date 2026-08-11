import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Lightbulb, Wrench, HeartHandshake, PencilLine } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import {
  pipelineStages,
  tradeoffs,
  devTools,
  devSetupChips,
  community,
  communityChips,
  creative,
} from '@/data/engineering';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function StageCard({ stage }: { stage: (typeof pipelineStages)[0] }) {
  return (
    <div className="rounded-xl bg-obsidian-700/40 border border-obsidian-500/30 p-4 flex flex-col gap-2.5 h-full transition-colors duration-300 hover:border-emerald-500/30">
      <div className="grid place-items-center h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
        <stage.icon size={20} />
      </div>
      <p className="font-display font-semibold text-obsidian-50 text-sm leading-snug">{stage.title}</p>
      <p className="text-xs text-obsidian-300 leading-relaxed">{stage.desc}</p>
    </div>
  );
}

export default function Engineering() {
  return (
    <section id="architecture" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/40 via-transparent to-obsidian-900/40 pointer-events-none" />
      <div className="section-pad max-w-7xl mx-auto relative">
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
            Beyond Code
          </p>
          <h2 className="font-display font-semibold text-obsidian-50 text-3xl lg:text-4xl tracking-tight">
            Engineering, Craft &amp; Community
          </h2>
          <p className="mt-4 text-obsidian-300 leading-relaxed">
            The thinking behind the systems, the tools powering the workflow, and the impact beyond
            the keyboard.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-12 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* System Architecture & Design Tradeoffs */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-8"
          >
            <SpotlightCard
              className="glow-card h-full group"
              spotlightColor="rgba(56, 189, 248, 0.10)"
            >
              <div className="glow-card-inner h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <Lightbulb size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-obsidian-50 text-lg sm:text-xl">
                      System Architecture &amp; Design Tradeoffs
                    </h3>
                    <p className="text-sm text-obsidian-400 mt-0.5">
                      Private Document Intelligence AI pipeline
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex items-stretch gap-3">
                  {pipelineStages.map((stage, i) => (
                    <Fragment key={stage.title}>
                      {i > 0 && (
                        <motion.div
                          className="self-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          <ArrowRight size={18} className="text-emerald-400/70 animate-pulse-glow" />
                        </motion.div>
                      )}
                      <div className="flex-1">
                        <StageCard stage={stage} />
                      </div>
                    </Fragment>
                  ))}
                </div>

                <div className="lg:hidden grid grid-cols-1 gap-2">
                  {pipelineStages.map((stage, i) => (
                    <Fragment key={stage.title}>
                      <StageCard stage={stage} />
                      {i < pipelineStages.length - 1 && (
                        <ArrowDown
                          size={18}
                          className="text-emerald-400/70 animate-pulse-glow mx-auto"
                        />
                      )}
                    </Fragment>
                  ))}
                </div>

                <div className="mt-7">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                    Engineering Decisions &amp; Lessons Learned
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {tradeoffs.map((t, i) => (
                      <motion.div
                        key={t.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                        className="rounded-xl bg-obsidian-800/50 border border-obsidian-500/30 p-4 transition-colors duration-300 hover:border-emerald-500/30"
                      >
                        <p className="text-sm font-semibold text-emerald-400">{t.title}</p>
                        <p className="text-xs text-obsidian-300 mt-1.5 leading-relaxed">{t.body}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Developer Engine & Workflow */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <SpotlightCard
              className="glow-card h-full group"
              spotlightColor="rgba(56, 189, 248, 0.10)"
            >
              <div className="glow-card-inner h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <Wrench size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-obsidian-50 text-lg">
                    Tech Stack &amp; Dev Setup
                  </h3>
                </div>

                <ul className="mt-6 space-y-3">
                  {devTools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center gap-3 rounded-xl bg-obsidian-800/50 border border-obsidian-500/30 px-3.5 py-3 transition-colors duration-300 hover:border-emerald-500/30"
                    >
                      <div className="grid place-items-center h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                        <tool.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-obsidian-50">{tool.name}</p>
                        <p className="text-xs text-obsidian-300 truncate">{tool.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {devSetupChips.map((c) => (
                    <span key={c} className="tech-badge">{c}</span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Community & Leadership */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <SpotlightCard
              className="glow-card h-full group"
              spotlightColor="rgba(56, 189, 248, 0.10)"
            >
              <div className="glow-card-inner h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <HeartHandshake size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-obsidian-50 text-lg">
                    Community &amp; Leadership
                  </h3>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {community.map((c) => (
                    <li
                      key={c.title}
                      className="flex items-start gap-3 rounded-xl bg-obsidian-800/50 border border-obsidian-500/30 px-3.5 py-3 transition-colors duration-300 hover:border-emerald-500/30"
                    >
                      <div className="grid place-items-center h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                        <c.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-obsidian-50">{c.title}</p>
                        <p className="text-xs text-obsidian-300 mt-0.5 leading-relaxed">{c.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {communityChips.map((c) => (
                    <span key={c} className="tech-badge">{c}</span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Problem Solving & Creative Side */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 lg:col-span-8"
          >
            <SpotlightCard
              className="glow-card h-full group"
              spotlightColor="rgba(56, 189, 248, 0.10)"
            >
              <div className="glow-card-inner h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <PencilLine size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-obsidian-50 text-lg sm:text-xl">
                      Problem Solving &amp; Creative Side
                    </h3>
                    <p className="text-sm text-obsidian-400 mt-0.5">
                      Balancing engineering with analytical craft
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {creative.map((c, i) => (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                      className="rounded-xl bg-obsidian-800/50 border border-obsidian-500/30 p-4 transition-colors duration-300 hover:border-emerald-500/30"
                    >
                      <div className="grid place-items-center h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mb-3">
                        <c.icon size={18} />
                      </div>
                      <p className="text-sm font-semibold text-obsidian-50">{c.title}</p>
                      <p className="text-xs text-obsidian-300 mt-1.5 leading-relaxed">{c.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
