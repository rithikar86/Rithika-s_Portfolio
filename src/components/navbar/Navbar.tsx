import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, socials } from '@/data/personal';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/80 backdrop-blur-xl border-b border-obsidian-500/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-pad max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="font-display font-bold text-obsidian-50 text-xl tracking-tight">
            RITHIKA R
          </span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-obsidian-300 hover:text-obsidian-50 transition-colors rounded-lg hover:bg-obsidian-700/50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-1">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="grid place-items-center h-9 w-9 rounded-lg text-obsidian-400 hover:text-emerald-400 hover:bg-obsidian-700/50 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button
          className="lg:hidden grid place-items-center h-10 w-10 rounded-lg text-obsidian-200 hover:bg-obsidian-700/50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[440px]' : 'max-h-0'
        }`}
      >
        <div className="px-5 pb-6 pt-2 space-y-1 bg-obsidian-950/95 backdrop-blur-xl border-b border-obsidian-500/30">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-obsidian-300 hover:bg-obsidian-700/50 hover:text-obsidian-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="grid place-items-center h-10 w-10 rounded-lg text-obsidian-400 hover:text-emerald-400 hover:bg-obsidian-700/50 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
