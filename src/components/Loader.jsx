import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [currentTest, setCurrentTest] = useState(0);

  const tests = [
    { name: 'Initializing test environment...', status: 'pass' },
    { name: 'Loading portfolio modules...', status: 'pass' },
    { name: 'Running visual regression tests...', status: 'pass' },
    { name: 'Validating component integrity...', status: 'pass' },
    { name: 'All tests passed ✓', status: 'complete' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const testInterval = setInterval(() => {
      setCurrentTest((prev) => {
        if (prev >= tests.length - 1) {
          clearInterval(testInterval);
          return tests.length - 1;
        }
        return prev + 1;
      });
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(testInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-lg px-8">
        {/* Terminal Header */}
        <div className="glass rounded-t-xl px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-fail/80"></div>
          <div className="w-3 h-3 rounded-full bg-warning/80"></div>
          <div className="w-3 h-3 rounded-full bg-success/80"></div>
          <span className="ml-3 text-sm font-mono text-gray-400">portfolio_test_runner.sh</span>
        </div>

        {/* Terminal Body */}
        <div className="glass rounded-b-xl p-6 border-t-0 font-mono text-sm">
          {tests.slice(0, currentTest + 1).map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="text-neon-green">$</span>
              <span className="text-gray-300">{test.name}</span>
              {i < currentTest && (
                <span className="text-success ml-auto">✓</span>
              )}
            </motion.div>
          ))}

          {/* Progress Bar */}
          <div className="mt-6 mb-2">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400 text-xs">Test Progress</span>
              <span className="text-neon-green text-xs">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #00ff88, #00e5ff)',
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          <div className="text-gray-500 text-xs mt-4 flex items-center">
            <span>Loading portfolio</span>
            <span className="cursor-blink ml-1 text-neon-green">▊</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
