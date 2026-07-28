import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream-200/50">
      <div className="section-pad max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-rust-500 px-7 py-12 sm:px-12 lg:px-16 lg:py-16 shadow-rust-glow transition-all duration-300 hover:-translate-y-0.5">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/5" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display font-semibold text-white text-3xl lg:text-4xl tracking-tight leading-tight">
                Step Into Our World
              </h2>
              <p className="mt-4 text-white/85 text-lg leading-relaxed max-w-xl">
                Let's build reliable, user-focused software together.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://github.com/rithikar86"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rithikar86"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:rithikarajar@gmail.com"
                  aria-label="Email"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="mailto:rithikarajar@gmail.com"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-white hover:bg-cream-100 text-rust-600 font-semibold px-7 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg"
              >
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
