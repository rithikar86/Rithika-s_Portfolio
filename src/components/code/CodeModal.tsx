import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Code2, Copy, X } from 'lucide-react';
import SyntaxHighlighter from './SyntaxHighlighter';
import type { CodeSnippet } from '@/data/engineering';

type CodeModalProps = {
  open: boolean;
  onClose: () => void;
  snippet?: CodeSnippet;
};

export default function CodeModal({ open, onClose, snippet }: CodeModalProps) {
  const [copied, setCopied] = useState(false);

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

  const copyCode = async () => {
    if (!snippet) return;
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {open && snippet && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${snippet.title} code preview`}
        >
          <motion.div
            className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-2xl glass rounded-2xl border border-emerald-500/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-obsidian-500/30">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="grid place-items-center h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Code2 size={16} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-obsidian-50 text-sm truncate">
                    {snippet.title}
                  </h3>
                  <p className="text-[11px] text-obsidian-400">{snippet.language}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={copyCode}
                  aria-label="Copy code"
                  className="grid place-items-center h-9 w-9 rounded-lg border border-obsidian-500/30 bg-obsidian-700/40 text-obsidian-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close code preview"
                  className="grid place-items-center h-9 w-9 rounded-lg border border-obsidian-500/30 bg-obsidian-700/40 text-obsidian-300 hover:text-white hover:border-obsidian-400 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <SyntaxHighlighter code={snippet.code} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
