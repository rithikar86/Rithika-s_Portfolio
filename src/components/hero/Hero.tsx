import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const stackPills = [
  { label: 'React', span: 'col-span-2', color: 'border-amber-600/30 text-amber-700 bg-amber-500/10' },
  { label: 'Node.js', span: 'col-span-1', color: 'border-obsidian-500/30 text-obsidian-300 bg-obsidian-700/30' },
  { label: 'MongoDB', span: 'col-span-1', color: 'border-obsidian-500/30 text-obsidian-300 bg-obsidian-700/30' },
  { label: 'Python', span: 'col-span-2', color: 'border-amber-600/30 text-amber-700 bg-amber-500/10' },
  { label: 'LangChain', span: 'col-span-2', color: 'border-orange-600/30 text-orange-700 bg-orange-500/10' },
  { label: 'FAISS', span: 'col-span-1', color: 'border-obsidian-500/30 text-obsidian-300 bg-obsidian-700/30' },
  { label: 'Ollama', span: 'col-span-2', color: 'border-orange-600/30 text-orange-700 bg-orange-500/10' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <span id="about" aria-hidden="true" />
      <div className="section-pad max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <motion.div
          className="lg:col-span-7 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-xs font-medium text-obsidian-200">Full-Stack &amp; Generative AI</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-semibold text-obsidian-50 leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl"
          >
            Full-Stack <span className="text-gradient">(MERN)</span> Developer &amp;{' '}
            <span className="text-gradient">Generative AI</span> Enthusiast
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base lg:text-lg text-obsidian-300 leading-relaxed"
          >
            Final-year B.Tech IT student (2027) at Coimbatore Institute of Engineering and
            Technology (87% aggregate). Specialized in building scalable MERN web applications,
            REST APIs, and local Generative AI / RAG solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
           <a
  href="/images/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold px-6 py-3.5 transition-all hover:shadow-glow cursor-pointer"
>
  <Download size={18} />
  View / Download Resume
  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
</a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-obsidian-500/50 hover:border-amber-500/50 text-obsidian-200 font-medium px-6 py-3.5 transition-all hover:bg-obsidian-700/50 hover:text-obsidian-50"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-[#F4A261]/50 via-[#E57C23]/20 to-[#E88A38]/40 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 shadow-[0_0_40px_rgba(245,158,11,0.25)]">
              <div className="bg-white border border-stone-200 rounded-2xl p-3">
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-obsidian-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent z-10 pointer-events-none" />
                  <img
                    src="/images/profile/profile.png"
                    alt="Rithika R — Developer"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="px-2 pt-3 pb-1 flex items-center justify-between">
                  <span className="font-display font-semibold text-obsidian-50 text-sm">Rithika R</span>
                  <span className="text-xs text-obsidian-300">MERN &amp; AI Dev</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 sm:-left-10 w-56 sm:w-64 glass p-4 rounded-2xl shadow-glass">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-obsidian-400 mb-3">
                Core Stack
              </p>
              <div className="grid grid-cols-3 gap-2">
                {stackPills.map((p) => (
                  <span
                    key={p.label}
                    className={`text-xs font-medium px-2.5 py-1.5 rounded-lg border text-center ${p.color} ${p.span}`}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-2 sm:-right-6 glass px-4 py-3 rounded-2xl shadow-glass animate-float">
              <p className="font-display font-bold text-2xl text-amber-600 leading-none">87%</p>
              <p className="text-[11px] text-obsidian-400 mt-1">B.Tech IT</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
