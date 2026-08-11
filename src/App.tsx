import BackgroundCanvas from '@/components/BackgroundCanvas';
import AnimatedBlob from '@/components/AnimatedBlob';
import Navbar from '@/components/navbar/Navbar';
import SubNavbar from '@/components/subnav/SubNavbar';
import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Projects';
import Engineering from '@/components/engineering/Engineering';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import Achievements from '@/components/achievements/Achievements';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-obsidian-50 selection:bg-amber-500/30 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-[#E88A38]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#E57C23]/10 blur-[140px]" />
      </div>
      <BackgroundCanvas />
      <AnimatedBlob color="rgba(244,162,97,0.15)" size={500} className="-top-48 -left-48" />
      <AnimatedBlob color="rgba(229,124,35,0.12)" size={400} className="top-1/3 -right-48" delay={3000} />
      <AnimatedBlob color="rgba(244,162,97,0.10)" size={450} className="-bottom-48 left-1/3" delay={6000} />
      <div className="relative z-10">
        <Navbar />
        <SubNavbar />
        <main>
          <Hero />
          <Projects />
          <Engineering />
          <Skills />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
