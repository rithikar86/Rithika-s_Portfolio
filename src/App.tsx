import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import Achievements from '@/components/achievements/Achievements';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import Global3DCanvas from '@/components/Global3DCanvas';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const sections = ['Home', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = visible.target.id;
          if (id === 'skills') setActiveSection('Skills');
          else if (id === 'projects') setActiveSection('Projects');
          else if (id === 'experience') setActiveSection('Experience');
          else if (id === 'achievements') setActiveSection('Achievements');
          else if (id === 'contact') setActiveSection('Contact');
          else setActiveSection('Home');
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => {
      const targetId = section.toLowerCase();
      const element = document.getElementById(targetId === 'home' ? 'home' : targetId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream-100 text-ink-800 selection:bg-rust-500/20">
      <Global3DCanvas activeTab={activeSection} />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
