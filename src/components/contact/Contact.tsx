import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="section-pad max-w-7xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(124,58,237,0.1), rgba(16,185,129,0.15))',
            border: '1px solid rgba(16,185,129,0.2)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display font-semibold text-obsidian-50 text-3xl lg:text-4xl tracking-tight leading-tight">
                Step Into Our World
              </h2>
              <p className="mt-4 text-obsidian-200 text-lg leading-relaxed max-w-xl">
                Let's build reliable, user-focused software together.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://github.com/rithikar86"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rithikar86"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:rithikarajar@gmail.com"
                  aria-label="Email"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="mailto:rithikarajar@gmail.com"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold px-7 py-4 transition-all hover:shadow-glow"
              >
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
