import { ArrowRight, MapPin, Briefcase, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { internships } from '@/data/experience';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const nodeIcons = [Briefcase, PenTool];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-900/30 to-transparent pointer-events-none" />
      <div className="section-pad max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-28 self-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              Experience
            </p>
            <h2 className="font-display font-semibold text-obsidian-50 text-3xl lg:text-4xl leading-tight tracking-tight">
              Experience Web &amp; AI Like Never Before
            </h2>
            <p className="mt-4 text-obsidian-300 leading-relaxed max-w-md">
              Hands-on internships across full-stack development and UI/UX design — building real
              products, shipping features, and designing user-first interfaces.
            </p>
            <a
              href="#projects"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm font-semibold px-5 py-3 transition-all hover:shadow-glow"
            >
              Explore Full Experience
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="relative pl-16">
              <div className="timeline-line" />

              <motion.div
                className="space-y-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {internships.map((job, i) => {
                  const NodeIcon = nodeIcons[i] || Briefcase;
                  return (
                    <motion.div key={job.company} variants={itemVariants} className="relative">
                      <div className="timeline-node absolute -left-16">
                        <NodeIcon size={18} className="text-emerald-400" />
                      </div>

                      <div className="glass rounded-2xl p-6 lg:p-7 border border-obsidian-500/30 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-glow">
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <h3 className="font-display font-semibold text-obsidian-50 text-lg">
                                {job.role}
                              </h3>
                              <span className="text-xs text-obsidian-400 font-medium">{job.period}</span>
                            </div>
                            <p className="text-emerald-400 font-medium text-sm mt-0.5">{job.company}</p>
                            <div className="flex items-center gap-1.5 mt-2 text-xs text-obsidian-400">
                              <MapPin size={13} /> {job.location}
                            </div>
                            <ul className="mt-4 space-y-2">
                              {job.points.map((pt) => (
                                <li key={pt} className="flex items-start gap-2.5 text-sm text-obsidian-300">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                                  {pt}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {job.tags.map((t) => (
                                <span key={t} className="tech-badge">{t}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
