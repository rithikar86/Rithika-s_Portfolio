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
        scrolled ? 'bg-cream-100/85 backdrop-blur-xl border-b border-gray-200/60' : 'bg-transparent'
      }`}
    >
      <nav className="section-pad max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="font-display font-bold text-ink-900 text-xl tracking-tight">
            RITHIKA R
          </span>
          <span className="h-2 w-2 rounded-full bg-rust-500" />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-ink-500 hover:text-ink-900 transition-colors rounded-lg hover:bg-cream-300/60"
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
              className="grid place-items-center h-9 w-9 rounded-lg text-ink-500 hover:text-rust-500 hover:bg-cream-300/60 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button
          className="lg:hidden grid place-items-center h-10 w-10 rounded-lg text-ink-800 hover:bg-cream-300"
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
        <div className="px-5 pb-6 pt-2 space-y-1 bg-cream-100/95 backdrop-blur-xl border-b border-gray-200/60">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-ink-700 hover:bg-cream-300 hover:text-ink-900 transition-colors"
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
                className="grid place-items-center h-10 w-10 rounded-lg text-ink-500 hover:text-rust-500 hover:bg-cream-300 transition-colors"
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
