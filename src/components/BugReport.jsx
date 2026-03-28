import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBug, FaExclamationTriangle } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const BugReport = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="bugreport" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number="06"
          title="Bug Report Sample"
          subtitle="Detailed defect documentation for effective debugging"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden">
            {/* Bug Report Header */}
            <div className="px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-fail/10 border border-fail/20 flex items-center justify-center">
                  <FaBug className="text-fail text-sm" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">BUG-2024-0042</h3>
                  <span className="text-gray-500 text-xs">Created: 2024-01-15 | Module: Authentication</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="badge-fail text-xs font-mono px-3 py-1 rounded-full flex items-center gap-1.5">
                  <FaExclamationTriangle className="text-[10px]" />
                  HIGH SEVERITY
                </span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Title</h4>
                <p className="text-white font-medium">Login fails with valid credentials</p>
              </div>

              {/* Steps to Reproduce */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Steps to Reproduce</h4>
                <div className="space-y-2">
                  {[
                    'Navigate to login page',
                    'Enter valid username and password',
                    'Click the "Login" button',
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-dark-700/30 border border-white/5"
                    >
                      <span className="w-7 h-7 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-300">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="p-4 rounded-xl bg-success/5 border border-success/10"
                >
                  <h4 className="text-xs font-semibold text-success uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    Expected Result
                  </h4>
                  <p className="text-sm text-gray-300">User should log in successfully and be redirected to the dashboard page.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="p-4 rounded-xl bg-fail/5 border border-fail/10"
                >
                  <h4 className="text-xs font-semibold text-fail uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-fail" />
                    Actual Result
                  </h4>
                  <p className="text-sm text-gray-300">Error message "Invalid credentials" is displayed despite entering valid username and password.</p>
                </motion.div>
              </div>

              {/* Metadata */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3 pt-4 border-t border-white/5"
              >
                {[
                  { label: 'Severity', value: 'High', color: 'text-fail' },
                  { label: 'Priority', value: 'P1', color: 'text-warning' },
                  { label: 'Type', value: 'Functional', color: 'text-neon-cyan' },
                  { label: 'Status', value: 'Open', color: 'text-neon-green' },
                ].map((meta) => (
                  <div key={meta.label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-700/30 border border-white/5">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">{meta.label}:</span>
                    <span className={`text-xs font-semibold ${meta.color}`}>{meta.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BugReport;
