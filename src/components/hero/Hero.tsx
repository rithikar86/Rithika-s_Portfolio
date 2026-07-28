import { ArrowRight, Download, Sparkles } from 'lucide-react';

const stackPills = [
  { label: 'React', span: 'col-span-2', tone: 'bg-rust-50 text-rust-700 border-rust-200' },
  { label: 'Node.js', span: 'col-span-1', tone: 'bg-cream-200 text-ink-700 border-cream-400' },
  { label: 'MongoDB', span: 'col-span-1', tone: 'bg-cream-200 text-ink-700 border-cream-400' },
  { label: 'Python', span: 'col-span-2', tone: 'bg-rust-50 text-rust-700 border-rust-200' },
  { label: 'LangChain', span: 'col-span-2', tone: 'bg-sage-400/15 text-sage-500 border-sage-400/30' },
  { label: 'FAISS', span: 'col-span-1', tone: 'bg-cream-200 text-ink-700 border-cream-400' },
  { label: 'Ollama', span: 'col-span-2', tone: 'bg-sage-400/15 text-sage-500 border-sage-400/30' },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -right-20 h-72 w-72 rounded-full bg-rust-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-sage-400/5 blur-3xl" />
      </div>

      <div className="section-pad max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200/60 px-3.5 py-1.5 shadow-soft animate-fade-in">
            <Sparkles size={14} className="text-rust-500" />
            <span className="text-xs font-medium text-ink-600">Full-Stack &amp; Generative AI</span>
          </div>

          <h1
            className="font-display font-semibold text-ink-900 leading-[1.05] tracking-tight animate-fade-up text-4xl sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '60ms' }}
          >
            Full-Stack <span className="text-rust-gradient">(MERN)</span> Developer &amp;{' '}
            <span className="text-rust-gradient">Generative AI</span> Enthusiast
          </h1>

          <p
            className="max-w-xl text-base lg:text-lg text-ink-500 leading-relaxed animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            Final-year B.Tech IT student (2027) at Coimbatore Institute of Engineering and
            Technology (87% aggregate). Specialized in building scalable MERN web applications,
            REST APIs, and local Generative AI / RAG solutions.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 pt-2 animate-fade-up"
            style={{ animationDelay: '180ms' }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-rust-500 hover:bg-rust-600 text-white font-semibold px-6 py-3.5 transition-all hover:shadow-rust-glow"
            >
              <Download size={18} />
              Download Resume
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 hover:border-ink-400 text-ink-800 font-medium px-6 py-3.5 transition-all hover:bg-white"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div className="relative">
            <div className="card-surface p-3 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="rounded-xl overflow-hidden aspect-[4/5] bg-cream-300">
                <img
                  src="/images/profile/profile.png"
                  alt="Rithika R — Developer"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="px-2 pt-3 pb-1 flex items-center justify-between">
                <span className="font-display font-semibold text-ink-900 text-sm">Rithika R</span>
                <span className="text-xs text-ink-400">MERN &amp; AI Dev</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 sm:-left-10 w-56 sm:w-64 card-surface p-4 shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-400 mb-3">
                Core Stack
              </p>
              <div className="grid grid-cols-3 gap-2">
                {stackPills.map((p) => (
                  <span
                    key={p.label}
                    className={`text-xs font-medium px-2.5 py-1.5 rounded-lg border text-center ${p.tone} ${p.span}`}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-2 sm:-right-6 card-surface px-4 py-3 shadow-card animate-float">
              <p className="font-display font-bold text-2xl text-rust-500 leading-none">87%</p>
              <p className="text-[11px] text-ink-400 mt-1">B.Tech IT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
