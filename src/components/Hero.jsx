import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Senior Software Test Engineer';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '50+', label: 'Test Suites' },
    { value: '99%', label: 'Bug Detection' },
    { value: '3+', label: 'Projects' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Terminal badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-full px-5 py-2 mb-8 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-xs text-gray-400">
              system.status: <span className="text-neon-green">all_tests_passing</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
          >
            <span className="text-white">Aryamol</span>{' '}
            <span className="gradient-text">M M</span>
          </motion.h1>

          {/* Typing effect title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-mono text-lg md:text-xl text-gray-400 mb-6 h-8"
          >
            <span className="text-neon-green/70">{'> '}</span>
            <span className="text-gray-300">{typedText}</span>
            <span className="cursor-blink text-neon-green">▊</span>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-2 text-gray-500 text-sm mb-10"
          >
            <FaMapMarkerAlt className="text-neon-green/60" />
            <span>Ernakulam, Kerala, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-neon-green to-neon-cyan text-dark-950 font-semibold rounded-xl transition-all flex items-center gap-2 text-sm"
            >
              <FaEnvelope />
              Get in Touch
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aryamol-m-m-95b310147"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 glass rounded-xl text-gray-300 hover:text-neon-green transition-all flex items-center gap-2 text-sm font-medium hover:border-neon-green/30"
            >
              <FaLinkedin />
              LinkedIn Profile
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-3xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(0, 255, 136, 0.3)' }}
                className="glass-card rounded-xl p-5 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 hover:text-neon-green transition-colors"
          >
            <FaChevronDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
