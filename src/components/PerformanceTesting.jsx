import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { FaChartBar, FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const AnimatedCounter = ({ end, duration = 2, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span>{count}{suffix}</span>;
};

const PerformanceTesting = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const responseData = [
    { label: 'Min', value: 120, max: 2000, color: '#22c55e' },
    { label: 'Avg', value: 450, max: 2000, color: '#00e5ff' },
    { label: 'Median', value: 380, max: 2000, color: '#3b82f6' },
    { label: '90th %', value: 850, max: 2000, color: '#f59e0b' },
    { label: '95th %', value: 1200, max: 2000, color: '#ec4899' },
    { label: 'Max', value: 1800, max: 2000, color: '#ef4444' },
  ];

  const metrics = [
    { icon: FaUsers, label: 'Virtual Users', value: 10, suffix: '', color: 'from-neon-green to-neon-cyan' },
    { icon: FaClock, label: 'Avg Response', value: 450, suffix: 'ms', color: 'from-neon-cyan to-neon-blue' },
    { icon: FaCheckCircle, label: 'Success Rate', value: 99, suffix: '%', color: 'from-neon-purple to-neon-pink' },
    { icon: FaChartBar, label: 'Throughput', value: 85, suffix: '/s', color: 'from-neon-amber to-neon-pink' },
  ];

  return (
    <section id="performance" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number="07"
          title="Performance Testing"
          subtitle="Load testing results demonstrating application performance under stress"
        />

        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 text-center group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="text-dark-950" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} inView={inView} />
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Response Time Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <div>
                <h3 className="text-white font-semibold text-sm">Response Time Distribution</h3>
                <p className="text-gray-500 text-xs mt-1">Login Load Test — JMeter Results</p>
              </div>
              <span className="badge-pass text-xs font-mono px-3 py-1 rounded-full">
                ✓ Within Acceptable Limits
              </span>
            </div>

            {/* Bar Chart */}
            <div className="space-y-4">
              {responseData.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-xs text-gray-500 font-mono w-16 text-right shrink-0">
                    {item.label}
                  </span>
                  <div className="flex-1 h-8 bg-dark-700/30 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(item.value / item.max) * 100}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full flex items-center justify-end pr-3 relative"
                      style={{
                        background: `linear-gradient(90deg, ${item.color}33, ${item.color}aa)`,
                      }}
                    >
                      <span className="text-xs font-mono text-white font-semibold">
                        {item.value}ms
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-8 pt-6 border-t border-white/5"
            >
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                    <FaCheckCircle className="text-success text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">Test Summary</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Simulated <span className="text-neon-green font-semibold">10 virtual users</span> logging in simultaneously.
                      Response times were within acceptable limits with <span className="text-success font-semibold">no major failures</span> observed.
                      The system demonstrated stable performance under concurrent load conditions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTesting;
