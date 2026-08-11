import { useState } from 'react';
import { motion } from 'framer-motion';
import { expertise } from '@/data/skills';
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

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="section-pad max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
            Expertise
          </p>
          <h2 className="font-display font-semibold text-obsidian-50 text-3xl lg:text-4xl tracking-tight">
            Explore Our Expertise
          </h2>
          <p className="mt-4 text-obsidian-300 leading-relaxed">
            Five pillars that define my work — from production web apps to local AI solutions and
            mobile development.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {expertise.map((card, i) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className={i === 3 ? 'lg:col-span-3' : ''}
            >
              <SpotlightCard
                className="glow-card h-full group"
                spotlightColor="rgba(56, 189, 248, 0.10)"
              >
                <div className="glow-card-inner h-full">
                  <div className="flex items-start gap-5">
                    <div className="grid place-items-center h-14 w-14 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <card.icon size={26} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-obsidian-50 text-xl">
                        {card.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-obsidian-300 leading-relaxed">{card.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {card.skills.map((s) => (
                          <span
                            key={s}
                            onMouseEnter={() => setActiveSkill(s)}
                            onMouseLeave={() => setActiveSkill(null)}
                            className={`tech-badge cursor-pointer ${
                              activeSkill === s ? 'tech-badge-active' : ''
                            }`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
