import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cpu, ShieldCheck, X } from 'lucide-react';
import { pipelineStages, tradeoffs } from '@/data/engineering';

type ArchitectureModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ArchitectureModal({ open, onClose }: ArchitectureModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="System architecture — local RAG pipeline"
        >
          <motion.div
            className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-2xl bg-[#131B2E]/95 backdrop-blur-xl border border-slate-800/80 shadow-glass rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-slate-800/80 bg-[#0C111D]/80">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="grid place-items-center h-8 w-8 rounded-lg bg-emerald-500/10 text-sky-400 shrink-0">
                  <Cpu size={16} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-obsidian-50 text-sm truncate">
                    System Architecture
                  </h3>
                  <p className="text-[11px] text-obsidian-400 truncate">
                    Private Document Intelligence AI — Local RAG Pipeline
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close architecture preview"
                className="grid place-items-center h-9 w-9 rounded-lg border border-slate-800/80 bg-obsidian-700/40 text-obsidian-300 hover:text-white hover:border-obsidian-400 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-4">
                  Pipeline
                </p>
                <div className="space-y-0">
                  {pipelineStages.map((stage, i) => (
                    <div key={stage.title} className="relative flex gap-4">
                      {i < pipelineStages.length - 1 && (
                        <span className="absolute left-[19px] top-11 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-violet-500/20 to-transparent" />
                      )}
                      <div className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-obsidian-700/50 border border-sky-500/30 text-sky-400">
                        <stage.icon size={18} />
                      </div>
                      <div className="pb-6 min-w-0">
                        <p className="font-display font-semibold text-obsidian-50 text-sm">
                          {stage.title}
                        </p>
                        <p className="text-xs text-obsidian-400 mt-0.5 leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-700/40" />

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-3">
                  Design Tradeoffs
                </p>
                <div className="space-y-2.5">
                  {tradeoffs.map((t) => (
                    <div
                      key={t.title}
                      className="rounded-xl border border-slate-800/80 bg-[#0C111D]/80 px-4 py-3"
                    >
                      <p className="text-sm font-medium text-obsidian-100">{t.title}</p>
                      <p className="text-xs text-obsidian-400 mt-1 leading-relaxed">{t.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-sky-500/20 bg-sky-400/5 px-4 py-3">
                <ShieldCheck size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <p className="text-xs text-obsidian-300">
                  All processing runs fully on-device — documents never leave the machine.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
