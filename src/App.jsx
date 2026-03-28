import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import TestCaseSample from './components/TestCaseSample';
import BugReport from './components/BugReport';
import PerformanceTesting from './components/PerformanceTesting';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ParticleField from './components/ParticleField';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-950 grid-bg">
      <ParticleField />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <main key="main" className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <WorkExperience />
            <Projects />
            <TestCaseSample />
            <BugReport />
            <PerformanceTesting />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
