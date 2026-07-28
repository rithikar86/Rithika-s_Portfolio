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
    <div className="min-h-screen bg-cream-100 text-ink-800 selection:bg-rust-500/20">
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
  );
}
