import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/rithikar86', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rithikar86', Icon: Linkedin },
  { label: 'Email', href: 'mailto:rithikarajar@gmail.com', Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="section-pad py-10 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="font-display font-bold text-ink-900 text-lg tracking-tight">RITHIKA R</span>
          <span className="h-2 w-2 rounded-full bg-rust-500" />
        </div>

        <p className="text-sm text-ink-400 flex items-center gap-1.5">
          Built with <Heart size={13} className="text-rust-500 fill-rust-500" /> by Rithika R
        </p>

        <div className="flex items-center gap-1">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="grid place-items-center h-9 w-9 rounded-lg text-ink-500 hover:text-rust-500 hover:bg-cream-300 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
