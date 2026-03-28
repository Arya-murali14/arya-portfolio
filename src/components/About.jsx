import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaRobot, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const highlights = [
    { icon: FaRobot, title: 'Automation Testing', desc: 'Robot Framework, Selenium, Playwright', color: 'from-neon-green to-neon-cyan' },
    { icon: FaShieldAlt, title: 'Security Testing', desc: 'OWASP ZAP vulnerability scanning', color: 'from-neon-purple to-neon-pink' },
    { icon: FaChartLine, title: 'Performance Testing', desc: 'JMeter load & stress testing', color: 'from-neon-cyan to-neon-blue' },
    { icon: FaMobileAlt, title: 'Cross-Platform QA', desc: 'Web, Android & iOS testing', color: 'from-neon-amber to-neon-pink' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader number="01" title="About Me" subtitle="Quality is not an act, it is a habit" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal About */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-xl overflow-hidden">
              <div className="px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-fail/70" />
                <div className="w-3 h-3 rounded-full bg-warning/70" />
                <div className="w-3 h-3 rounded-full bg-success/70" />
                <span className="ml-3 text-xs font-mono text-gray-500">about_me.py</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="mb-3">
                  <span className="code-keyword">class</span> <span className="code-function">QAEngineer</span><span className="text-gray-400">:</span>
                </div>
                <div className="pl-6 mb-2">
                  <span className="code-keyword">def</span> <span className="code-function">__init__</span><span className="text-gray-400">(self):</span>
                </div>
                <div className="pl-10 space-y-1.5 text-gray-400">
                  <div>self.name = <span className="code-string">"Aryamol M M"</span></div>
                  <div>self.role = <span className="code-string">"Senior Software Test Engineer"</span></div>
                  <div>self.experience = <span className="code-number">6</span> <span className="code-comment"># years</span></div>
                  <div>self.specializations = [</div>
                  <div className="pl-4"><span className="code-string">"Automation Testing"</span>,</div>
                  <div className="pl-4"><span className="code-string">"Security Testing"</span>,</div>
                  <div className="pl-4"><span className="code-string">"E2E Test Execution"</span></div>
                  <div>]</div>
                  <div className="mt-3">
                    <span className="code-keyword">def</span> <span className="code-function">mission</span><span className="text-gray-400">(self):</span>
                  </div>
                  <div className="pl-4">
                    <span className="code-keyword">return</span> <span className="code-string">"Delivering high-quality</span>
                  </div>
                  <div className="pl-8">
                    <span className="code-string">web & mobile applications"</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-xl p-6 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="text-dark-950 text-xl" />
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
