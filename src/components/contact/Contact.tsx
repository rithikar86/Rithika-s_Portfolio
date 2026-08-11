import { useState } from 'react';
import { Mail, ArrowRight, Github, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactItems, profile } from '@/data/personal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="section-pad max-w-7xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.14), rgba(229,124,35,0.1), rgba(245,158,11,0.14))',
            border: '1px solid rgba(245,158,11,0.3)',
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
                  className="grid place-items-center h-10 w-10 rounded-xl bg-stone-200/70 hover:bg-stone-300 text-stone-800 border border-stone-300 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rithikar86"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-stone-200/70 hover:bg-stone-300 text-stone-800 border border-stone-300 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`}
                  aria-label="Email"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-stone-200/70 hover:bg-stone-300 text-stone-800 border border-stone-300 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-xl">
                {contactItems.map((item) => {
                  if (item.label === 'Email') {
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-xl bg-white/70 border border-stone-200 px-4 py-3 hover:border-amber-400 transition-all"
                      >
                        <a
                          href={item.href}
                          aria-label={`Email ${item.value}`}
                          className="flex items-center gap-3 min-w-0 flex-1 group"
                        >
                          <span className="grid place-items-center h-9 w-9 rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                            <item.icon size={16} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[11px] font-semibold uppercase tracking-wider text-obsidian-400">
                              {item.label}
                            </span>
                            <span className="block text-sm text-obsidian-100 truncate group-hover:text-amber-600 transition-colors">
                              {item.value}
                            </span>
                          </span>
                        </a>
                        <button
                          type="button"
                          onClick={copyEmail}
                          aria-label="Copy email to clipboard"
                          title={copied ? 'Copied!' : 'Copy email'}
                          className="grid place-items-center h-9 w-9 rounded-lg border border-stone-300 text-stone-500 hover:text-amber-600 hover:border-amber-500/40 transition-all cursor-pointer"
                        >
                          {copied ? (
                            <Check size={16} className="text-amber-600" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    );
                  }

                  const external = item.href ? item.href.startsWith('http') : false;

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                        className="group flex items-center gap-3 rounded-xl bg-white/70 border border-stone-200 px-4 py-3 hover:border-amber-400 hover:bg-stone-100 transition-all"
                      >
                        <span className="grid place-items-center h-9 w-9 rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                          <item.icon size={16} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] font-semibold uppercase tracking-wider text-obsidian-400">
                            {item.label}
                          </span>
                          <span className="block text-sm text-obsidian-100 truncate group-hover:text-amber-600 transition-colors">
                            {item.value}
                          </span>
                        </span>
                        <ExternalLink
                          size={14}
                          className="text-obsidian-500 group-hover:text-amber-600 transition-colors"
                        />
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl bg-slate-800/60 border border-slate-700/50 px-4 py-3"
                    >
                      <span className="grid place-items-center h-9 w-9 rounded-lg bg-sky-400/10 text-sky-400 shrink-0">
                        <item.icon size={16} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-obsidian-400">
                          {item.label}
                        </span>
                        <span className="block text-sm text-obsidian-100 truncate">
                          {item.value}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`}
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
