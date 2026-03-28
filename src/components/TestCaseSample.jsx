import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const TestCaseSample = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const steps = [
    { id: 1, action: 'Open application URL', status: 'pass', data: 'https://app.example.com' },
    { id: 2, action: 'Enter valid username', status: 'pass', data: 'testuser@example.com' },
    { id: 3, action: 'Enter valid password', status: 'pass', data: '••••••••' },
    { id: 4, action: 'Click Login button', status: 'pass', data: 'Submit form' },
    { id: 5, action: 'Verify dashboard redirect', status: 'pass', data: '/dashboard' },
  ];

  return (
    <section id="testcase" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number="05"
          title="Test Case Sample"
          subtitle="Structured approach to validating application functionality"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                  <FaPlay className="text-neon-green text-sm" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">TC-001: Login Functionality</h3>
                  <span className="text-gray-500 text-xs">Module: Authentication</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="badge-pass text-xs font-mono px-3 py-1 rounded-full">PASSED</span>
                <span className="text-gray-500 text-xs font-mono">Priority: High</span>
              </div>
            </div>

            {/* Steps Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-16">#</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Step</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Test Data</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {steps.map((step, i) => (
                    <motion.tr
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="border-b border-white/5 last:border-0 hover:bg-neon-green/3 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-mono text-gray-500">{String(step.id).padStart(2, '0')}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{step.action}</td>
                      <td className="px-6 py-4">
                        <code className="text-xs font-mono text-neon-cyan/70 bg-dark-700/40 px-2 py-1 rounded">
                          {step.data}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FaCheckCircle className="text-success inline-block" />
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Expected Result */}
            <div className="px-6 py-4 border-t border-white/5 bg-success/5">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-success text-sm" />
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Expected Result:</span>
                <span className="text-sm text-success">User successfully logs in and is redirected to dashboard</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestCaseSample;
