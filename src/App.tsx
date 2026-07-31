import BackgroundCanvas from '@/components/BackgroundCanvas';
import AnimatedBlob from '@/components/AnimatedBlob';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import Achievements from '@/components/achievements/Achievements';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-obsidian-50 selection:bg-emerald-500/30 overflow-x-hidden">
      <BackgroundCanvas />
      <AnimatedBlob color="rgba(16,185,129,0.12)" size={500} className="-top-48 -left-48" />
      <AnimatedBlob color="rgba(124,58,237,0.08)" size={400} className="top-1/3 -right-48" delay={3000} />
      <AnimatedBlob color="rgba(16,185,129,0.08)" size={450} className="-bottom-48 left-1/3" delay={6000} />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
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
