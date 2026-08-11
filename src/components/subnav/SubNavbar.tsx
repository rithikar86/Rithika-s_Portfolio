import { useState } from 'react';
import { FileText, Radio, Cpu } from 'lucide-react';
import ArchitectureModal from './ArchitectureModal';

export default function SubNavbar() {
  const [archOpen, setArchOpen] = useState(false);

  return (
    <>
      <div className="fixed top-16 md:top-20 inset-x-0 z-40 border-b border-amber-500/20 bg-[#EFECE6]/90 backdrop-blur-md">
        <div className="section-pad max-w-7xl mx-auto flex items-center justify-between gap-3 h-8 lg:h-10">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 truncate">
              STATUS: AVAILABLE FOR ROLES
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-2 text-[11px] text-obsidian-300">
              <Radio size={12} className="text-amber-500" />
              MERN + Local RAG / Ollama
            </span>
            <span className="hidden sm:block h-3.5 w-px bg-obsidian-500/50" />
            <a
              href="/images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-obsidian-200 hover:text-amber-600 transition-colors"
            >
              <FileText size={12} />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setArchOpen(true)}
              aria-label="Open system architecture"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-obsidian-200 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <Cpu size={12} />
              Architecture
            </button>
          </div>
        </div>
      </div>

      <ArchitectureModal open={archOpen} onClose={() => setArchOpen(false)} />
    </>
  );
}
