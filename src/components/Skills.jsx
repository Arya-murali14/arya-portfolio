import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaBolt, FaShieldAlt, FaCode, FaTools, FaDesktop } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    title: 'Automation',
    icon: FaRobot,
    color: '#00ff88',
    skills: [
      { name: 'Robot Framework', level: 90 },
      { name: 'Selenium', level: 40 },
      { name: 'Playwright', level: 35 },
    ],
  },
  {
    title: 'Performance Testing',
    icon: FaBolt,
    color: '#00e5ff',
    skills: [
      { name: 'JMeter', level: 80 },
    ],
  },
  {
    title: 'Security Testing',
    icon: FaShieldAlt,
    color: '#a855f7',
    skills: [
      { name: 'OWASP ZAP', level: 75 },
    ],
  },
  {
    title: 'Languages',
    icon: FaCode,
    color: '#ec4899',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'TypeScript', level: 55 },
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    color: '#f59e0b',
    skills: [
      { name: 'JIRA', level: 90 },
      { name: 'TestLink', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Bugzilla', level: 75 },
    ],
  },
  {
    title: 'Platforms',
    icon: FaDesktop,
    color: '#3b82f6',
    skills: [
      { name: 'Windows', level: 90 },
      { name: 'Linux', level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, color, delay, inView }) => (
  <div className="mb-3 last:mb-0">
    <div className="flex justify-between mb-1.5">
      <span className="text-xs text-gray-400 font-medium">{name}</span>
      <span className="text-xs font-mono" style={{ color }}>{level}%</span>
    </div>
    <div className="w-full h-2 bg-dark-700/50 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: delay, ease: 'easeOut' }}
        className="h-full rounded-full relative"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
      >
        <div
          className="absolute right-0 top-0 w-2 h-full rounded-full blur-sm"
          style={{ background: color }}
        />
      </motion.div>
    </div>
  </div>
);

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number="02"
          title="Skills & Tools"
          subtitle="Technologies and frameworks I work with to ensure software quality"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card rounded-xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${category.color}15`,
                    border: `1px solid ${category.color}30`,
                  }}
                >
                  <category.icon style={{ color: category.color }} className="text-lg" />
                </div>
                <h3 className="text-white font-semibold text-sm">{category.title}</h3>
              </div>

              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={catIdx * 0.1 + skillIdx * 0.15}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
