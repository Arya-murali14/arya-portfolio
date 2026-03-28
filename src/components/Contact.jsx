import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'aryammurali996@gmail.com',
      href: 'mailto:aryammurali996@gmail.com',
      color: 'from-neon-green to-neon-cyan',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Ernakulam, Kerala, India',
      href: null,
      color: 'from-neon-purple to-neon-pink',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Aryamol M M',
      href: 'https://www.linkedin.com/in/aryamol-m-m-95b310147',
      color: 'from-neon-cyan to-neon-blue',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aryammurali996@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-green/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number="08"
          title="Get in Touch"
          subtitle="Let's discuss how I can help ensure the quality of your software"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white text-xl font-bold mb-2">Let's Connect</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                I'm always open to discussing new opportunities, quality assurance challenges,
                or how we can work together to deliver bug-free software.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="glass-card rounded-xl p-5 flex items-center gap-4 group block"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <info.icon className="text-dark-950 text-xl" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{info.label}</div>
                        <div className="text-white text-sm font-medium group-hover:text-neon-green transition-colors">{info.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="glass-card rounded-xl p-5 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                        <info.icon className="text-dark-950 text-xl" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{info.label}</div>
                        <div className="text-white text-sm font-medium">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Terminal decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-xl p-4 font-mono text-xs"
            >
              <div className="text-gray-500 mb-1"><span className="text-neon-green">$</span> echo "Thanks for visiting!"</div>
              <div className="text-neon-green">Thanks for visiting!</div>
              <div className="text-gray-500"><span className="text-neon-green">$</span> echo "Let's build quality together"</div>
              <div className="text-neon-cyan">Let's build quality together</div>
              <div className="flex items-center text-gray-500 mt-1">
                <span className="text-neon-green">$</span>
                <span className="cursor-blink ml-1 text-neon-green">▊</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-2">
                  Name
                </label>
                <div className={`relative rounded-xl border transition-all duration-300 ${
                  focused === 'name' ? 'border-neon-green/50 shadow-lg shadow-neon-green/5' : 'border-white/10'
                }`}>
                  <input
                    type="text"
                    className="w-full bg-dark-700/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-2">
                  Email
                </label>
                <div className={`relative rounded-xl border transition-all duration-300 ${
                  focused === 'email' ? 'border-neon-green/50 shadow-lg shadow-neon-green/5' : 'border-white/10'
                }`}>
                  <input
                    type="email"
                    className="w-full bg-dark-700/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-2">
                  Message
                </label>
                <div className={`relative rounded-xl border transition-all duration-300 ${
                  focused === 'message' ? 'border-neon-green/50 shadow-lg shadow-neon-green/5' : 'border-white/10'
                }`}>
                  <textarea
                    className="w-full bg-dark-700/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none resize-none h-32"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-gradient-to-r from-neon-green to-neon-cyan text-dark-950 font-semibold rounded-xl flex items-center justify-center gap-2 text-sm transition-all"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
