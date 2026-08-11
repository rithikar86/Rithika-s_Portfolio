import { useState } from 'react';
import { Github, Linkedin, Mail, Heart, Copy, Check } from 'lucide-react';
import { profile } from '@/data/personal';

const socials = [
  { label: 'GitHub', href: 'https://github.com/rithikar86', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rithikar86', Icon: Linkedin },
  { label: 'Email', href: 'mailto:rithikarajar@gmail.com?subject=Portfolio%20Inquiry', Icon: Mail },
];

export default function Footer() {
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
    <footer className="section-pad py-10 bg-[#EFECE6]/90 backdrop-blur-md border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="font-display font-bold text-obsidian-50 text-lg tracking-tight">RITHIKA R</span>
          <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p className="text-sm text-obsidian-400 flex items-center gap-1.5">
            Built with <Heart size={13} className="text-amber-500 fill-amber-500" /> by Rithika R
          </p>
          <a
            href="#contact"
            className="text-sm text-obsidian-400 hover:text-amber-600 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-1">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="grid place-items-center h-9 w-9 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 border border-stone-300 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email to clipboard"
            title={copied ? 'Copied!' : 'Copy email'}
            className="grid place-items-center h-9 w-9 rounded-lg bg-stone-200/70 hover:bg-stone-300 text-stone-800 border border-stone-300 transition-colors cursor-pointer"
          >
            {copied ? <Check size={18} className="text-amber-600" /> : <Copy size={18} />}
          </button>
        </div>
      </div>
    </footer>
  );
}
