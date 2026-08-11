import { GraduationCap, BadgeCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { highlights, portfolioCertifications, education as educationData } from '@/data/achievements';
import SpotlightCard from '@/components/SpotlightCard';

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

export default function Achievements() {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="section-pad max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
            Achievements
          </p>
          <h2 className="font-display font-semibold text-obsidian-50 text-3xl lg:text-4xl tracking-tight">
            Journey Through Our Highlights
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {highlights.map((h) => (
            <motion.div key={h.title} variants={itemVariants}>
              <SpotlightCard
                className="glow-card h-full group"
                spotlightColor="rgba(56, 189, 248, 0.10)"
              >
                <div className="glow-card-inner h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <h.icon size={22} />
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-obsidian-700/50 text-obsidian-200 border border-obsidian-500/30">
                      <Star size={11} className="text-emerald-400" />
                      {h.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-obsidian-50 text-base leading-snug">
                    {h.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-obsidian-300 leading-relaxed flex-1">{h.desc}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-5 lg:gap-6 mt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={itemVariants}>
            <SpotlightCard className="glow-card h-full" spotlightColor="rgba(56, 189, 248, 0.08)">
              <div className="glow-card-inner">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <BadgeCheck size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-obsidian-50 text-xl">
                    Certifications &amp; Training
                  </h3>
                </div>
                <ul className="space-y-3">
                  {portfolioCertifications.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-obsidian-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SpotlightCard className="glow-card h-full" spotlightColor="rgba(99, 102, 241, 0.10)">
              <div className="glow-card-inner">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-violet-500/10 text-violet-400">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-obsidian-50 text-xl">Education</h3>
                </div>
                <div className="space-y-3">
                  {educationData.map((e) => (
                    <div
                      key={e.label}
                      className="flex items-center justify-between rounded-xl bg-obsidian-700/50 border border-obsidian-500/30 px-4 py-3"
                    >
                      <div>
                        <p className="font-medium text-obsidian-100 text-sm">{e.label}</p>
                        <p className="text-xs text-obsidian-400 mt-0.5">{e.sub}</p>
                      </div>
                      <span className="font-display font-bold text-emerald-400 text-lg">{e.value}</span>
                    </div>
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
