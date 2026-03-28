import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaChevronRight } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    role: 'Software Engineer – Testing',
    company: 'ThinkPalm Technologies Pvt Ltd',
    period: 'Jul 2019 – Present',
    isCurrent: true,
    gradient: 'from-neon-green to-neon-cyan',
    responsibilities: [
      'Automated test scenarios using Robot Framework (Python)',
      'Performed performance testing using JMeter',
      'Conducted security testing using OWASP ZAP',
      'API testing using Postman',
      'Executed functional and regression testing',
      'Reported defects using JIRA & Bugzilla',
      'Tested web & mobile applications and supported UAT releases',
    ],
  },
  {
    role: 'Software Testing Intern',
    company: 'Spectrum Softtech Solutions',
    period: 'May 2018 – Jun 2018',
    isCurrent: false,
    gradient: 'from-neon-purple to-neon-pink',
    responsibilities: [
      'Created test cases and test plans for web applications',
      'Performed functional and compatibility testing',
      'Developed basic automation scripts using Selenium',
      'Identified and reported defects',
    ],
  },
];

const WorkExperience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number="03"
          title="Work Experience"
          subtitle="My professional journey in software quality assurance"
        />

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green/40 via-neon-purple/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-8 hidden sm:block">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg ${exp.isCurrent ? 'animate-pulse shadow-neon-green/30' : ''}`} />
                </div>

                <div className="glass-card rounded-2xl overflow-hidden">
                  {/* Gradient top bar */}
                  <div className={`h-1 bg-gradient-to-r ${exp.gradient}`} />

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <FaBuilding className="text-xs" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.isCurrent && (
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-success/10 text-success border border-success/20 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                            Current
                          </span>
                        )}
                        <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-dark-700/50 text-gray-400 border border-white/5 flex items-center gap-1.5">
                          <FaCalendarAlt className="text-[10px] text-neon-green/60" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5 mt-5">
                      {exp.responsibilities.map((resp, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -15 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.2 + j * 0.06 }}
                          className="flex items-start gap-2.5 text-sm text-gray-400"
                        >
                          <FaChevronRight className="text-neon-green text-[8px] mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
